import { contentBounds, elementCenter, type Element, type Erasure, type Point } from "./elements";

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function hexA(value: string, alpha: number): string {
  if (alpha >= 1) return value;
  const n = Math.max(0, Math.min(1, alpha));
  const hex = Math.round(n * 255).toString(16).padStart(2, "0");
  return value.startsWith("#") && value.length === 7 ? `${value}${hex}` : value;
}

function round(v: number): number {
  return Math.round(v * 100) / 100;
}

function rotateGroup(el: Element, inner: string): string {
  const rot = el.rotation ?? 0;
  if (!rot) return inner;
  const c = elementCenter(el);
  return `<g transform="translate(${round(c.x)} ${round(c.y)}) rotate(${round(rot)}) translate(${round(-c.x)} ${round(-c.y)})">${inner}</g>`;
}

function elementSvg(el: Element): string {
  switch (el.kind) {
    case "stroke": {
      const fill = el.rough;
      if (fill) {
        return `<path d="${approxPath(el.points)}" fill="none" stroke="${esc(el.color)}" stroke-width="${round(el.width)}" stroke-linecap="round" stroke-linejoin="round" opacity="${el.opacity}"/>`;
      }
      if (el.points.length === 1) {
        const p = el.points[0];
        return `<circle cx="${round(p.x)}" cy="${round(p.y)}" r="${round(el.width / 2)}" fill="${esc(el.color)}" fill-opacity="${el.opacity}"/>`;
      }
      return `<path d="${approxPath(el.points)}" fill="none" stroke="${esc(el.color)}" stroke-width="${round(el.width)}" stroke-linecap="round" stroke-linejoin="round" opacity="${el.opacity}"/>`;
    }
    case "rect": {
      const x = Math.min(el.x1, el.x2);
      const y = Math.min(el.y1, el.y2);
      const w = Math.abs(el.x2 - el.x1);
      const h = Math.abs(el.y2 - el.y1);
      const color = hexA(el.color, el.opacity);
      return el.filled
        ? `<rect x="${round(x)}" y="${round(y)}" width="${round(w)}" height="${round(h)}" rx="2" fill="${esc(color)}"/>`
        : `<rect x="${round(x)}" y="${round(y)}" width="${round(w)}" height="${round(h)}" rx="2" fill="none" stroke="${esc(el.color)}" stroke-width="${round(el.width)}" opacity="${el.opacity}"/>`;
    }
    case "ellipse": {
      const x = Math.min(el.x1, el.x2);
      const y = Math.min(el.y1, el.y2);
      const w = Math.abs(el.x2 - el.x1);
      const h = Math.abs(el.y2 - el.y1);
      const color = hexA(el.color, el.opacity);
      return el.filled
        ? `<ellipse cx="${round(x + w / 2)}" cy="${round(y + h / 2)}" rx="${round(w / 2)}" ry="${round(h / 2)}" fill="${esc(color)}"/>`
        : `<ellipse cx="${round(x + w / 2)}" cy="${round(y + h / 2)}" rx="${round(w / 2)}" ry="${round(h / 2)}" fill="none" stroke="${esc(el.color)}" stroke-width="${round(el.width)}" opacity="${el.opacity}"/>`;
    }
    case "triangle": {
      const top = { x: (Math.min(el.x1, el.x2) + Math.max(el.x1, el.x2)) / 2, y: Math.min(el.y1, el.y2) };
      const bl = { x: Math.min(el.x1, el.x2), y: Math.max(el.y1, el.y2) };
      const br = { x: Math.max(el.x1, el.x2), y: Math.max(el.y1, el.y2) };
      const color = hexA(el.color, el.opacity);
      const pts = `${round(top.x)},${round(top.y)} ${round(br.x)},${round(br.y)} ${round(bl.x)},${round(bl.y)}`;
      return el.filled
        ? `<polygon points="${pts}" fill="${esc(color)}"/>`
        : `<polygon points="${pts}" fill="none" stroke="${esc(el.color)}" stroke-width="${round(el.width)}" stroke-linejoin="round" opacity="${el.opacity}"/>`;
    }
    case "line": {
      return `<line x1="${round(el.x1)}" y1="${round(el.y1)}" x2="${round(el.x2)}" y2="${round(el.y2)}" stroke="${esc(el.color)}" stroke-width="${round(el.width)}" stroke-linecap="round" opacity="${el.opacity}"/>`;
    }
    case "arrow": {
      const dx = el.x2 - el.x1;
      const dy = el.y2 - el.y1;
      const len = Math.hypot(dx, dy) || 1;
      let head = 12 + el.width * 2.2;
      head = Math.min(head, len * 0.6);
      const ux = dx / len;
      const uy = dy / len;
      const sx = el.x2 - ux * head;
      const sy = el.y2 - uy * head;
      const spread = head * 0.55;
      const nx = -uy;
      const ny = ux;
      const er = nx * spread;
      const ey = ny * spread;
      const headPts = `${round(el.x2)},${round(el.y2)} ${round(sx + er)},${round(sy + ey)} ${round(sx - er)},${round(sy - ey)}`;
      const color = hexA(el.color, el.opacity);
      return `<line x1="${round(el.x1)}" y1="${round(el.y1)}" x2="${round(sx)}" y2="${round(sy)}" stroke="${esc(el.color)}" stroke-width="${round(el.width)}" stroke-linecap="round" opacity="${el.opacity}"/><polygon points="${headPts}" fill="${esc(color)}"/>`;
    }
    case "text": {
      const opacity = el.opacity;
      const lines = el.text.split("\n");
      const inner = lines
        .map((line, i) => `<tspan x="${round(el.x)}" dy="${i === 0 ? 0 : round(el.size * 1.25)}">${esc(line)}</tspan>`)
        .join("");
      return `<text x="${round(el.x)}" y="${round(el.y)}" font-family="Inter, system-ui, sans-serif" font-size="${round(el.size)}" fill="${esc(el.color)}" opacity="${opacity}">${inner.length ? inner : ""}</text>`;
    }
    case "sticky": {
      const x = Math.min(el.x1, el.x2);
      const y = Math.min(el.y1, el.y2);
      const w = Math.max(Math.abs(el.x2 - el.x1), 24);
      const h = Math.max(Math.abs(el.y2 - el.y1), 24);
      const pad = 10;
      const color = hexA(el.color, el.opacity);
      let out = `<rect x="${round(x)}" y="${round(y)}" width="${round(w)}" height="${round(h)}" rx="3" fill="${esc(color)}"/>`;
      const lines = el.text.trim().split("\n");
      if (lines.some((l) => l.length)) {
        const inner = lines
          .map((line, i) => `<tspan x="${round(x + pad)}" dy="${i === 0 ? 0 : round(el.size * 1.3)}">${esc(line)}</tspan>`)
          .join("");
        out += `<text x="${round(x + pad)}" y="${round(y + pad)}" font-family="Inter, system-ui, sans-serif" font-size="${round(el.size)}" fill="${esc(el.textColor)}" opacity="${el.opacity}">${inner}</text>`;
      }
      return out;
    }
  }
}

