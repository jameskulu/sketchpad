export interface InlineSegment {
  text: string;
  href?: string;
}

const INLINE_LINK = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;

/**
 * Splits a content string into plain-text and link segments.
 * Supports inline markdown-style links, e.g. "see [True Online Compass](https://trueonlinecompass.com/)".
 */
export function parseInlineText(input: string): InlineSegment[] {
  const segments: InlineSegment[] = [];
  let lastIndex = 0;

  for (const match of input.matchAll(INLINE_LINK)) {
    const start = match.index ?? 0;
    if (start > lastIndex) {
      segments.push({ text: input.slice(lastIndex, start) });
    }
    segments.push({ text: match[1], href: match[2] });
    lastIndex = start + match[0].length;
  }

  if (lastIndex < input.length) {
    segments.push({ text: input.slice(lastIndex) });
  }

  return segments;
}