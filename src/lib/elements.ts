export type Point = { x: number; y: number; p: number };

export type ToolId = "brush" | "rect" | "ellipse" | "triangle" | "line" | "arrow" | "text" | "eraser";

export interface StrokeElement {
  id: string;
  kind: "stroke";
  points: Point[];
  color: string;
  width: number;
  opacity: number;
}

export interface ShapeElement {
  id: string;
  kind: "rect" | "ellipse" | "triangle" | "line" | "arrow";
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color: string;
  width: number;
  opacity: number;
  filled: boolean;
}

export interface TextElement {
  id: string;
  kind: "text";
  x: number;
  y: number;
  text: string;
  size: number;
  color: string;
  opacity: number;
}

export type Element = StrokeElement | ShapeElement | TextElement;

export interface Erasure {
  id: string;
  points: Point[];
  width: number;
}

export interface Snapshot {
  elements: Element[];
  erasures: Erasure[];
}

export function cloneSnapshot(s: Snapshot): Snapshot {
  return {
    elements: s.elements.map((el) =>
      el.kind === "stroke" ? { ...el, points: el.points.map((p) => ({ ...p })) } : { ...el },
    ),
    erasures: s.erasures.map((e) => ({ ...e, points: e.points.map((p) => ({ ...p })) })),
  };
}

export function snapshotsEqual(a: Snapshot, b: Snapshot): boolean {
  return a.elements.length === b.elements.length && a.erasures.length === b.erasures.length;
}

export function elementBounds(el: Element): { x: number; y: number; w: number; h: number } {
  switch (el.kind) {
    case "stroke": {
      let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
      for (const p of el.points) {
        if (p.x < minX) minX = p.x;
        if (p.y < minY) minY = p.y;
        if (p.x > maxX) maxX = p.x;
        if (p.y > maxY) maxY = p.y;
      }
      const pad = el.width / 2;
      return { x: minX - pad, y: minY - pad, w: maxX - minX + pad * 2, h: maxY - minY + pad * 2 };
    }
    case "rect":
    case "ellipse":
    case "triangle": {
      const x = Math.min(el.x1, el.x2);
      const y = Math.min(el.y1, el.y2);
      return { x, y, w: Math.abs(el.x2 - el.x1), h: Math.abs(el.y2 - el.y1) };
    }
    case "line":
    case "arrow": {
      const pad = el.width / 2;
      const x = Math.min(el.x1, el.x2);
      const y = Math.min(el.y1, el.y2);
      const w = Math.abs(el.x2 - el.x1);
      const h = Math.abs(el.y2 - el.y1);
      return { x: x - pad, y: y - pad, w: w + pad * 2, h: h + pad * 2 };
    }
    case "text": {
      const w = estimateTextWidth(el.text, el.size);
      return { x: el.x, y: el.y, w, h: el.size * 1.25 };
    }
  }
}

export function contentBounds(elements: Element[]): { x: number; y: number; w: number; h: number } | null {
  if (elements.length === 0) return null;
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  for (const el of elements) {
    const b = elementBounds(el);
    if (b.x < minX) minX = b.x;
    if (b.y < minY) minY = b.y;
    if (b.x + b.w > maxX) maxX = b.x + b.w;
    if (b.y + b.h > maxY) maxY = b.y + b.h;
  }
  return { x: minX, y: minY, w: maxX - minX, h: maxY - minY };
}

export function estimateTextWidth(text: string, size: number): number {
  const lines = text.split("\n");
  let max = 0;
  for (const line of lines) max = Math.max(max, line.length);
  return max * size * 0.56;
}

export function pointInElement(p: { x: number; y: number }, el: Element): boolean {
  const b = elementBounds(el);
  return p.x >= b.x && p.x <= b.x + b.w && p.y >= b.y && p.y <= b.y + b.h;
}

let counter = 0;
export function nextId(): string {
  counter += 1;
  return `el_${Date.now().toString(36)}_${counter.toString(36)}`;
}