function approxPath(points: Point[]): string {
  if (points.length === 0) return "";
  const parts: string[] = [];
  for (let i = 0; i < points.length; i++) {
    parts.push(`${i === 0 ? "M" : "L"}${round(points[i].x)} ${round(points[i].y)}`);
  }
  return parts.join(" ");
}

function erasureSvg(erasure: Erasure): string {
  if (erasure.points.length === 0) return "";
  const pts = erasure.points;
  let d = "";
  if (pts.length === 1) {
    d = approxPath(pts);
  } else {
    d = `M${round(pts[0].x)} ${round(pts[0].y)}`;
    for (let i = 1; i < pts.length; i++) {
      const a = pts[i - 1];
      const b = pts[i];
      const mx = (a.x + b.x) / 2;
      const my = (a.y + b.y) / 2;
      d += ` Q${round(a.x)} ${round(a.y)} ${round(mx)} ${round(my)}`;
    }
    const last = pts[pts.length - 1];
    d += ` L${round(last.x)} ${round(last.y)}`;
  }
  return `<path d="${d}" fill="none" stroke="#ffffff" stroke-width="${round(erasure.width)}" stroke-linecap="round" stroke-linejoin="round"/>`;
}

export function elementsToSvg(elements: Element[], erasures: Erasure[]): string {
  const b = contentBounds(elements) ?? { x: -150, y: -150, w: 300, h: 300 };
  const pad = 32;
  const w = Math.max(1, Math.round(b.w + pad * 2));
  const h = Math.max(1, Math.round(b.h + pad * 2));
  const tx = pad - b.x;
  const ty = pad - b.y;

  const parts: string[] = [];
  parts.push(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">`);
  parts.push(`<rect width="${w}" height="${h}" fill="#ffffff"/>`);
  parts.push(`<g transform="translate(${round(tx)} ${round(ty)})">`);
  for (const el of elements) {
    parts.push(rotateGroup(el, elementSvg(el)));
  }
  for (const er of erasures) {
    parts.push(erasureSvg(er));
  }
  parts.push("</g></svg>");
  return parts.join("");
}

export function downloadSvg(elements: Element[], erasures: Erasure[]): void {
  const svg = elementsToSvg(elements, erasures);
  const blob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.download = `sketchpad-${new Date().toISOString().slice(0, 19).replace(/[:T]/g, "-")}.svg`;
  a.href = url;
  a.click();
  URL.revokeObjectURL(url);
}