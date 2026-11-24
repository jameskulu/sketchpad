import type { Element, Erasure } from "./elements.ts";
import type { Draft } from "./storyboard.ts";

export interface ReadOnlySketchpadPayload {
  type: "sketchpad";
  version: 1;
  elements: Element[];
  erasures: Erasure[];
  darkMode?: boolean;
  canvasBgColor?: string;
}

export interface ReadOnlyStoryboardPayload {
  type: "storyboard";
  version: 1;
  draft: Draft;
  darkMode?: boolean;
}

export type ReadOnlyPayload = ReadOnlySketchpadPayload | ReadOnlyStoryboardPayload;

/**
 * Compress a UTF-8 string to a URL-safe Base64 string using CompressionStream with fallback.
 */
export async function compressToUrlSafe(data: string): Promise<string> {
  if (typeof CompressionStream !== "undefined") {
    try {
      const stream = new Blob([data]).stream();
      const compressedStream = stream.pipeThrough(new CompressionStream("deflate-raw"));
      const response = new Response(compressedStream);
      const buffer = await response.arrayBuffer();
      const bytes = new Uint8Array(buffer);
      let binary = "";
      const len = bytes.byteLength;
      for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      return btoa(binary)
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");
    } catch {
      // Fall through to fallback
    }
  }

  // Fallback for environments without CompressionStream
  return btoa(encodeURIComponent(data))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

/**
 * Decompress a URL-safe Base64 string back to original string.
 */
export async function decompressFromUrlSafe(encoded: string): Promise<string> {
  let base64 = encoded.replace(/-/g, "+").replace(/_/g, "/");
  while (base64.length % 4 !== 0) {
    base64 += "=";
  }

  if (typeof DecompressionStream !== "undefined") {
    try {
      const binary = atob(base64);
      const len = binary.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
        bytes[i] = binary.charCodeAt(i);
      }
      const stream = new Blob([bytes]).stream();
      const decompressedStream = stream.pipeThrough(new DecompressionStream("deflate-raw"));
      const response = new Response(decompressedStream);
      return await response.text();
    } catch {
      // Fall through to fallback
    }
  }

  // Fallback
  return decodeURIComponent(atob(base64));
}

/**
 * Generate a full shareable read-only link URL.
 */
export async function createReadOnlyShareUrl(
  payload: ReadOnlyPayload,
  origin?: string,
  pathname?: string,
): Promise<string> {
  const json = JSON.stringify(payload);
  const compressed = await compressToUrlSafe(json);
  const resolvedOrigin = origin || (typeof window !== "undefined" ? window.location.origin : "");
  const resolvedPath = pathname || (typeof window !== "undefined" ? window.location.pathname : "/");
  return `${resolvedOrigin}${resolvedPath}#read=${compressed}`;
}

/**
 * Extract and parse read-only payload from a URL hash (or current window.location.hash).
 */
export async function parseReadOnlyPayloadFromUrl(customHash?: string): Promise<ReadOnlyPayload | null> {
  const hash = customHash !== undefined ? customHash : (typeof window !== "undefined" ? window.location.hash : "");
  if (!hash) return null;

  const match = hash.match(/[#&?]read(?:only)?=([A-Za-z0-9_-]+)/);
  if (!match || !match[1]) return null;

  try {
    const rawJson = await decompressFromUrlSafe(match[1]);
    const parsed = JSON.parse(rawJson);
    if (parsed && typeof parsed === "object" && parsed.version === 1) {
      if (parsed.type === "sketchpad" || parsed.type === "storyboard") {
        return parsed as ReadOnlyPayload;
      }
    }
  } catch (err) {
    console.warn("Failed to parse read-only sketch payload from URL:", err);
  }
  return null;
}
