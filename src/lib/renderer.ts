import { elementCenter, type Element, type Erasure, type Point, type StrokeElement } from "./elements";

function mid(a: Point, b: Point): Point {
  return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2, p: (a.p + b.p) / 2 };
}

function traceSmoothPath(ctx: CanvasRenderingContext2D, points: Point[]): void {
  if (points.length === 0) return;
  if (points.length === 1) {
    ctx.moveTo(points[0].x, points[0].y);
    return;
  }
  ctx.moveTo(points[0].x, points[0].y);
  for (let i = 1; i < points.length - 1; i++) {
    const m = mid(points[i], points[i + 1] ?? points[i]);
    ctx.quadraticCurveTo(points[i].x, points[i].y, m.x, m.y);
  }
  const last = points[points.length - 1];
  ctx.lineTo(last.x, last.y);
}

function tracePressurePolygon(ctx: CanvasRenderingContext2D, points: Point[], baseWidth: number): void {
  const n = points.length;
  if (n === 0) return;
  const normals: { nx: number; ny: number; w: number }[] = [];
  for (let i = 0; i < n; i++) {
    const prev = points[Math.max(0, i - 1)];
    const next = points[Math.min(n - 1, i + 1)];
    let dx = next.x - prev.x;
    let dy = next.y - prev.y;
    const len = Math.hypot(dx, dy) || 1;
    dx /= len;
    dy /= len;
    normals.push({
      nx: -dy,
      ny: dx,
      w: baseWidth * (0.32 + 0.68 * points[i].p),
    });
  }
  ctx.beginPath();
  ctx.moveTo(points[0].x + normals[0].nx * normals[0].w, points[0].y + normals[0].ny * normals[0].w);
  for (let i = 1; i < n; i++) {
    ctx.lineTo(points[i].x + normals[i].nx * normals[i].w, points[i].y + normals[i].ny * normals[i].w);
  }
  for (let i = n - 1; i >= 0; i--) {
    ctx.lineTo(points[i].x - normals[i].nx * normals[i].w, points[i].y - normals[i].ny * normals[i].w);
  }
  ctx.closePath();
}

function anyPressure(points: Point[]): boolean {
  for (let i = 0; i < points.length; i++) {
    if (points[i].p > 0.05 && points[i].p < 0.95) {
      const prev = i > 0 ? points[i - 1].p : points[i].p;
      if (Math.abs(points[i].p - prev) > 0.05) return true;
    }
  }
  return false;
}

function roughJitter(points: Point[], phase: number): Point[] {
  const n = points.length;
  const out: Point[] = [];
  for (let i = 0; i < n; i++) {
    const prev = points[Math.max(0, i - 1)];
    const next = points[Math.min(n - 1, i + 1)];
    const dx = next.x - prev.x;
    const dy = next.y - prev.y;
    const len = Math.hypot(dx, dy) || 1;
    const j =
      (Math.sin(i * 1.73 + phase + points[i].x * 0.7) * 0.5 +
        Math.sin(i * 2.97 + phase * 2 + points[i].y * 0.6) * 0.5) *
      0.75;
    out.push({ x: points[i].x + (-dy / len) * j, y: points[i].y + (dx / len) * j, p: points[i].p });
  }
  return out;
}

function hash01(x: number, y: number): number {
  const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453123;
  return s - Math.floor(s);
}

