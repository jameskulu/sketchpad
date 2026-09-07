import type { Element, Erasure, Point } from "./elements";

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

export function drawElement(ctx: CanvasRenderingContext2D, el: Element): void {
  ctx.save();
  ctx.globalAlpha = el.opacity;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.strokeStyle = el.color;
  ctx.fillStyle = el.color;

  switch (el.kind) {
    case "stroke": {
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