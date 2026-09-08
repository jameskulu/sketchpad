import {
  cloneSnapshot,
  contentBounds,
  elementBounds,
  elementCenter,
  nextId,
  pointInElement,
  type Element,
  type Erasure,
  type ShapeElement,
  type Snapshot,
  type TextElement,
  type ToolId,
} from "./elements";
import { drawScene } from "./renderer";

export interface SketchpadUI {
  toolButtons: Record<ToolId, HTMLButtonElement>;
  undoBtn: HTMLButtonElement;
  redoBtn: HTMLButtonElement;
  deleteBtn: HTMLButtonElement;
  zoomOutBtn: HTMLButtonElement;
  zoomInBtn: HTMLButtonElement;
  zoomFitBtn: HTMLButtonElement;
  zoom100Btn: HTMLButtonElement;
  clearBtn: HTMLButtonElement;
  gridBtn: HTMLButtonElement;
  fullscreenBtn: HTMLButtonElement;
  fullscreenBtnMobile: HTMLButtonElement;
  downloadBtn: HTMLButtonElement;
  swatches: NodeListOf<HTMLElement>;
  colorInput: HTMLInputElement;
  sizeSlider: HTMLInputElement;
  sizeLabel: HTMLElement;
  opacitySlider: HTMLInputElement;
  opacityLabel: HTMLElement;
  fillToggle: HTMLButtonElement;
  zoomLabel: HTMLElement;
  coordsLabel: HTMLElement;
  autosaveLabel: HTMLElement;
  strings?: {
    autosaveSaved: string;
    autosaveSaving: string;
    autosaveNotSaved: string;
    px: string;
  };
}

export interface UIState {
  tool: ToolId;
  hasSelection: boolean;
  canUndo: boolean;
  canRedo: boolean;
  zoom: number;
  saved: "dirty" | "saving" | "saved";
  gridOn: boolean;
  filled: boolean;
  editing: boolean;
}

export interface SketchpadOptions {
  stage: HTMLElement;
  canvas: HTMLCanvasElement;
  ui: SketchpadUI;
  onState: (state: UIState) => void;
}

const HISTORY_LIMIT = 120;
const AUTOSAVE_KEY = "simplesketchpad.draft.v1";
const MIN_SCALE = 0.1;
const MAX_SCALE = 16;

function clamp(v: number, lo: number, hi: number): number {
  return Math.min(hi, Math.max(lo, v));
}

function niceStep(scale: number): { step: number; major: number } {
  const raw = 32 / scale;
  const mag = Math.pow(10, Math.floor(Math.log10(raw)));
  const norm = raw / mag;
  const s = norm < 1.5 ? 1 : norm < 3.5 ? 2 : norm < 7.5 ? 5 : 10;
  return { step: s * mag, major: 5 * s * mag };
}

interface ActivePointer {
  id: number;
  sx: number;
  sy: number;
  wx: number;
  wy: number;
  kind: "mouse" | "pen" | "touch";
  pressure: number;
}

type SelCorner = "nw" | "ne" | "se" | "sw";

interface SelGesture {
  mode: "move" | "resize" | "rotate";
  prev: Snapshot;
  moved: boolean;
  sx0: number;
  sy0: number;
  wx0: number;
  wy0: number;
  corner: SelCorner | null;
  base: Element;
  center: { x: number; y: number };
  rot0: number;
  centerS: { x: number; y: number };
  startA: number;
}

export class Sketchpad {
  private stage: HTMLElement;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private sceneCanvas: HTMLCanvasElement;
  private sceneCtx: CanvasRenderingContext2D;
  private ui: SketchpadUI;
  private onState: (s: UIState) => void;

  private elements: Element[] = [];
  private erasures: Erasure[] = [];
  private pendingEl: Element | null = null;
  private pendingEr: Erasure | null = null;

  private zSeq = 0;

  private undoStack: Snapshot[] = [];
  private redoStack: Snapshot[] = [];

  private scale = 1;
  private pan = { x: 0, y: 0 };

  private tool: ToolId = "brush";
  private color = "#0d253d";
  private sizes: Record<ToolId, number> = {
    select: 1,
    brush: 6,
    pencil: 3,
    rect: 6,
    ellipse: 6,
    triangle: 6,
    line: 6,
    arrow: 6,
    text: 28,
    eraser: 28,
  };
  private opacity = 1;
  private filled = false;
  private gridOn = true;

  private activePointers = new Map<number, ActivePointer>();
  private pinching: {
    scale0: number;
    pan0: { x: number; y: number };
    dist0: number;
    worldMid: { x: number; y: number };
  } | null = null;
  private panningId: number | null = null;
  private drawingId: number | null = null;
  private spaceKeyDown = false;
  private rafPending = false;
  private saved: UIState["saved"] = "saved";
  private saveTimer: number | null = null;
  private editingText = false;
  private textEl: HTMLDivElement | null = null;
  private pendingText: { x: number; y: number; el: TextElement | null } | null = null;
  private clearArmed = false;
  private clearTimer: number | null = null;
  private hover = { x: -10000, y: -10000, over: false };
  private selEl: Element | null = null;
  private selMode: "idle" | "move" | "resize" | "rotate" = "idle";
  private selGe: SelGesture | null = null;

  constructor(opts: SketchpadOptions) {
    this.stage = opts.stage;
    this.canvas = opts.canvas;
    this.ui = opts.ui;
    this.onState = opts.onState;
    const ctx = this.canvas.getContext("2d", { alpha: true });
    if (!ctx) throw new Error("Canvas 2D not supported");
    this.ctx = ctx;
    this.sceneCanvas = document.createElement("canvas");
    const sceneCtx = this.sceneCanvas.getContext("2d", { alpha: true });
    if (!sceneCtx) throw new Error("Canvas 2D not supported");
    this.sceneCtx = sceneCtx;
  }

  init(): void {
    this.load();
    this.setColor(this.color);
    this.bindUI();
    this.bindCanvas();
    this.bindKeys();
    this.setupResize();
    this.fitToView();
    this.emit();
    this.rim();
  }

  // ---------- viewport ----------

  private worldTransform(sx: number, sy: number): { x: number; y: number } {
    return { x: (sx - this.pan.x) / this.scale, y: (sy - this.pan.y) / this.scale };
  }

  private screenTransform(wx: number, wy: number): { x: number; y: number } {
    return { x: wx * this.scale + this.pan.x, y: wy * this.scale + this.pan.y };
  }

  private zoomAt(factor: number, cx: number, cy: number): void {
    const s = clamp(this.scale * factor, MIN_SCALE, MAX_SCALE);
    const wx = (cx - this.pan.x) / this.scale;
    const wy = (cy - this.pan.y) / this.scale;
    this.scale = s;
    this.pan.x = cx - wx * s;
    this.pan.y = cy - wy * s;
    this.rim();
    this.emit();
  }

