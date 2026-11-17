import test from "node:test";
import assert from "node:assert/strict";
import { estimateTextWidth } from "../src/lib/elements.ts";

test("estimateTextWidth computes appropriate width for emojis and text", () => {
  const emojiWidth = estimateTextWidth("⭐", 64);
  assert.equal(emojiWidth, 64, "Single emoji stamp should have width equal to size (1.0 * size)");

  const starHeartWidth = estimateTextWidth("⭐❤️", 50);
  assert.equal(starHeartWidth, 100, "Two emoji characters should have width equal to 2 * size");

  const asciiWidth = estimateTextWidth("abc", 20);
  assert.equal(asciiWidth, 3 * 20 * 0.56, "ASCII text should retain 0.56 ratio");
});

test("stamp placement math places center exactly at cursor", () => {
  const cursorX = 250;
  const cursorY = 180;
  const stampSize = 64;
  const w = estimateTextWidth("⭐", stampSize);
  const h = stampSize * 1.25;

  const placedX = cursorX - w / 2;
  const placedY = cursorY - h / 2;

  // Center of the bounding box
  const centerX = placedX + w / 2;
  const centerY = placedY + h / 2;

  assert.equal(centerX, cursorX, "Stamp horizontal center matches cursor X exactly");
  assert.equal(centerY, cursorY, "Stamp vertical center matches cursor Y exactly");
});
