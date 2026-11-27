import test from "node:test";
import assert from "node:assert/strict";
import {
  compressToUrlSafe,
  decompressFromUrlSafe,
  createReadOnlyShareUrl,
  parseReadOnlyPayloadFromUrl,
  isReadOnlyUrl,
} from "../src/lib/share-link.ts";

test("compressToUrlSafe and decompressFromUrlSafe roundtrip cleanly", async () => {
  const original = JSON.stringify({
    text: "Hello Sketchpad!",
    elements: [
      { id: "e1", kind: "stroke", points: [{ x: 10, y: 20 }, { x: 30, y: 40 }], color: "#533afd", width: 4 },
      { id: "e2", kind: "rect", x1: 50, y1: 50, x2: 150, y2: 120, color: "#10b981", filled: true },
    ],
  });

  const compressed = await compressToUrlSafe(original);
  assert.ok(typeof compressed === "string");
  assert.ok(compressed.length > 0);
  // Must be URL-safe (no +, /, or = characters)
  assert.equal(/^[A-Za-z0-9_-]+$/.test(compressed), true);

  const restored = await decompressFromUrlSafe(compressed);
  assert.equal(restored, original);
});

test("createReadOnlyShareUrl generates valid URL with hash fragment", async () => {
  const payload = {
    type: "sketchpad",
    version: 1,
    elements: [
      { id: "e1", kind: "text", x: 100, y: 200, text: "Read-only test", size: 16, color: "#0d253d" },
    ],
    erasures: [],
    darkMode: true,
  };

  const url = await createReadOnlyShareUrl(payload, "https://simplesketchpad.com", "/drawing-board");
  assert.ok(url.startsWith("https://simplesketchpad.com/drawing-board#read="));

  const hash = url.slice(url.indexOf("#"));
  const parsed = await parseReadOnlyPayloadFromUrl(hash);
  assert.ok(parsed);
  assert.equal(parsed.type, "sketchpad");
  assert.equal(parsed.version, 1);
  assert.equal(parsed.darkMode, true);
  assert.equal(parsed.elements.length, 1);
  assert.equal(parsed.elements[0].text, "Read-only test");
});

test("createReadOnlyShareUrl generates real-time room URL when roomId is provided", async () => {
  const payload = {
    type: "sketchpad",
    version: 1,
    elements: [
      { id: "e1", kind: "text", x: 50, y: 50, text: "Live sync read-only", size: 18, color: "#533afd" },
    ],
    erasures: [],
    darkMode: false,
  };

  const url = await createReadOnlyShareUrl(payload, "https://simplesketchpad.com", "/", "room-live-1234");
  assert.ok(url.includes("#room=room-live-1234&readonly=1&read="));

  // isReadOnlyUrl should identify it
  assert.equal(isReadOnlyUrl(url), true);

  // parseReadOnlyPayloadFromUrl should extract the snapshot payload cleanly without choking on readonly=1
  const hash = url.slice(url.indexOf("#"));
  const parsed = await parseReadOnlyPayloadFromUrl(hash);
  assert.ok(parsed);
  assert.equal(parsed.type, "sketchpad");
  assert.equal(parsed.elements[0].text, "Live sync read-only");
});

test("isReadOnlyUrl correctly detects read-only query and hash flags", () => {
  assert.equal(isReadOnlyUrl("#room=room-abc&readonly=1"), true);
  assert.equal(isReadOnlyUrl("#room=room-abc&read=1"), true);
  assert.equal(isReadOnlyUrl("#readonly=true"), true);
  assert.equal(isReadOnlyUrl("#readonly"), true);
  assert.equal(isReadOnlyUrl("https://simplesketchpad.com/?readonly=1#room=test"), true);
  assert.equal(isReadOnlyUrl("#read=eJw1jEEKgDAQA"), true);

  // Regular edit collaborator URL should NOT be read-only
  assert.equal(isReadOnlyUrl("#room=room-abc"), false);
  assert.equal(isReadOnlyUrl("#"), false);
  assert.equal(isReadOnlyUrl(""), false);
});

test("parseReadOnlyPayloadFromUrl handles storyboard drafts", async () => {
  const storyboardPayload = {
    type: "storyboard",
    version: 1,
    draft: {
      version: 1,
      title: "Hero's Journey",
      count: 2,
      scenes: [
        { caption: "Opening scene", strokes: [{ color: "#7254df", size: 4, erase: false, points: [{ x: 50, y: 50 }] }] },
        { caption: "Turning point", strokes: [] },
      ],
      darkMode: false,
    },
    darkMode: false,
  };

  const url = await createReadOnlyShareUrl(storyboardPayload, "http://localhost:4321", "/storyboard");
  const hash = url.slice(url.indexOf("#"));
  const parsed = await parseReadOnlyPayloadFromUrl(hash);

  assert.ok(parsed);
  assert.equal(parsed.type, "storyboard");
  assert.equal(parsed.draft.title, "Hero's Journey");
  assert.equal(parsed.draft.scenes[0].caption, "Opening scene");
});

test("parseReadOnlyPayloadFromUrl gracefully ignores invalid or corrupt hash", async () => {
  assert.equal(await parseReadOnlyPayloadFromUrl(""), null);
  assert.equal(await parseReadOnlyPayloadFromUrl("#something-else"), null);
  assert.equal(await parseReadOnlyPayloadFromUrl("#read=not-valid-base64!!!"), null);
  assert.equal(await parseReadOnlyPayloadFromUrl("#read=e30"), null); // empty object without version
  assert.equal(await parseReadOnlyPayloadFromUrl("#room=test&readonly=1"), null); // no snapshot payload
});
