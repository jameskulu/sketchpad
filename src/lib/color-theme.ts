/**
 * Color inversion utility for Dark Mode.
 * Seamlessly inverts drawing colors between light and dark themes
 * while preserving hue recognition and high contrast against canvas backgrounds.
 */

interface RGB {
  r: number;
  g: number;
  b: number;
  a?: number;
}

interface HSL {
  h: number;
  s: number;
  l: number;
}

// Canonical paired swatches (Light <-> Dark)
const LIGHT_TO_DARK_MAP: Record<string, string> = {
  // Near-black and dark ink -> Crisp white/off-white
  "#0d253d": "#ffffff",
  "#000000": "#ffffff",
  "#121212": "#ffffff",
  "#1e1e1e": "#ffffff",
  "#111827": "#f9fafb",
  "#1f2937": "#f3f4f6",
  "#25354d": "#ffffff", // Storyboard default ink
  "#273951": "#e2e8f0",
  "#374151": "#e5e7eb",
  "#4b5563": "#cbd5e1",
  "#64748d": "#94a3b8",

  // Pure white and paper background -> Dark ink
  "#ffffff": "#0d253d",
  "#f6f9fc": "#0d253d",
  "#f8fafc": "#0f172a",
  "#f1f5f9": "#1e293b",
  "#e2e8f0": "#1e293b",

  // Core brand and palette colors tuned for high contrast on dark canvas (#121212)
  "#533afd": "#818cf8", // Primary indigo
  "#665efd": "#a5b4fc", // Soft indigo
  "#ea2261": "#fb7185", // Vivid pink / rose
  "#f96bee": "#f472b6", // Magenta / pink
  "#9b6829": "#fbbf24", // Brown -> warm amber
  "#0e9f6e": "#34d399", // Emerald green
  "#0ea5e9": "#38bdf8", // Sky blue
  "#e05a00": "#fb923c", // Orange
  "#ff9d00": "#facc15", // Amber / yellow
  "#ffd400": "#fde047", // Yellow
  "#8b5cf6": "#c4b5fd", // Violet

  // Storyboard palette swatches
  "#7254df": "#a58af9",
  "#df6384": "#f472b6",
  "#2f9884": "#34d399",
  "#e3a33d": "#fbbf24",

  // Sticky note backgrounds (pastel light -> deep dark)
  "#fef08a": "#713f12",
  "#bbf7d0": "#14532d",
  "#bfdbfe": "#1e3a8a",
  "#fbcfe8": "#831843",
  "#fed7aa": "#7c2d12",
};

// Inverse map (Dark -> Light)
const DARK_TO_LIGHT_MAP: Record<string, string> = {
  "#ffffff": "#0d253d",
  "#f9fafb": "#111827",
  "#f3f4f6": "#1f2937",
  "#e2e8f0": "#273951",
  "#e5e7eb": "#374151",
  "#cbd5e1": "#4b5563",
  "#94a3b8": "#64748d",

  "#818cf8": "#533afd",
  "#a5b4fc": "#665efd",
  "#fb7185": "#ea2261",
  "#f472b6": "#f96bee",
  "#fbbf24": "#9b6829",
  "#34d399": "#0e9f6e",
  "#38bdf8": "#0ea5e9",
  "#fb923c": "#e05a00",
  "#facc15": "#ff9d00",
  "#fde047": "#ffd400",
  "#c4b5fd": "#8b5cf6",

  // Storyboard inverse map
  "#a58af9": "#7254df",
  "#f472b6": "#df6384",
  "#34d399": "#2f9884",
  "#fbbf24": "#e3a33d",

  "#713f12": "#fef08a",
  "#14532d": "#bbf7d0",
  "#1e3a8a": "#bfdbfe",
  "#831843": "#fbcfe8",
  "#7c2d12": "#fed7aa",
};

/** Parse hex, rgb, rgba string to RGB object */
export function parseColor(str: string): RGB | null {
  if (!str) return null;
  const s = str.trim().toLowerCase();

  if (s.startsWith("#")) {
    let hex = s.slice(1);
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    } else if (hex.length === 4) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
    }
    if (hex.length >= 6) {
      const r = parseInt(hex.slice(0, 2), 16);
      const g = parseInt(hex.slice(2, 4), 16);
      const b = parseInt(hex.slice(4, 6), 16);
      const a = hex.length >= 8 ? parseInt(hex.slice(6, 8), 16) / 255 : 1;
      if (!isNaN(r) && !isNaN(g) && !isNaN(b)) return { r, g, b, a };
    }
    return null;
  }

  const rgbMatch = /^rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)$/.exec(s);
  if (rgbMatch) {
    return {
      r: parseInt(rgbMatch[1], 10),
      g: parseInt(rgbMatch[2], 10),
      b: parseInt(rgbMatch[3], 10),
      a: rgbMatch[4] !== undefined ? parseFloat(rgbMatch[4]) : 1,
    };
  }

  return null;
}