  zoomBy(factor: number): void {
    const cx = this.canvas.clientWidth / 2;
    const cy = this.canvas.clientHeight / 2;
    this.zoomAt(factor, cx, cy);
  }

  zoom100(): void {
    const cx = this.canvas.clientWidth / 2;
    const cy = this.canvas.clientHeight / 2;
    const wx = (cx - this.pan.x) / this.scale;
    const wy = (cy - this.pan.y) / this.scale;
    this.scale = 1;
    this.pan.x = cx - wx;
    this.pan.y = cy - wy;
    this.rim();
    this.emit();
  }

  fitToView(): void {
    const w = Math.max(1, this.canvas.clientWidth);
    const h = Math.max(1, this.canvas.clientHeight);
    const b = contentBounds(this.elements);
    if (!b) {
      this.scale = 1;
      this.pan.x = w / 2;
      this.pan.y = h / 2;
    } else {
      const pad = 64;
      const s = clamp(Math.min((w - pad * 2) / Math.max(b.w, 1), (h - pad * 2) / Math.max(b.h, 1)), MIN_SCALE, 4);
      this.scale = s;
      this.pan.x = w / 2 - (b.x + b.w / 2) * s;
      this.pan.y = h / 2 - (b.y + b.h / 2) * s;
    }
    this.rim();
    this.emit();
  }

  // ---------- history ----------

  private syncZSeq(): void {
    let max = 0;
    for (const el of this.elements) {
      if ((el.z ?? 0) > max) max = el.z ?? 0;
    }
    for (const er of this.erasures) {
      if ((er.z ?? 0) > max) max = er.z ?? 0;
    }
    this.zSeq = max;
  }

  private normalizeZ(): void {
    const elsNeed = this.elements.some((el) => el.z === undefined);
    const ersNeed = this.erasures.some((er) => er.z === undefined);
    if (elsNeed || ersNeed) {
      let base = 1;
      if (!elsNeed) {
        for (const el of this.elements) base = Math.max(base, (el.z ?? 0) + 1);
      } else {
        this.elements.forEach((el, i) => {
          el.z = i + 1;
        });
        base += this.elements.length;
      }
      this.erasures.forEach((er, i) => {
        er.z = base + i;
      });
    }
  }

  private snapshotData(): Snapshot {
    return { elements: this.elements, erasures: this.erasures };
  }

  private pushHistory(prev?: Snapshot): void {
    const snap = prev ?? cloneSnapshot(this.snapshotData());
    this.undoStack.push(snap);
    if (this.undoStack.length > HISTORY_LIMIT) this.undoStack.shift();
    this.redoStack = [];
    this.syncZSeq();
    this.markDirty();
    this.emit();
  }

  undo(): void {
    if (this.editingText) this.commitText();
    if (this.undoStack.length === 0) return;
    this.redoStack.push(cloneSnapshot(this.snapshotData()));
    const snap = this.undoStack.pop()!;
    this.elements = snap.elements;
    this.erasures = snap.erasures;
    this.syncZSeq();
    this.deselect();
    this.markDirty();
    this.rim();
    this.emit();
  }

  redo(): void {
    if (this.editingText) this.commitText();
    if (this.redoStack.length === 0) return;
    this.undoStack.push(cloneSnapshot(this.snapshotData()));
    const snap = this.redoStack.pop()!;
    this.elements = snap.elements;
    this.erasures = snap.erasures;
    this.syncZSeq();
    this.deselect();
    this.markDirty();
    this.rim();
    this.emit();
  }

  clear(): void {
    if (!this.clearArmed) {
      this.clearArmed = true;
      this.ui.clearBtn.classList.add("is-armed");
      if (this.clearTimer) window.clearTimeout(this.clearTimer);
      this.clearTimer = window.setTimeout(() => this.disarmClear(), 3000);
      return;
    }
    this.disarmClear();
    this.pushHistory();
    this.elements = [];
    this.erasures = [];
    this.syncZSeq();
    this.deselect();
    this.rim();
    this.emit();
  }

  private disarmClear(): void {
    this.clearArmed = false;
    this.ui.clearBtn.classList.remove("is-armed");
    if (this.clearTimer) {
      window.clearTimeout(this.clearTimer);
      this.clearTimer = null;
    }
  }

  private markDirty(): void {
    this.saved = "dirty";
    this.scheduleSave();
    this.onState(this.buildState());
  }

  private scheduleSave(): void {
    if (this.saveTimer) window.clearTimeout(this.saveTimer);
    this.setSaved("saving");
    this.saveTimer = window.setTimeout(() => {
      try {
        localStorage.setItem(AUTOSAVE_KEY, JSON.stringify(this.snapshotData()));
        this.setSaved("saved");
      } catch {
        this.setSaved("saved");
      }
    }, 600);
  }

  private setSaved(v: UIState["saved"]): void {
    this.saved = v;
    this.onState(this.buildState());
  }

  private load(): void {
    try {
      const raw = localStorage.getItem(AUTOSAVE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as Snapshot;
      if (parsed && Array.isArray(parsed.elements) && Array.isArray(parsed.erasures)) {
        this.elements = parsed.elements;
        this.erasures = parsed.erasures;
        this.normalizeZ();
        this.syncZSeq();
      }
    } catch {
      /* ignore corrupt draft */
    }
  }

  // ---------- render ----------

  private rim(): void {
    if (this.rafPending) return;
    this.rafPending = true;
    requestAnimationFrame(() => {
      this.rafPending = false;
      this.render();
    });
  }

  private render(): void {
    const dpr = window.devicePixelRatio || 1;
    const w = this.canvas.clientWidth;
    const h = this.canvas.clientHeight;
    const pw = Math.round(w * dpr);
    const ph = Math.round(h * dpr);
    if (this.canvas.width !== pw || this.canvas.height !== ph) {
      this.canvas.width = pw;
      this.canvas.height = ph;
    }

    const scene = this.sceneCtx;
    if (this.sceneCanvas.width !== pw || this.sceneCanvas.height !== ph) {
      this.sceneCanvas.width = pw;
      this.sceneCanvas.height = ph;
    }
    scene.setTransform(dpr, 0, 0, dpr, 0, 0);
    scene.clearRect(0, 0, w, h);
    scene.save();
    scene.translate(this.pan.x, this.pan.y);
    scene.scale(this.scale, this.scale);
    drawScene(scene, this.elements, this.erasures, this.pendingEl, this.pendingEr);
    scene.restore();

    const ctx = this.ctx;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, w, h);
    ctx.drawImage(this.sceneCanvas, 0, 0, w, h);

    if (this.gridOn && this.scale >= 0.08) {
      this.renderGrid(ctx, w, h);
    }

    if (this.hover.over && !this.editingText && !this.pinching && !this.spaceKeyDown && this.panningId === null) {
      if (this.tool === "eraser") {
        this.renderEraserCursor(ctx);
      } else if (this.tool === "select") {
        const h = this.selEl ? this.selHandleAt(this.hover.x, this.hover.y) : null;
        if (this.selMode === "rotate" || h?.kind === "rotate") {
          this.renderRotatePointer(ctx);
        } else if (this.selMode === "idle" && !h) {
          this.renderSelectPointer(ctx);
        }
      } else {
        this.renderPointer(ctx);
      }
    }

    this.renderSelection(ctx);
    this.updateCursor();
    this.ui.zoomLabel.textContent = `${Math.round(this.scale * 100)}%`;
  }