function drawPencilStroke(ctx: CanvasRenderingContext2D, el: StrokeElement): void {
  const points = el.points;
  const n = points.length;
  if (n === 0) return;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.strokeStyle = el.color;
  ctx.fillStyle = el.color;
  const w = Math.max(0.5, el.width);
  const base = el.opacity;
  ctx.save();

  if (n === 1) {
    const p = points[0];
    for (let i = 0; i < 8; i++) {
      const ox = (hash01(i * 3.1 + p.x, p.y * 1.7 + i) - 0.5) * w * 1.4;
      const oy = (hash01(i * 5.3 + p.x, p.y + i * 2.1) - 0.5) * w * 1.4;
      ctx.globalAlpha = base * (0.18 + hash01(i + p.x, i + p.y) * 0.2);
      ctx.beginPath();
      ctx.arc(p.x + ox, p.y + oy, (0.12 + hash01(i * 7.1 + p.y, p.x - i) * 0.3) * w, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
    return;
  }

  if (n > 2) {
    // soft graphite body — slightly wider, lifted alpha
    ctx.globalAlpha = base * 0.38;
    ctx.lineWidth = w * 1.35;
    ctx.beginPath();
    traceSmoothPath(ctx, roughJitter(points, 0.7));
    ctx.stroke();

    // core deposit — thinner, more opaque
    ctx.globalAlpha = base * 0.5;
    ctx.lineWidth = w * 0.82;
    ctx.beginPath();
    traceSmoothPath(ctx, roughJitter(points, 2.3));
    ctx.stroke();
  } else {
    ctx.globalAlpha = base * 0.85;
    ctx.lineWidth = w * 0.9;
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    ctx.lineTo(points[n - 1].x, points[n - 1].y);
    ctx.stroke();
  }

  // graphite tooth — deterministic speckles along the stroke, offset across the width
  const spac = Math.max(0.6, w * 0.34);
  let carry = 0;
  for (let i = 1; i < n; i++) {
    const a = points[i - 1];
    const b = points[i];
    const seg = Math.hypot(b.x - a.x, b.y - a.y);
    if (seg === 0) continue;
    const speedF = Math.min(1, Math.max(0.3, 1.35 - seg / (spac * 3.2)));
    const steps = Math.floor((seg + carry) / spac);
    carry = seg + carry - steps * spac;
    const pxN = (b.y - a.y) / seg;
    const pyN = -(b.x - a.x) / seg;
    for (let k = 0; k < steps; k++) {
      const t = (k + 0.5) / Math.max(1, steps);
      const px = a.x + (b.x - a.x) * t;
      const py = a.y + (b.y - a.y) * t;
      const side = hash01(px, py) - 0.5;
      const off = side * w;
      const r = (0.08 + hash01(py + 4.9, px + 1.3) * 0.2) * w * (0.5 + 0.5 * speedF);
      ctx.globalAlpha = base * (0.1 + hash01(px + 6.2, py + 2.7) * 0.14) * speedF;
      ctx.beginPath();
      ctx.arc(px + pxN * off, py + pyN * off, r, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  ctx.restore();
}

export function drawElement(ctx: CanvasRenderingContext2D, el: Element): void {
  ctx.save();
  const rot = el.rotation ?? 0;
  if (rot) {
    const c = elementCenter(el);
    const a = (rot * Math.PI) / 180;
    ctx.translate(c.x, c.y);
    ctx.rotate(a);
    ctx.translate(-c.x, -c.y);
  }
  ctx.globalAlpha = el.opacity;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.strokeStyle = el.color;
  ctx.fillStyle = el.color;

  switch (el.kind) {
    case "stroke": {
      if (el.rough) {
        drawPencilStroke(ctx, el);
        break;
      }
      const pressure = anyPressure(el.points);
      if (pressure && el.points.length > 2) {
        tracePressurePolygon(ctx, el.points, el.width / 2);
        ctx.fill();
      } else {
        ctx.lineWidth = el.width;
        ctx.beginPath();
        if (el.points.length === 1) {
          ctx.arc(el.points[0].x, el.points[0].y, el.width / 2, 0, Math.PI * 2);
          ctx.fill();
        } else {
          traceSmoothPath(ctx, el.points);
          ctx.stroke();
        }
      }
      break;
    }
    case "rect": {
      const x = Math.min(el.x1, el.x2);
      const y = Math.min(el.y1, el.y2);
      const w = Math.abs(el.x2 - el.x1);
      const h = Math.abs(el.y2 - el.y1);
      ctx.beginPath();
      ctx.roundRect(x, y, w, h, 2);
      if (el.filled) {
        ctx.fill();
      } else {
        ctx.lineWidth = el.width;
        ctx.stroke();
      }
      break;
    }
    case "ellipse": {
      const x = Math.min(el.x1, el.x2);
      const y = Math.min(el.y1, el.y2);
      const w = Math.abs(el.x2 - el.x1);
      const h = Math.abs(el.y2 - el.y1);
      ctx.beginPath();
      ctx.ellipse(x + w / 2, y + h / 2, Math.max(w / 2, 1), Math.max(h / 2, 1), 0, 0, Math.PI * 2);
      if (el.filled) {
        ctx.fill();
      } else {
        ctx.lineWidth = el.width;
        ctx.stroke();
      }
      break;
    }
    case "triangle": {
      const x1 = el.x1, y1 = el.y1, x2 = el.x2, y2 = el.y2;
      const top = Math.min(y1, y2);
      const bottom = Math.max(y1, y2);
      const left = Math.min(x1, x2);
      const right = Math.max(x1, x2);
      ctx.beginPath();
      ctx.moveTo((left + right) / 2, top);
      ctx.lineTo(right, bottom);
      ctx.lineTo(left, bottom);
      ctx.closePath();
      if (el.filled) {
        ctx.fill();
      } else {
        ctx.lineWidth = el.width;
        ctx.stroke();
      }
      break;
    }
    case "line": {
      ctx.lineWidth = el.width;
      ctx.beginPath();
      ctx.moveTo(el.x1, el.y1);
      ctx.lineTo(el.x2, el.y2);
      ctx.stroke();
      break;
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
      ctx.lineWidth = el.width;
      ctx.beginPath();
      ctx.moveTo(el.x1, el.y1);
      ctx.lineTo(sx, sy);
      ctx.stroke();
      const spread = head * 0.55;
      const nx = -uy;
      const ny = ux;
      ctx.beginPath();
      ctx.moveTo(el.x2, el.y2);
      ctx.lineTo(sx + nx * spread, sy + ny * spread);
      ctx.lineTo(sx - nx * spread, sy - ny * spread);
      ctx.closePath();
      ctx.fill();
      break;
    }
    case "text": {
      ctx.font = `500 ${el.size}px "Inter Variable", "Inter", system-ui, sans-serif`;
      ctx.textAlign = "left";
      ctx.textBaseline = "top";
      const lines = el.text.split("\n");
      for (let i = 0; i < lines.length; i++) {
        ctx.fillText(lines[i], el.x, el.y + i * el.size * 1.25);
      }
      break;
    }
  }
  ctx.restore();
}

export function drawErasure(ctx: CanvasRenderingContext2D, erasure: Erasure): void {
  ctx.save();
  ctx.globalCompositeOperation = "destination-out";
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.strokeStyle = "rgba(0,0,0,1)";
  ctx.lineWidth = erasure.width;
  ctx.beginPath();
  if (erasure.points.length === 1) {
    ctx.arc(erasure.points[0].x, erasure.points[0].y, erasure.width / 2, 0, Math.PI * 2);
    ctx.fill();
  } else {
    traceSmoothPath(ctx, erasure.points);
    ctx.stroke();
  }
  ctx.restore();
}

export function drawScene(
  ctx: CanvasRenderingContext2D,
  elements: Element[],
  erasures: Erasure[],
  inProgress: Element | null,
  inProgressErasure: Erasure | null,
): void {
  for (const el of elements) drawElement(ctx, el);
  for (const er of erasures) drawErasure(ctx, er);
  if (inProgress) drawElement(ctx, inProgress);
  if (inProgressErasure) drawErasure(ctx, inProgressErasure);
}