/** Convert RGB to Hex string */
export function rgbToHex(r: number, g: number, b: number): string {
  const clamp = (v: number) => Math.max(0, Math.min(255, Math.round(v)));
  const hex = ((1 << 24) + (clamp(r) << 16) + (clamp(g) << 8) + clamp(b)).toString(16).slice(1);
  return `#${hex}`;
}

/** Convert RGB to HSL */
function rgbToHsl(r: number, g: number, b: number): HSL {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }

  return { h, s, l };
}

/** Convert HSL to RGB */
function hslToRgb(h: number, s: number, l: number): { r: number; g: number; b: number } {
  let r: number, g: number, b: number;

  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return { r: r * 255, g: g * 255, b: b * 255 };
}

/**
 * Invert a single color string for target theme (toDark = true means going to dark mode).
 * Preserves transparency and hue while shifting lightness to contrast against canvas background.
 */
export function invertColorForTheme(color: string, toDark: boolean): string {
  if (!color || color === "transparent") return color;

  const trimmed = color.trim().toLowerCase();

  // 1. Direct dictionary lookup for calibrated contrast
  if (toDark) {
    if (LIGHT_TO_DARK_MAP[trimmed]) return LIGHT_TO_DARK_MAP[trimmed];
  } else {
    if (DARK_TO_LIGHT_MAP[trimmed]) return DARK_TO_LIGHT_MAP[trimmed];
  }

  const parsed = parseColor(trimmed);
  if (!parsed) return color;

  // Normalized hex key check
  const hex6 = rgbToHex(parsed.r, parsed.g, parsed.b);
  if (toDark && LIGHT_TO_DARK_MAP[hex6]) {
    return LIGHT_TO_DARK_MAP[hex6];
  } else if (!toDark && DARK_TO_LIGHT_MAP[hex6]) {
    return DARK_TO_LIGHT_MAP[hex6];
  }

  // 2. Continuous HSL lightness inversion for arbitrary colors
  const { h, s, l } = rgbToHsl(parsed.r, parsed.g, parsed.b);

  let newL: number;
  if (s < 0.12) {
    // Grayscale / monochrome
    if (toDark) {
      // Dark strokes become bright white/light-gray
      newL = l < 0.35 ? 0.96 : Math.max(0.7, 1 - l);
    } else {
      // White/light strokes become dark ink
      newL = l > 0.65 ? 0.08 : Math.min(0.25, 1 - l);
    }
  } else {
    // Saturated hues: preserve hue & vibrancy, adjust luminance for background
    if (toDark) {
      // On dark background (#121212), ensure brightness is >= 0.65 for clarity
      newL = Math.max(0.62, Math.min(0.88, 1 - l * 0.7));
    } else {
      // On white background, ensure brightness is <= 0.45 for contrast
      newL = Math.min(0.42, Math.max(0.18, 1 - l * 1.1));
    }
  }

  const invertedRgb = hslToRgb(h, s, newL);
  return rgbToHex(invertedRgb.r, invertedRgb.g, invertedRgb.b);
}

/**
 * Invert an entire array of elements in-place or return updated elements.
 */
export function invertElementsTheme<T extends { color?: string; textColor?: string; kind?: string }>(
  elements: T[],
  toDark: boolean,
): void {
  for (const el of elements) {
    if (el.color) {
      el.color = invertColorForTheme(el.color, toDark);
    }
    if (el.kind === "sticky" && el.textColor) {
      el.textColor = invertColorForTheme(el.textColor, toDark);
    }
  }
}

/**
 * Wire theme toggle button to switch HTML dark class, store preference, and invert pad drawing.
 */
export function initThemeToggle(pad: { getDarkMode: () => boolean; setDarkMode: (isDark: boolean, invert?: boolean) => void }): void {
  // Sync pad's dark mode with initial document state
  if (typeof document !== "undefined") {
    const isDark = document.documentElement.classList.contains("dark");
    if (pad.getDarkMode() !== isDark) {
      pad.setDarkMode(isDark, false);
    }
  }

  // Listen to sketchpad:themechange event dispatched by ToolHeader button
  if (typeof window !== "undefined") {
    window.addEventListener("sketchpad:themechange", (e: any) => {
      const nextDark = Boolean(e.detail?.darkMode);
      pad.setDarkMode(nextDark, true);
    });
  }
}