  private renderPointer(ctx: CanvasRenderingContext2D): void {
    const x = this.hover.x;
    const y = this.hover.y;
    const outline = "rgba(13,37,61,0.65)";
    const core = "rgba(255,255,255,0.95)";
    ctx.save();
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    if (this.tool === "brush" || this.tool === "pencil") {
      const r = Math.max(7, (this.sizes[this.tool] / 2) * this.scale);
      ctx.beginPath();
      ctx.arc(x, y, r + 4, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,255,0.4)";
      ctx.fill();
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.strokeStyle = outline;
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.strokeStyle = core;
      ctx.lineWidth = 1;
      ctx.stroke();
    } else {
      const s = 12;
      const arms: Array<[number, number]> = [
        [0, -1],
        [0, 1],
        [-1, 0],
        [1, 0],
      ];
      for (const [dx, dy] of arms) {
        ctx.beginPath();
        ctx.moveTo(x + dx * s, y + dy * s);
        ctx.lineTo(x + dx * (s - 5), y + dy * (s - 5));
        ctx.strokeStyle = core;
        ctx.lineWidth = 3.5;
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x + dx * s, y + dy * s);
        ctx.lineTo(x + dx * (s - 5), y + dy * (s - 5));
        ctx.strokeStyle = outline;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
    }

    ctx.beginPath();
    ctx.arc(x, y, 2, 0, Math.PI * 2);
    ctx.fillStyle = outline;
    ctx.fill();
    ctx.restore();
  }

  private renderRotatePointer(ctx: CanvasRenderingContext2D): void {
    const x = this.hover.x;
    const y = this.hover.y;
    const r = 7;
    const a = -Math.PI / 4;
    const ex = x + r * Math.cos(a);
    const ey = y + r * Math.sin(a);
    const pa = a + Math.PI / 2;
    ctx.save();
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(255,255,255,0.95)";
    ctx.lineWidth = 4.5;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(13,37,61,0.75)";
    ctx.lineWidth = 1.6;
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(ex + 5 * Math.cos(a), ey + 5 * Math.sin(a));
    ctx.lineTo(ex + 2.5 * Math.cos(pa), ey + 2.5 * Math.sin(pa));
    ctx.lineTo(ex - 2.5 * Math.cos(pa), ey - 2.5 * Math.sin(pa));
    ctx.closePath();
    ctx.fillStyle = "rgba(255,255,255,0.95)";
    ctx.fill();
    ctx.strokeStyle = "rgba(13,37,61,0.75)";
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.restore();
  }

