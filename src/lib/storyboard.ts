type Point = { x: number; y: number };
type Stroke = { points: Point[]; color: string; size: number; erase: boolean; tool?: "pencil" | "brush" };
type Scene = { strokes: Stroke[]; caption: string };
type Draft = { version: 1; title: string; count: number; scenes: Scene[] };
export const MAX_STORYBOARD_FRAMES = 24;
const KEY = "simplesketchpad.storyboard.v1";
const WIDTH = 640;
const HEIGHT = 360;

export function parseStoryboard(raw: string): Draft {
  const value = JSON.parse(raw);
  if (value?.version !== 1 || !Number.isInteger(value.count) || value.count < 1 || value.count > MAX_STORYBOARD_FRAMES || typeof value.title !== "string" || value.title.length > 100 || !Array.isArray(value.scenes) || ![6, MAX_STORYBOARD_FRAMES].includes(value.scenes.length) || value.count > value.scenes.length) throw new Error("Invalid storyboard");
  let points = 0;
  for (const scene of value.scenes) {
    if (typeof scene.caption !== "string" || scene.caption.length > 500 || !Array.isArray(scene.strokes)) throw new Error("Invalid scene");
    for (const stroke of scene.strokes) {
      if (!/^#[0-9a-f]{6}$/i.test(stroke.color) || typeof stroke.erase !== "boolean" || !Number.isFinite(stroke.size) || stroke.size < 1 || stroke.size > 30 || !Array.isArray(stroke.points) || !stroke.points.length) throw new Error("Invalid stroke");
      for (const point of stroke.points) {
        if (!Number.isFinite(point.x) || !Number.isFinite(point.y) || point.x < 0 || point.x > WIDTH || point.y < 0 || point.y > HEIGHT || ++points > 300000) throw new Error("Invalid point");
      }
    }
  }
  while (value.scenes.length < MAX_STORYBOARD_FRAMES) value.scenes.push({ strokes: [], caption: "" });
  return value;
}

type CursorInfo = { x: number; y: number; size: number; tool: "pencil" | "brush"; erase: boolean };

function renderStoryboardCursor(ctx: CanvasRenderingContext2D, cursor: CursorInfo) {
  const { x, y, size, tool, erase } = cursor;
  ctx.save();
  ctx.globalCompositeOperation = "source-over";
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  const r = Math.max(erase ? 6 : tool === "pencil" ? 2.5 : 4, size / 2);

  // Outer high-contrast white ring (clearly visible over dark ink or colorful sketches)
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.strokeStyle = "rgba(255, 255, 255, 0.95)";
  ctx.lineWidth = 2.5;
  ctx.stroke();

  // Inner ring (clearly visible over clean white canvas)
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.strokeStyle = erase ? "rgba(224, 34, 97, 0.9)" : "rgba(37, 53, 77, 0.85)";
  ctx.lineWidth = 1.2;
  ctx.stroke();

  // Crosshair ticks at 12, 3, 6, 9 o'clock for pixel-precise alignment
  const tickIn = r + 2;
  const tickOut = r + 5;

  ctx.beginPath();
  ctx.moveTo(x, y - tickOut); ctx.lineTo(x, y - tickIn);
  ctx.moveTo(x, y + tickIn); ctx.lineTo(x, y + tickOut);
  ctx.moveTo(x - tickOut, y); ctx.lineTo(x - tickIn);
  ctx.moveTo(x + tickIn, y); ctx.lineTo(x + tickOut);
  ctx.strokeStyle = "rgba(255, 255, 255, 0.95)";
  ctx.lineWidth = 2.5;
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(x, y - tickOut); ctx.lineTo(x, y - tickIn);
  ctx.moveTo(x, y + tickIn); ctx.lineTo(x, y + tickOut);
  ctx.moveTo(x - tickOut, y); ctx.lineTo(x - tickIn);
  ctx.moveTo(x + tickIn, y); ctx.lineTo(x + tickOut);
  ctx.strokeStyle = erase ? "rgba(224, 34, 97, 0.9)" : "rgba(37, 53, 77, 0.85)";
  ctx.lineWidth = 1.2;
  ctx.stroke();

  // Center precision dot with white halo
  ctx.beginPath();
  ctx.arc(x, y, 2.5, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
  ctx.fill();

  ctx.beginPath();
  ctx.arc(x, y, 1.2, 0, Math.PI * 2);
  ctx.fillStyle = erase ? "rgba(224, 34, 97, 1)" : "rgba(37, 53, 77, 1)";
  ctx.fill();

  ctx.restore();
}

function draw(canvas: HTMLCanvasElement, strokes: Stroke[], cursor?: CursorInfo) {
  const ctx = canvas.getContext("2d")!;
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  for (const stroke of strokes) {
    ctx.globalCompositeOperation = stroke.erase ? "destination-out" : "source-over";
    ctx.strokeStyle = stroke.color;
    ctx.fillStyle = stroke.color;
    ctx.lineWidth = stroke.size;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    if (stroke.erase || stroke.tool === "brush" || !stroke.tool) {
      ctx.beginPath();
      if (stroke.points.length === 1) {
        ctx.arc(stroke.points[0].x, stroke.points[0].y, stroke.size / 2, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.moveTo(stroke.points[0].x, stroke.points[0].y);
        for (let i = 1; i < stroke.points.length - 1; i++) {
          const mx = (stroke.points[i].x + stroke.points[i + 1].x) / 2;
          const my = (stroke.points[i].y + stroke.points[i + 1].y) / 2;
          ctx.quadraticCurveTo(stroke.points[i].x, stroke.points[i].y, mx, my);
        }
        ctx.lineTo(stroke.points[stroke.points.length - 1].x, stroke.points[stroke.points.length - 1].y);
        ctx.stroke();
      }
    } else if (stroke.tool === "pencil") {
      ctx.save();
      const n = stroke.points.length;
      if (n === 1) {
        ctx.globalAlpha = 0.8;
        ctx.beginPath();
        ctx.arc(stroke.points[0].x, stroke.points[0].y, Math.max(0.75, stroke.size * 0.4), 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.globalAlpha = 0.38;
        ctx.lineWidth = stroke.size * 1.3;
        ctx.beginPath();
        ctx.moveTo(stroke.points[0].x, stroke.points[0].y);
        for (let i = 1; i < n; i++) ctx.lineTo(stroke.points[i].x, stroke.points[i].y);
        ctx.stroke();

        ctx.globalAlpha = 0.75;
        ctx.lineWidth = Math.max(0.75, stroke.size * 0.8);
        ctx.beginPath();
        ctx.moveTo(stroke.points[0].x, stroke.points[0].y);
        for (let i = 1; i < n; i++) ctx.lineTo(stroke.points[i].x, stroke.points[i].y);
        ctx.stroke();
      }
      ctx.restore();
    }
  }
  ctx.globalCompositeOperation = "source-over";

  if (cursor) {
    renderStoryboardCursor(ctx, cursor);
  }
}

export function initStoryboard() {
  const root = document.getElementById("storyboard-app");
  if (!root) return;
  const q = <T extends HTMLElement>(id: string) => document.getElementById(id) as T;
  const cards = Array.from(root.querySelectorAll<HTMLElement>("[data-scene]"));
  const canvases = cards.map(card => card.querySelector("canvas")!);
  const captions = cards.map(card => card.querySelector("textarea")!);
  const title = q<HTMLInputElement>("story-title");
  const layout = q<HTMLSelectElement>("story-layout");
  const status = q<HTMLElement>("story-save");
  const undo = q<HTMLButtonElement>("story-undo");
  const redo = q<HTMLButtonElement>("story-redo");
  const clear = q<HTMLButtonElement>("story-clear");
  const pencil = document.getElementById("story-pencil") as HTMLButtonElement | null;
  const brush = document.getElementById("story-brush") as HTMLButtonElement | null;
  const pen = document.getElementById("story-pen") as HTMLButtonElement | null;
  const eraser = q<HTMLButtonElement>("story-eraser");
  const dialog = q<HTMLDialogElement>("story-clear-dialog");
  let draft: Draft = { version: 1, title: "", count: 3, scenes: Array.from({ length: MAX_STORYBOARD_FRAMES }, () => ({ strokes: [], caption: "" })) };
  try { const raw = localStorage.getItem(KEY); if (raw) draft = parseStoryboard(raw); }
  catch { status.textContent = "Could not restore draft. Download important work."; }
  let active = 0;
  let color = "#25354d";
  let size = 4;
  let erase = false;
  let tool: "pencil" | "brush" = "pencil";
  let drawing: { index: number; pointer: number; stroke: Stroke } | null = null;
  let activeCursor: { index: number; x: number; y: number } | null = null;
  const histories = Array.from({ length: MAX_STORYBOARD_FRAMES }, () => ({ undo: [] as Stroke[][], redo: [] as Stroke[][] }));
  let saveTimer: ReturnType<typeof setTimeout> | undefined;
  const save = () => {
    clearTimeout(saveTimer);
    try { localStorage.setItem(KEY, JSON.stringify(draft)); status.textContent = "Saved on this device"; }
    catch { status.textContent = "Not saved — download a copy"; }
  };
  const scheduleSave = () => {
    status.textContent = "Saving…";
    clearTimeout(saveTimer);
    saveTimer = setTimeout(save, 250);
  };
  const update = () => {
    cards.forEach((card, index) => {
      card.hidden = index >= draft.count;
      card.classList.toggle("selected", index === active);
      const placeholder = card.querySelector<HTMLElement>(".scene-placeholder")!;
      placeholder.hidden = draft.scenes[index].strokes.length > 0 || drawing?.index === index;
    });
    undo.disabled = !histories[active].undo.length;
    redo.disabled = !histories[active].redo.length;
    clear.disabled = !draft.scenes[active].strokes.length;
    q<HTMLButtonElement>("story-add").disabled = draft.count >= MAX_STORYBOARD_FRAMES;
    q("story-frame-count").textContent = `${draft.count} of ${MAX_STORYBOARD_FRAMES} frames`;
    layout.value = String(draft.count);
    q("story-active").textContent = `Scene ${String(active + 1).padStart(2, "0")} selected`;
  };
  const select = (index: number) => { active = index; update(); };
  const remember = (index: number) => {
    histories[index].undo.push(draft.scenes[index].strokes.slice());
    if (histories[index].undo.length > 60) histories[index].undo.shift();
    histories[index].redo = [];
  };
  const finish = (lastPoint?: Point) => {
    if (!drawing) return;
    const { index, pointer, stroke } = drawing;
    remember(index);
    draft.scenes[index].strokes.push(stroke);
    drawing = null;
    if (canvases[index].hasPointerCapture(pointer)) canvases[index].releasePointerCapture(pointer);
    draw(canvases[index], draft.scenes[index].strokes, lastPoint ? { x: lastPoint.x, y: lastPoint.y, size, tool, erase } : undefined);
    update(); save();
  };
  const point = (canvas: HTMLCanvasElement, event: PointerEvent): Point => {
    const rect = canvas.getBoundingClientRect();
    return { x: Math.max(0, Math.min(WIDTH, (event.clientX - rect.left) * WIDTH / rect.width)), y: Math.max(0, Math.min(HEIGHT, (event.clientY - rect.top) * HEIGHT / rect.height)) };
  };
  title.value = draft.title;
  layout.value = String(draft.count);
  canvases.forEach((canvas, index) => {
    if (draft.scenes[index].strokes.length) draw(canvas, draft.scenes[index].strokes);
    captions[index].value = draft.scenes[index].caption;
    canvas.addEventListener("focus", () => select(index));
    canvas.addEventListener("pointerdown", (event) => {
      if (event.button !== 0 || drawing) return;
      event.preventDefault(); canvas.focus(); select(index);
      const pt = point(canvas, event);
      drawing = { index, pointer: event.pointerId, stroke: { points: [pt], color, size, erase, tool } };
      activeCursor = { index, x: pt.x, y: pt.y };
      canvas.setPointerCapture(event.pointerId);
      draw(canvas, [...draft.scenes[index].strokes, drawing.stroke], { x: pt.x, y: pt.y, size, tool, erase }); update();
    });
    canvas.addEventListener("pointermove", (event) => {
      const pt = point(canvas, event);
      if (drawing && drawing.index === index && drawing.pointer === event.pointerId) {
        for (const sample of event.getCoalescedEvents?.().length ? event.getCoalescedEvents() : [event]) drawing.stroke.points.push(point(canvas, sample));
        activeCursor = { index, x: pt.x, y: pt.y };
        draw(canvas, [...draft.scenes[index].strokes, drawing.stroke], { x: pt.x, y: pt.y, size, tool, erase });
      } else if (!drawing) {
        activeCursor = { index, x: pt.x, y: pt.y };
        draw(canvas, draft.scenes[index].strokes, { x: pt.x, y: pt.y, size, tool, erase });
      }
    });
    canvas.addEventListener("pointerleave", () => {
      if (!drawing) {
        if (activeCursor?.index === index) activeCursor = null;
        draw(canvas, draft.scenes[index].strokes);
      }
    });
    for (const name of ["pointerup", "pointercancel", "lostpointercapture"] as const) canvas.addEventListener(name, (event) => {
      if (drawing?.pointer === event.pointerId && drawing.index === index) finish(point(canvas, event));
    });
    captions[index].addEventListener("focus", () => select(index));
    captions[index].addEventListener("input", () => { draft.scenes[index].caption = captions[index].value; scheduleSave(); });
  });
  title.addEventListener("input", () => { draft.title = title.value; scheduleSave(); });
  layout.addEventListener("change", () => { finish(); draft.count = Number(layout.value); if (active >= draft.count) active = draft.count - 1; update(); save(); });
  q("story-add").addEventListener("click", () => {
    finish();
    if (draft.count >= MAX_STORYBOARD_FRAMES) return;
    draft.count += 1;
    select(draft.count - 1); save();
    cards[active].scrollIntoView({ block: "nearest", behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
    canvases[active].focus({ preventScroll: true });
  });
  const setTool = (mode: "pencil" | "brush" | "eraser") => {
    erase = mode === "eraser";
    if (mode !== "eraser") tool = mode;
    pencil?.classList.toggle("active", !erase && tool === "pencil");
    pencil?.setAttribute("aria-pressed", String(!erase && tool === "pencil"));
    brush?.classList.toggle("active", !erase && tool === "brush");
    brush?.setAttribute("aria-pressed", String(!erase && tool === "brush"));
    pen?.classList.toggle("active", !erase);
    pen?.setAttribute("aria-pressed", String(!erase));
    eraser.classList.toggle("active", erase);
    eraser.setAttribute("aria-pressed", String(erase));
    if (activeCursor && activeCursor.index === active) {
      draw(canvases[active], draft.scenes[active].strokes, { x: activeCursor.x, y: activeCursor.y, size, tool, erase });
    }
  };
  pencil?.addEventListener("click", () => setTool("pencil"));
  brush?.addEventListener("click", () => setTool("brush"));
  pen?.addEventListener("click", () => setTool(tool));
  eraser.addEventListener("click", () => setTool("eraser"));
  const setColor = (value: string) => {
    color = value; setTool(tool); q<HTMLInputElement>("story-color").value = color;
    root.querySelectorAll<HTMLButtonElement>(".story-color").forEach(button => button.setAttribute("aria-pressed", String(button.dataset.color === color)));
  };
  root.querySelectorAll<HTMLButtonElement>(".story-color").forEach(button => button.addEventListener("click", () => setColor(button.dataset.color!)));
  q<HTMLInputElement>("story-color").addEventListener("input", event => setColor((event.target as HTMLInputElement).value));
  q<HTMLInputElement>("story-size").addEventListener("input", event => {
    size = Number((event.target as HTMLInputElement).value);
    q("story-size-value").textContent = String(size);
    if (activeCursor && activeCursor.index === active) {
      draw(canvases[active], draft.scenes[active].strokes, { x: activeCursor.x, y: activeCursor.y, size, tool, erase });
    }
  });
  const step = (back: boolean) => {
    finish(); const history = histories[active]; const source = back ? history.undo : history.redo; const target = back ? history.redo : history.undo;
    if (!source.length) return;
    target.push(draft.scenes[active].strokes.slice()); draft.scenes[active].strokes = source.pop()!;
    draw(canvases[active], draft.scenes[active].strokes); update(); save();
  };
  undo.addEventListener("click", () => step(true)); redo.addEventListener("click", () => step(false));
  clear.addEventListener("click", () => dialog.showModal());
  q("story-clear-cancel").addEventListener("click", () => dialog.close());
  q("story-clear-confirm").addEventListener("click", () => {
    remember(active); draft.scenes[active].strokes = []; draw(canvases[active], []); dialog.close(); update(); save();
  });
  document.addEventListener("keydown", event => {
    if (dialog.open || document.querySelector("#board-nav-menu[open]") || (event.target instanceof HTMLElement && event.target.matches("input,textarea,select"))) return;
    if ((event.ctrlKey || event.metaKey) && ["z", "y"].includes(event.key.toLowerCase())) { event.preventDefault(); step(event.key.toLowerCase() === "z" && !event.shiftKey); }
    if (!event.ctrlKey && !event.metaKey && !event.altKey) {
      const k = event.key.toLowerCase();
      if (k === "p") { event.preventDefault(); setTool("pencil"); }
      else if (k === "b") { event.preventDefault(); setTool("brush"); }
      else if (k === "e") { event.preventDefault(); setTool("eraser"); }
    }
  });
  const download = q<HTMLButtonElement>("download-btn");
  document.addEventListener("keydown", event => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "d") {
      if (document.querySelector("dialog[open]")) return;
      event.preventDefault(); download.click();
    }
  });
  download.addEventListener("click", async () => {
    finish(); download.disabled = true;
    try {
      await document.fonts.ready;
      const output = document.createElement("canvas");
      const margin = 40; const gap = 24; const cardWidth = 640; const rows = Math.ceil(draft.count / 3);
      const measure = document.createElement("canvas").getContext("2d")!;
      measure.font = "16px sans-serif";
      const lines = draft.scenes.slice(0, draft.count).map(scene => wrapText(measure, scene.caption, cardWidth - 32));
      const heights = Array.from({ length: rows }, (_, row) => 40 + HEIGHT + 24 + Math.max(2, ...lines.slice(row * 3, row * 3 + 3).map(text => text.length)) * 24);
      output.width = margin * 2 + cardWidth * 3 + gap * 2;
      output.height = 130 + heights.reduce((a, b) => a + b, 0) + gap * (rows - 1) + margin;
      const ctx = output.getContext("2d")!;
      ctx.fillStyle = "#f7f8fc"; ctx.fillRect(0, 0, output.width, output.height);
      ctx.fillStyle = "#25354d"; ctx.font = "600 30px sans-serif";
      wrapText(ctx, draft.title || "Untitled storyboard", output.width - 2 * margin).forEach((line, i) => ctx.fillText(line, margin, 50 + i * 34));
      ctx.font = "14px sans-serif"; ctx.fillStyle = "#788299"; ctx.fillText(`${draft.count} scenes · Simple Sketchpad`, margin, 100);
      let y = 130;
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < 3; col++) {
          const index = row * 3 + col; const x = margin + col * (cardWidth + gap);
          if (index >= draft.count) break;
          ctx.fillStyle = "white"; ctx.fillRect(x, y, cardWidth, heights[row]);
          ctx.strokeStyle = "#e1e5ee"; ctx.strokeRect(x, y, cardWidth, heights[row]);
          ctx.fillStyle = "#7254df"; ctx.font = "600 14px sans-serif"; ctx.fillText(`SCENE ${String(index + 1).padStart(2, "0")}`, x + 16, y + 26);
          ctx.drawImage(canvases[index], x, y + 40, WIDTH, HEIGHT);
          ctx.fillStyle = "#536078"; ctx.font = "16px sans-serif";
          lines[index].forEach((line, lineIndex) => ctx.fillText(line, x + 16, y + 40 + HEIGHT + 28 + lineIndex * 24));
        }
        y += heights[row] + gap;
      }
      const blob = await new Promise<Blob>((resolve, reject) => output.toBlob(value => value ? resolve(value) : reject(new Error("Export failed")), "image/png"));
      const url = URL.createObjectURL(blob); const link = document.createElement("a");
      link.href = url; link.download = `${(draft.title.trim() || "storyboard").replace(/[^a-z0-9_-]+/gi, "-").slice(0, 80)}.png`; link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch { status.textContent = "Download failed. Please try again."; }
    finally { download.disabled = false; }
  });
  const printStoryboard = () => {
    finish(); captions.forEach(caption => { caption.style.height = "auto"; caption.style.height = `${caption.scrollHeight}px`; }); window.print();
  };
  q("story-print").addEventListener("click", printStoryboard);
  q("download-print-btn").addEventListener("click", printStoryboard);
  window.addEventListener("pagehide", () => { finish(); save(); });
  document.addEventListener("visibilitychange", () => { if (document.hidden) { finish(); save(); } });
  update();
}

export function wrapText(ctx: Pick<CanvasRenderingContext2D, "measureText">, text: string, width: number): string[] {
  const lines: string[] = [];
  for (const paragraph of text.split("\n")) {
    let line = "";
    // Breaking long words also keeps pasted URLs inside the caption area.
    for (const word of paragraph.split(/\s+/)) {
      if (!word) continue;
      if (line && ctx.measureText(`${line} ${word}`).width > width) { lines.push(line); line = ""; }
      if (ctx.measureText(word).width > width) {
        if (line) { lines.push(line); line = ""; }
        for (const char of word) { if (line && ctx.measureText(line + char).width > width) { lines.push(line); line = ""; } line += char; }
      } else line = line ? `${line} ${word}` : word;
    }
    lines.push(line);
  }
  return lines;
}