  private renderSelectPointer(ctx: CanvasRenderingContext2D): void {
    const x = this.hover.x;
    const y = this.hover.y;
    ctx.save();
    ctx.lineJoin = "round";
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 9, y + 2.5);
    ctx.lineTo(x + 6, y + 6);
    ctx.lineTo(x + 11, y + 11);
    ctx.lineTo(x + 8, y + 13);
    ctx.lineTo(x + 3, y + 8);
    ctx.lineTo(x, y + 10);
    ctx.closePath();
    ctx.fillStyle = "rgba(255,255,255,0.95)";
    ctx.fill();
    ctx.strokeStyle = "rgba(13,37,61,0.65)";
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.restore();
  }

  private renderEraserCursor(ctx: CanvasRenderingContext2D): void {
    const r = (this.sizes.eraser / 2) * this.scale;
    const x = this.hover.x;
    const y = this.hover.y;
    const viewW = this.canvas.clientWidth;
    ctx.save();
    ctx.fillStyle = "rgba(100,116,141,0.10)";
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "rgba(100,116,141,0.6)";
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 3]);
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);

    const label = `${this.sizes.eraser}px`;
    ctx.font = "600 11px Inter Variable, Inter, system-ui, sans-serif";
    const tw = ctx.measureText(label).width;
    const pillW = tw + 14;
    const pillH = 18;
    let px = x + r + 8;
    if (px + pillW > viewW) px = x - r - pillW - 8;
    const py = y - r - pillH - 6;
    ctx.fillStyle = "rgba(13,37,61,0.85)";
    ctx.beginPath();
    ctx.moveTo(px + 5, py);
    ctx.lineTo(px + pillW - 5, py);
    ctx.quadraticCurveTo(px + pillW, py, px + pillW, py + 5);
    ctx.lineTo(px + pillW, py + pillH - 5);
    ctx.quadraticCurveTo(px + pillW, py + pillH, px + pillW - 5, py + pillH);
    ctx.lineTo(px + 5, py + pillH);
    ctx.quadraticCurveTo(px, py + pillH, px, py + pillH - 5);
    ctx.lineTo(px, py + 5);
    ctx.quadraticCurveTo(px, py, px + 5, py);
    ctx.fill();
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillText(label, px + 7, py + pillH / 2 + 0.5);
    ctx.restore();
  }

  private renderGrid(ctx: CanvasRenderingContext2D, w: number, h: number): void {
    const { step, major } = niceStep(this.scale);
    const minWX = (0 - this.pan.x) / this.scale;
    const minWY = (0 - this.pan.y) / this.scale;
    const maxWX = minWX + w / this.scale;
    const maxWY = minWY + h / this.scale;

    const startX = Math.floor(minWX / step) * step;
    const startY = Math.floor(minWY / step) * step;

    ctx.save();
    ctx.lineWidth = 1;
    for (let wx = startX; wx <= maxWX + step; wx += step) {
      const sx = wx * this.scale + this.pan.x;
      const isMajor = Math.round(wx / major) * major === wx || Math.round(wx / step) % 5 === 0;
      void isMajor;
      const alpha = Math.round(wx / step) % 5 === 0 ? 0.55 : 0.32;
      ctx.strokeStyle = `rgba(100,116,141,${alpha * 0.4})`;
      ctx.beginPath();
      ctx.moveTo(sx, 0);
      ctx.lineTo(sx, h);
      ctx.stroke();
    }
    for (let wy = startY; wy <= maxWY + step; wy += step) {
      const sy = wy * this.scale + this.pan.y;
      const alpha = Math.round(wy / step) % 5 === 0 ? 0.55 : 0.32;
      ctx.strokeStyle = `rgba(100,116,141,${alpha * 0.4})`;
      ctx.beginPath();
      ctx.moveTo(0, sy);
      ctx.lineTo(w, sy);
      ctx.stroke();
    }
    ctx.restore();
  }

  // ---------- canvas interaction ----------

  private bindCanvas(): void {
    const c = this.canvas;
    c.style.touchAction = "none";
    c.addEventListener("pointerdown", (e) => this.onPointerDown(e));
    c.addEventListener("pointermove", (e) => this.onPointerMove(e));
    c.addEventListener("pointerup", (e) => this.onPointerUp(e));
    c.addEventListener("pointercancel", (e) => this.onPointerUp(e));
    c.addEventListener("pointerenter", () => {
      this.hover.over = true;
      this.rim();
    });
    c.addEventListener("pointerleave", () => {
      this.hover.over = false;
      this.rim();
    });
    c.addEventListener("dblclick", (e) => this.onDoubleClick(e));
    c.addEventListener("wheel", (e) => this.onWheel(e), { passive: false });
    this.stage.addEventListener("contextmenu", (e) => e.preventDefault());
  }

  private pointerFromEvent(e: PointerEvent, includePressure: boolean): ActivePointer {
    const pos = this.worldTransform(e.clientX - this.stage.getBoundingClientRect().left, e.clientY - this.stage.getBoundingClientRect().top);
    return {
      id: e.pointerId,
      sx: e.clientX - this.stage.getBoundingClientRect().left,
      sy: e.clientY - this.stage.getBoundingClientRect().top,
      wx: pos.x,
      wy: pos.y,
      kind: e.pointerType === "pen" ? "pen" : e.pointerType === "touch" ? "touch" : "mouse",
      pressure: includePressure ? e.pressure : 0.5,
    };
  }

  private stageXY(e: PointerEvent): { x: number; y: number } {
    const r = this.stage.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  }

  private updateCursor(): void {
    if (this.panningId !== null) this.canvas.style.cursor = "grabbing";
    else if (this.spaceKeyDown) this.canvas.style.cursor = "grab";
    else if (this.tool === "select") this.canvas.style.cursor = this.selectCursor();
    else if (this.hover.over && !this.editingText && !this.pinching) this.canvas.style.cursor = "none";
    else this.canvas.style.cursor = "crosshair";
  }

  private selectCursor(): string {
    if (this.selMode !== "idle" && this.selGe) {
      if (this.selMode === "move") return "move";
      if (this.selMode === "rotate") return "none";
      const c = this.selGe.corner ?? "se";
      return c === "nw" || c === "se" ? "nwse-resize" : "nesw-resize";
    }
    const h = this.selEl ? this.selHandleAt(this.hover.x, this.hover.y) : null;
    if (h) {
      if (h.kind === "rotate") return "none";
      if (h.kind === "edge") return "move";
      return h.id === "nw" || h.id === "se" ? "nwse-resize" : "nesw-resize";
    }
    if (!this.hover.over) return "default";
    return "none";
  }

  // ---------- selection & transform ----------

  private deselect(): void {
    if (this.selEl || this.selGe) {
      this.selEl = null;
      this.selMode = "idle";
      this.selGe = null;
      this.rim();
    }
    this.updateCursor();
    this.emit();
  }

  private pointInRotatedElement(p: { x: number; y: number }, el: Element): boolean {
    const rot = el.rotation ?? 0;
    if (!rot) return pointInElement(p, el);
    const c = elementCenter(el);
    const a = (-rot * Math.PI) / 180;
    const dx = p.x - c.x;
    const dy = p.y - c.y;
    const qx = c.x + dx * Math.cos(a) - dy * Math.sin(a);
    const qy = c.y + dx * Math.sin(a) + dy * Math.cos(a);
    return pointInElement({ x: qx, y: qy }, el);
  }

  private distanceToStroke(p: { x: number; y: number }, points: Array<{ x: number; y: number }>): number {
    if (points.length === 0) return Infinity;
    if (points.length === 1) return Math.hypot(p.x - points[0].x, p.y - points[0].y);
    let min = Infinity;
    for (let i = 0; i < points.length - 1; i++) {
      const a = points[i];
      const b = points[i + 1];
      const abx = b.x - a.x;
      const aby = b.y - a.y;
      const len2 = abx * abx + aby * aby;
      let t = len2 === 0 ? 0 : ((p.x - a.x) * abx + (p.y - a.y) * aby) / len2;
      t = Math.max(0, Math.min(1, t));
      const px = a.x + abx * t;
      const py = a.y + aby * t;
      const d = Math.hypot(p.x - px, p.y - py);
      if (d < min) min = d;
    }
    return min;
  }

  private hitTest(wx: number, wy: number): Element | null {
    for (let i = this.elements.length - 1; i >= 0; i--) {
      const el = this.elements[i];
      if (el.kind === "stroke") {
        const rot = el.rotation ?? 0;
        let qx = wx;
        let qy = wy;
        if (rot) {
          const c = elementCenter(el);
          const a = (-rot * Math.PI) / 180;
          const dx = wx - c.x;
          const dy = wy - c.y;
          qx = c.x + dx * Math.cos(a) - dy * Math.sin(a);
          qy = c.y + dx * Math.sin(a) + dy * Math.cos(a);
        }
        const tol = Math.max(5, (el.width / 2 + 6) / this.scale);
        if (this.distanceToStroke({ x: qx, y: qy }, el.points) <= tol) return el;
      } else if (this.pointInRotatedElement({ x: wx, y: wy }, el)) {
        return el;
      }
    }
    return null;
  }

  private selScreen(el: Element): {
    center: { x: number; y: number };
    top: { x: number; y: number };
    rotate: { x: number; y: number };
    corners: Array<{ id: SelCorner; x: number; y: number }>;
    edges: Array<{ id: "n" | "e" | "s" | "w"; x: number; y: number }>;
  } {
    const b = elementBounds(el);
    const rot = ((el.rotation ?? 0) * Math.PI) / 180;
    const cs = this.screenTransform(elementCenter(el).x, elementCenter(el).y);
    const cos = Math.cos(rot);
    const sin = Math.sin(rot);
    const off = 28;
    const hx = Math.max(b.w / 2, 0.5);
    const hy = Math.max(b.h / 2, 0.5);
    const map = (lx: number, ly: number): { x: number; y: number } => ({
      x: cs.x + (lx * cos - ly * sin) * this.scale,
      y: cs.y + (lx * sin + ly * cos) * this.scale,
    });
    return {
      center: cs,
      top: map(0, -hy),
      rotate: map(0, -hy - off / this.scale),
      corners: [
        { id: "nw", ...map(-hx, -hy) },
        { id: "ne", ...map(hx, -hy) },
        { id: "se", ...map(hx, hy) },
        { id: "sw", ...map(-hx, hy) },
      ],
      edges: [
        { id: "n", ...map(0, -hy) },
        { id: "e", ...map(hx, 0) },
        { id: "s", ...map(0, hy) },
        { id: "w", ...map(-hx, 0) },
      ],
    };
  }

  private selHandleAt(sx: number, sy: number):
    | { kind: "corner"; id: SelCorner }
    | { kind: "edge"; id: "n" | "e" | "s" | "w" }
    | { kind: "rotate" }
    | null {
    if (!this.selEl) return null;
    const s = this.selScreen(this.selEl);
    for (const c of s.corners) {
      if (Math.hypot(sx - c.x, sy - c.y) <= 12) return { kind: "corner", id: c.id };
    }
    for (const e of s.edges) {
      if (Math.hypot(sx - e.x, sy - e.y) <= 12) return { kind: "edge", id: e.id };
    }
    if (Math.hypot(sx - s.rotate.x, sy - s.rotate.y) <= 18) return { kind: "rotate" };
    return null;
  }

  private beginSelGesture(
    mode: "move" | "resize" | "rotate",
    pt: { sx: number; sy: number; wx: number; wy: number },
    corner: SelCorner | null = null,
  ): void {
    if (!this.selEl) return;
    const el = this.selEl;
    const sc = this.selScreen(el);
    const full = cloneSnapshot(this.snapshotData());
    const elIdx = this.elements.indexOf(el);
    this.selMode = mode;
    this.selGe = {
      mode,
      prev: full,
      moved: false,
      sx0: pt.sx,
      sy0: pt.sy,
      wx0: pt.wx,
      wy0: pt.wy,
      corner,
      base:
        elIdx >= 0
          ? full.elements[elIdx]
          : cloneSnapshot({ elements: [el], erasures: [] as Erasure[] }).elements[0],
      center: elementCenter(el),
      rot0: el.rotation ?? 0,
      centerS: sc.center,
      startA: Math.atan2(pt.sy - sc.center.y, pt.sx - sc.center.x),
    };
  }

  private updateSelectGesture(pt: { sx: number; sy: number; wx: number; wy: number }): void {
    const g = this.selGe;
    if (!g || !this.selEl) return;
    const el = this.selEl;
    if (!g.moved && Math.hypot(pt.sx - g.sx0, pt.sy - g.sy0) > 1) g.moved = true;
    if (g.mode === "move") {
      this.offsetElement(g.base, el, pt.wx - g.wx0, pt.wy - g.wy0);
    } else if (g.mode === "resize") {
      const a = (-g.rot0 * Math.PI) / 180;
      const dx = pt.wx - g.center.x;
      const dy = pt.wy - g.center.y;
      const lx = dx * Math.cos(a) - dy * Math.sin(a);
      const ly = dx * Math.sin(a) + dy * Math.cos(a);
      const b = elementBounds(g.base);
      const hx = Math.max(b.w / 2, 0.5);
      const hy = Math.max(b.h / 2, 0.5);
      const sgnx = g.corner === "ne" || g.corner === "se" ? 1 : -1;
      const sgny = g.corner === "se" || g.corner === "sw" ? 1 : -1;
      const sfx = clamp(lx / (sgnx * hx), 0.05, 100);
      const sfy = clamp(ly / (sgny * hy), 0.05, 100);
      this.scaleElement(g.base, el, sfx, sfy, g.center);
    } else if (g.mode === "rotate") {
      const ang = Math.atan2(pt.sy - g.centerS.y, pt.sx - g.centerS.x);
      const delta = ((ang - g.startA) * 180) / Math.PI;
      el.rotation = (((g.rot0 + delta) % 360) + 360) % 360;
    }
    this.rim();
  }

  private endSelectGesture(): void {
    const g = this.selGe;
    if (!g) return;
    this.selGe = null;
    this.selMode = "idle";
    if (g.moved) this.pushHistory(g.prev);
    this.updateCursor();
    this.rim();
  }

  deleteSelection(): void {
    const el = this.selEl;
    if (!el) return;
    const idx = this.elements.indexOf(el);
    if (idx < 0) {
      this.deselect();
      return;
    }
    const prev = cloneSnapshot(this.snapshotData());
    this.elements.splice(idx, 1);
    this.pushHistory(prev);
    this.deselect();
    this.rim();
    this.emit();
  }

  private offsetElement(base: Element, el: Element, dx: number, dy: number): void {
    if (el.kind === "stroke" && base.kind === "stroke") {
      for (let i = 0; i < el.points.length; i++) {
        const p = base.points[i];
        if (p) {
          el.points[i].x = p.x + dx;
          el.points[i].y = p.y + dy;
        }
      }
    } else if (el.kind === "text" && base.kind === "text") {
      el.x = base.x + dx;
      el.y = base.y + dy;
    } else {
      const bb = base as ShapeElement;
      const ee = el as ShapeElement;
      ee.x1 = bb.x1 + dx;
      ee.y1 = bb.y1 + dy;
      ee.x2 = bb.x2 + dx;
      ee.y2 = bb.y2 + dy;
    }
  }

  private scaleElement(base: Element, el: Element, sx: number, sy: number, c: { x: number; y: number }): void {
    if (el.kind === "stroke" && base.kind === "stroke") {
      el.points = base.points.map((p) => ({ x: c.x + (p.x - c.x) * sx, y: c.y + (p.y - c.y) * sy, p: p.p }));
    } else if (el.kind === "text" && base.kind === "text") {
      const s = Math.min(sx, sy);
      el.size = Math.max(6, Math.round(base.size * s));
      el.x = c.x + (base.x - c.x) * s;
      el.y = c.y + (base.y - c.y) * s;
    } else {
      const sb = base as ShapeElement;
      const se = el as ShapeElement;
      se.x1 = c.x + (sb.x1 - c.x) * sx;
      se.y1 = c.y + (sb.y1 - c.y) * sy;
      se.x2 = c.x + (sb.x2 - c.x) * sx;
      se.y2 = c.y + (sb.y2 - c.y) * sy;
    }
  }

  private renderSelection(ctx: CanvasRenderingContext2D): void {
    if (this.tool !== "select" || !this.selEl) return;
    const s = this.selScreen(this.selEl);
    const color = "rgba(83,58,253,0.9)";
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.5;
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.moveTo(s.corners[0].x, s.corners[0].y);
    for (let i = 1; i < s.corners.length; i++) ctx.lineTo(s.corners[i].x, s.corners[i].y);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(s.rotate.x, s.rotate.y);
    ctx.lineTo(s.top.x, s.top.y);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(s.rotate.x, s.rotate.y, 5, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = "#ffffff";
    ctx.stroke();
    ctx.strokeStyle = color;
    for (const c of s.corners) {
      ctx.beginPath();
      ctx.rect(c.x - 4.5, c.y - 4.5, 9, 9);
      ctx.fillStyle = "#ffffff";
      ctx.fill();
      ctx.stroke();
    }
    for (const e of s.edges) {
      ctx.beginPath();
      ctx.rect(e.x - 2.5, e.y - 2.5, 5, 5);
      ctx.fillStyle = "#ffffff";
      ctx.fill();
      ctx.stroke();
    }
    ctx.restore();
  }

  private onPointerDown(e: PointerEvent): void {
    this.disarmClear();
    const pt = this.pointerFromEvent(e, e.pointerType !== "mouse");
    this.activePointers.set(e.pointerId, pt);

    if (typeof this.canvas.setPointerCapture === "function") {
      try {
        this.canvas.setPointerCapture(e.pointerId);
      } catch {
        /* ignore */
      }
    }

    if (this.editingText) this.commitText();

    // Pan when holding space or using the middle / back mouse buttons
    if (this.spaceKeyDown || e.button === 1) {
      this.panningId = e.pointerId;
      this.updateCursor();
      return;
    }
    if (e.button !== 0) return;

    if (this.tool === "select") {
      const h = this.selEl ? this.selHandleAt(pt.sx, pt.sy) : null;
      if (h) {
        if (h.kind === "rotate") this.beginSelGesture("rotate", pt);
        else if (h.kind === "edge") this.beginSelGesture("move", pt);
        else this.beginSelGesture("resize", pt, h.id);
      } else {
        const el = this.hitTest(pt.wx, pt.wy);
        if (el) {
          this.selEl = el;
          this.beginSelGesture("move", pt);
          this.emit();
        } else {
          this.deselect();
        }
      }
      this.rim();
      return;
    }

    if (this.activePointers.size >= 2) {
      this.startPinch();
      return;
    }

    if (this.tool === "text") {
      this.startTextEdit(pt.wx, pt.wy);
      return;
    }

    this.drawingId = e.pointerId;
    switch (this.tool) {
      case "brush":
      case "pencil":
        this.pendingEl = {
          id: nextId(),
          kind: "stroke",
          points: [{ x: pt.wx, y: pt.wy, p: pt.pressure }],
          color: this.color,
          width: this.sizes[this.tool],
          opacity: this.opacity,
          rough: this.tool === "pencil",
        };
        break;
      case "eraser":
        this.pendingEr = { id: nextId(), points: [{ x: pt.wx, y: pt.wy, p: 0.5 }], width: this.sizes.eraser };
        break;
      case "rect":
      case "ellipse":
      case "triangle":
      case "line":
      case "arrow":
        this.pendingEl = {
          id: nextId(),
          kind: this.tool,
          x1: pt.wx,
          y1: pt.wy,
          x2: pt.wx,
          y2: pt.wy,
          color: this.color,
          width: this.sizes[this.tool],
          opacity: this.opacity,
          filled: this.filled,
        };
        break;
      default:
        break;
    }
    this.rim();
  }

  private onPointerMove(e: PointerEvent): void {
    const prev = this.activePointers.get(e.pointerId);
    const pt = this.pointerFromEvent(e, e.pointerType !== "mouse");

    this.ui.coordsLabel.textContent = `${Math.round(pt.wx)}, ${Math.round(pt.wy)}`;
    this.hover.over = true;
    this.hover.x = pt.sx;
    this.hover.y = pt.sy;
    this.rim();

    if (this.panningId === e.pointerId && prev) {
      this.pan.x += pt.sx - prev.sx;
      this.pan.y += pt.sy - prev.sy;
      prev.sx = pt.sx;
      prev.sy = pt.sy;
      this.rim();
      return;
    }

    if (this.pinching && this.activePointers.size >= 2) {
      if (prev) {
        prev.sx = pt.sx;
        prev.sy = pt.sy;
        prev.wx = pt.wx;
        prev.wy = pt.wy;
      } else {
        this.activePointers.set(e.pointerId, pt);
      }
      this.updatePinch();
      return;
    }

    if (this.tool === "select" && this.selMode !== "idle" && this.selGe) {
      this.updateSelectGesture(pt);
      return;
    }

    if (this.drawingId !== e.pointerId || !prev) return;

    const dist = Math.hypot(pt.wx - prev.wx, pt.wy - prev.wy);

    if (this.tool === "eraser" && this.pendingEr) {
      if (this.pendingEr.points.length === 0 || dist >= this.minPointDist()) {
        this.pendingEr.points.push({ x: pt.wx, y: pt.wy, p: 0.5 });
      }
    } else if (this.pendingEl && this.pendingEl.kind === "stroke") {
      if (this.pendingEl.points.length === 0 || dist >= this.minPointDist()) {
        this.pendingEl.points.push({ x: pt.wx, y: pt.wy, p: pt.pressure });
      }
    } else if (this.pendingEl && this.pendingEl.kind !== "text") {
      this.pendingEl.x2 = pt.wx;
      this.pendingEl.y2 = pt.wy;
    }

    prev.sx = pt.sx;
    prev.sy = pt.sy;
    prev.wx = pt.wx;
    prev.wy = pt.wy;
    prev.pressure = pt.pressure;
    this.rim();
  }

  private minPointDist(): number {
    const base = this.tool === "pencil" ? 0.8 : 1;
    return Math.max(0.3, base / this.scale);
  }

  private onPointerUp(e: PointerEvent): void {
    const pt = this.activePointers.get(e.pointerId);
    if (pt) {
      pt.sx = e.clientX - this.stage.getBoundingClientRect().left;
      pt.sy = e.clientY - this.stage.getBoundingClientRect().top;
    }

    if (this.panningId === e.pointerId) {
      this.panningId = null;
      this.updateCursor();
    }

    if (this.drawingId === e.pointerId) {
      this.drawingId = null;
      this.commitDrawing();
    }

    if (this.tool === "select" && this.selMode !== "idle" && this.selGe) {
      this.endSelectGesture();
    }

    this.activePointers.delete(e.pointerId);
    if (this.activePointers.size < 2) {
      this.pinching = null;
    } else if (this.pinching) {
      this.updatePinch();
    }
  }

  private commitDrawing(): void {
    if (this.tool === "eraser" && this.pendingEr) {
      this.pendingEr.z = ++this.zSeq;
      this.erasures.push(this.pendingEr);
      this.pendingEr = null;
      this.pushHistory();
      return;
    }
    if (this.pendingEl) {
      if (this.pendingEl.kind === "text") {
        this.pendingEl = null;
        return;
      }
      this.pendingEl.z = ++this.zSeq;
      this.elements.push(this.pendingEl);
      this.pendingEl = null;
      this.pushHistory();
    }
  }

  private startPinch(): void {
    this.drawingId = null;
    this.panningId = null;
    this.pendingEl = null;
    this.pendingEr = null;
    const pts = [...this.activePointers.values()];
    const a = pts[0];
    const b = pts[1];
    const dist0 = Math.hypot(b.sx - a.sx, b.sy - a.sy) || 1;
    this.pinching = {
      scale0: this.scale,
      pan0: { ...this.pan },
      dist0,
      worldMid: this.worldTransform((a.sx + b.sx) / 2, (a.sy + b.sy) / 2),
    };
    this.rim();
  }

  private updatePinch(): void {
    if (!this.pinching) return;
    const pts = [...this.activePointers.values()];
    if (pts.length < 2) return;
    const a = pts[0];
    const b = pts[1];
    const dist = Math.hypot(b.sx - a.sx, b.sy - a.sy) || 1;
    const s = clamp(this.pinching.scale0 * (dist / this.pinching.dist0), MIN_SCALE, MAX_SCALE);
    const sm = { x: (a.sx + b.sx) / 2, y: (a.sy + b.sy) / 2 };
    this.scale = s;
    this.pan.x = sm.x - this.pinching.worldMid.x * s;
    this.pan.y = sm.y - this.pinching.worldMid.y * s;
    this.rim();
    this.emit();
  }

  private onWheel(e: WheelEvent): void {
    e.preventDefault();
    const xy = this.stageXY(e as unknown as PointerEvent);
    if (e.ctrlKey || e.metaKey) {
      this.zoomAt(Math.exp(-e.deltaY * 0.01), xy.x, xy.y);
    } else {
      this.pan.x -= e.deltaX;
      this.pan.y -= e.deltaY;
      this.rim();
    }
    this.emit();
  }

  private onDoubleClick(e: MouseEvent): void {
    const xy = this.stageXY(e as unknown as PointerEvent);
    const world = this.worldTransform(xy.x, xy.y);
    for (let i = this.elements.length - 1; i >= 0; i--) {
      const el = this.elements[i];
      if (el.kind === "text" && this.pointInRotatedElement(world, el)) {
        this.startTextEdit(el.x, el.y, el);
        return;
      }
    }
  }

  // ---------- text editing ----------

  private startTextEdit(wx: number, wy: number, existing?: TextElement): void {
    this.commitText();
    const sp = this.screenTransform(wx, wy);
    const d = document.createElement("div");
    d.contentEditable = "true";
    d.spellcheck = false;
    d.setAttribute("role", "textbox");
    d.dataset.autofocus = "1";
    const fontPx = Math.max(12, (existing ? existing.size : this.sizes.text) * this.scale);
    d.className = "skpd-text-input";
    d.style.left = `${sp.x}px`;
    d.style.top = `${sp.y}px`;
    d.style.fontSize = `${fontPx}px`;
    d.style.color = existing ? existing.color : this.color;
    d.style.opacity = existing ? String(existing.opacity) : String(this.opacity);
    if (existing) {
      d.textContent = existing.text;
      if (existing.rotation) {
        d.style.transform = `rotate(${existing.rotation}deg)`;
        d.style.transformOrigin = "50% 50%";
      }
    }
    this.stage.appendChild(d);
    this.textEl = d;
    this.editingText = true;
    this.pendingText = { x: wx, y: wy, el: existing ?? null };
    d.focus();
    try {
      const sel = window.getSelection();
      if (sel) {
        sel.selectAllChildren(d);
        sel.collapseToEnd();
      }
    } catch {
      /* ignore */
    }
    this.rim();
    this.emit();
  }

  private commitText(): void {
    if (!this.editingText || !this.textEl || !this.pendingText) return;
    const raw = (this.textEl.textContent ?? "").replace(/\n$/, "");
    const { x, y, el } = this.pendingText;
    this.textEl.remove();
    this.textEl = null;
    this.editingText = false;
    this.pendingText = null;
    if (raw.trim().length > 0) {
      if (el) {
        el.text = raw;
        this.pushHistory();
      } else {
        this.elements.push({
          id: nextId(),
          kind: "text",
          x,
          y,
          text: raw,
          size: this.sizes.text,
          color: this.color,
          opacity: this.opacity,
          z: ++this.zSeq,
        });
        this.pushHistory();
      }
    }
    this.rim();
    this.emit();
  }

  private cancelText(): void {
    if (this.editingText && this.textEl) {
      this.textEl.remove();
      this.textEl = null;
      this.editingText = false;
      this.pendingText = null;
      this.emit();
    }
  }

  // ---------- toolbar / settings ----------

  private bindUI(): void {
    const ui = this.ui;
    (Object.keys(ui.toolButtons) as ToolId[]).forEach((id) => {
      ui.toolButtons[id].addEventListener("click", () => this.setTool(id));
    });

    ui.undoBtn.addEventListener("click", () => this.undo());
    ui.redoBtn.addEventListener("click", () => this.redo());
    ui.deleteBtn.addEventListener("click", () => this.deleteSelection());
    ui.zoomOutBtn.addEventListener("click", () => this.zoomBy(1 / 1.25));
    ui.zoomInBtn.addEventListener("click", () => this.zoomBy(1.25));
    ui.zoomFitBtn.addEventListener("click", () => this.fitToView());
    ui.zoom100Btn.addEventListener("click", () => this.zoom100());
    ui.clearBtn.addEventListener("click", () => this.clear());
    ui.gridBtn.addEventListener("click", () => {
      this.gridOn = !this.gridOn;
      this.rim();
      this.emit();
    });
    ui.fullscreenBtn.addEventListener("click", () => this.toggleFullscreen());
    ui.fullscreenBtnMobile.addEventListener("click", () => this.toggleFullscreen());
    ui.downloadBtn.addEventListener("click", () => this.exportPNG());

    ui.swatches.forEach((sw) => {
      sw.addEventListener("click", () => this.setColor(sw.dataset.color ?? "#0d253d"));
    });
    ui.colorInput.addEventListener("input", () => this.setColor(ui.colorInput.value));
    ui.sizeSlider.addEventListener("input", () => this.sizeFromSlider());
    ui.opacitySlider.addEventListener("input", () => {
      this.opacity = Number(ui.opacitySlider.value) / 100;
      this.emit();
    });
    ui.fillToggle.addEventListener("click", () => {
      this.filled = !this.filled;
      ui.fillToggle.classList.toggle("is-active", this.filled);
      this.emit();
    });

    document.addEventListener("fullscreenchange", () => {
      const on = document.fullscreenElement ? "on" : "off";
      ui.fullscreenBtn.dataset.state = on;
      ui.fullscreenBtnMobile.dataset.state = on;
    });
  }

  setTool(tool: ToolId): void {
    this.commitText();
    if (tool !== "select") this.deselect();
    this.tool = tool;
    this.syncSizeUI();
    this.updateCursor();
    this.emit();
  }

  setColor(c: string): void {
    this.color = c;
    this.ui.colorInput.value = c;
    this.ui.swatches.forEach((sw) => {
      if (sw.dataset.color === c) sw.classList.add("is-active");
      else sw.classList.remove("is-active");
    });
    this.emit();
  }

  private sizeFromSlider(): void {
    const ui = this.ui;
    const isText = this.tool === "text";
    const isEraser = this.tool === "eraser";
    const min = isText ? 12 : isEraser ? 4 : 1;
    const max = isText ? 144 : isEraser ? 128 : 96;
    this.sizes[this.tool] = clamp(Number(ui.sizeSlider.value), min, max);
    ui.sizeLabel.textContent = `${this.sizes[this.tool]} ${ui.strings?.px ?? "px"}`;
    this.emit();
  }

  private syncSizeUI(): void {
    const ui = this.ui;
    const isText = this.tool === "text";
    const isEraser = this.tool === "eraser";
    const min = isText ? 12 : isEraser ? 4 : 1;
    const max = isText ? 144 : isEraser ? 128 : 96;
    ui.sizeSlider.min = String(min);
    ui.sizeSlider.max = String(max);
    ui.sizeSlider.value = String(this.getStrokeWidth());
    ui.sizeLabel.textContent = `${this.getStrokeWidth()} ${ui.strings?.px ?? "px"}`;
  }

  getStrokeWidth(): number {
    return this.sizes[this.tool] ?? this.sizes.brush;
  }

  private toggleFullscreen(): void {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => undefined);
    } else {
      this.stage.requestFullscreen().catch(() => undefined);
    }
  }

  exportPNG(): void {
    const b = contentBounds(this.elements) ?? { x: -200, y: -200, w: 400, h: 400 };
    let es = 2;
    const limit = 8192;
    if (b.w * es + 200 > limit || b.h * es + 200 > limit) {
      es = Math.min(es, Math.min((limit - 200) / Math.max(b.w, 1), (limit - 200) / Math.max(b.h, 1)));
    }
    const pad = 32;
    const w = Math.round(b.w * es + pad * 2);
    const h = Math.round(b.h * es + pad * 2);
    const c = document.createElement("canvas");
    c.width = w;
    c.height = h;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, w, h);
    ctx.setTransform(es, 0, 0, es, pad - b.x * es, pad - b.y * es);
    drawScene(ctx, this.elements, this.erasures, null, null);
    const name = `sketchpad-${new Date().toISOString().slice(0, 19).replace(/[:T]/g, "-")}.png`;
    const a = document.createElement("a");
    a.download = name;
    a.href = c.toDataURL("image/png");
    a.click();
  }

  private bindKeys(): void {
    window.addEventListener("keydown", (e) => {
      if (this.editingText) {
        if (e.key === "Escape") {
          e.preventDefault();
          this.cancelText();
        } else if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          this.commitText();
        }
        return;
      }
      const mod = e.ctrlKey || e.metaKey;
      if (mod && e.key.toLowerCase() === "z") {
        e.preventDefault();
        if (e.shiftKey) this.redo();
        else this.undo();
        return;
      }
      if (mod && e.key.toLowerCase() === "y") {
        e.preventDefault();
        this.redo();
        return;
      }
      if (mod && e.key.toLowerCase() === "d") {
        e.preventDefault();
        this.exportPNG();
        return;
      }
      if (e.key === " ") {
        this.spaceKeyDown = true;
        this.updateCursor();
        e.preventDefault();
        return;
      }
      if (mod && (e.key === "+" || e.key === "=")) {
        e.preventDefault();
        this.zoomBy(1.25);
        return;
      }
      if (mod && e.key === "-") {
        e.preventDefault();
        this.zoomBy(1 / 1.25);
        return;
      }
      if (mod && e.key === "0") {
        e.preventDefault();
        this.zoom100();
        return;
      }
      if (e.key === "f") {
        this.toggleFullscreen();
        return;
      }
      if (e.key === "g") {
        this.gridOn = !this.gridOn;
        this.rim();
        this.emit();
        return;
      }
      if (e.key === "[") {
        this.nudgeSize(-1);
        return;
      }
      if (e.key === "]") {
        this.nudgeSize(1);
        return;
      }
      if (e.key === "Escape") {
        if (this.tool === "select" && this.selEl) this.deselect();
        else this.disarmClear();
        return;
      }
      if ((e.key === "Delete" || e.key === "Backspace") && !e.metaKey && !e.ctrlKey && !e.altKey) {
        if (this.selEl) {
          e.preventDefault();
          this.deleteSelection();
        }
        return;
      }
      const toolFor = { v: "select", b: "brush", p: "pencil", r: "rect", o: "ellipse", t: "text", l: "line", a: "arrow", e: "eraser" } as const;
      const id = toolFor[e.key.toLowerCase() as keyof typeof toolFor];
      if (id && !e.metaKey && !e.ctrlKey && !e.altKey) this.setTool(id);
    });

    window.addEventListener("keyup", (e) => {
      if (e.key === " ") {
        this.spaceKeyDown = false;
        this.updateCursor();
      }
    });

    window.addEventListener("blur", () => {
      this.spaceKeyDown = false;
      this.updateCursor();
    });
  }

  private nudgeSize(delta: number): void {
    const isText = this.tool === "text";
    const isEraser = this.tool === "eraser";
    const min = isText ? 12 : isEraser ? 4 : 1;
    const max = isText ? 144 : isEraser ? 128 : 96;
    this.sizes[this.tool] = clamp((this.sizes[this.tool] ?? this.sizes.brush) + delta, min, max);
    this.syncSizeUI();
    this.emit();
  }

  private setupResize(): void {
    const ro = new ResizeObserver(() => {
      this.rim();
    });
    ro.observe(this.canvas);
  }

  private buildState(): UIState {
    return {
      tool: this.tool,
      hasSelection: this.selEl !== null,
      canUndo: this.undoStack.length > 0,
      canRedo: this.redoStack.length > 0,
      zoom: this.scale,
      saved: this.saved,
      gridOn: this.gridOn,
      filled: this.filled,
      editing: this.editingText,
    };
  }

  private emit(): void {
    const s = this.buildState();
    const ui = this.ui;
    (Object.keys(ui.toolButtons) as ToolId[]).forEach((id) => {
      const active = id === s.tool;
      ui.toolButtons[id].classList.toggle("is-active", active);
      ui.toolButtons[id].setAttribute("aria-pressed", String(active));
    });
    ui.undoBtn.disabled = !s.canUndo;
    ui.redoBtn.disabled = !s.canRedo;
    ui.gridBtn.classList.toggle("is-active", s.gridOn);
    ui.fillToggle.classList.toggle("is-active", s.filled);
    ui.fullscreenBtn.dataset.state = document.fullscreenElement ? "on" : "off";
    ui.fullscreenBtnMobile.dataset.state = document.fullscreenElement ? "on" : "off";
    if (s.saved === "saved") {
      ui.autosaveLabel.textContent = ui.strings?.autosaveSaved ?? "Saved";
      ui.autosaveLabel.dataset.state = "saved";
    } else if (s.saved === "saving") {
      ui.autosaveLabel.textContent = ui.strings?.autosaveSaving ?? "Saving…";
      ui.autosaveLabel.dataset.state = "saving";
    } else {
      ui.autosaveLabel.textContent = ui.strings?.autosaveNotSaved ?? "Not saved";
      ui.autosaveLabel.dataset.state = "dirty";
    }
    this.ui.sizeSlider.value = String(this.getStrokeWidth());
    this.ui.sizeLabel.textContent = `${this.getStrokeWidth()} ${ui.strings?.px ?? "px"}`;
    this.ui.opacitySlider.value = String(Math.round(this.opacity * 100));
    this.ui.opacityLabel.textContent = `${Math.round(this.opacity * 100)}%`;
    this.onState(s);
  }

  get currentTool(): ToolId {
    return this.tool;
  }
}