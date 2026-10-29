import test from "node:test";
import assert from "node:assert/strict";
import { parseStoryboard, wrapText } from "../src/lib/storyboard.ts";

const draft = () => ({ version: 1, title: "A short story", count: 3, scenes: Array.from({ length: 6 }, () => ({ caption: "", strokes: [] })) });
test("restoration preserves hidden scenes when using the three-frame layout", () => {
  const value = draft();
  value.scenes[5].caption = "The ending";
  value.scenes[5].strokes = [{ color: "#7254df", size: 4, erase: false, points: [{ x: 100, y: 200 }] }];
  assert.deepEqual(parseStoryboard(JSON.stringify(value)).scenes[5], value.scenes[5]);
});
test("corrupt drafts cannot restore invalid coordinates or incomplete scenes", () => {
  const value = draft();
  value.scenes[0].strokes = [{ color: "#7254df", size: 4, erase: false, points: [{ x: -10, y: 200 }] }];
  assert.throws(() => parseStoryboard(JSON.stringify(value)));
  assert.throws(() => parseStoryboard(JSON.stringify({ ...draft(), scenes: [] })));
  assert.throws(() => parseStoryboard("not JSON"));
});
test("individual frame counts restore, including incomplete export rows", () => {
  for (const count of [1, 2, 4, 5, 7, 23, 24]) {
    const value = { ...draft(), count, scenes: Array.from({ length: 24 }, () => ({ strokes: [], caption: "" })) };
    assert.equal(parseStoryboard(JSON.stringify(value)).count, count);
  }
  for (const count of [0, -1, 25, 3.5]) assert.throws(() => parseStoryboard(JSON.stringify({ ...draft(), count })));
});
test("existing six-scene drafts expand without losing their contents", () => {
  const value = draft();
  value.scenes[5].caption = "Keep this scene";
  const restored = parseStoryboard(JSON.stringify(value));
  assert.equal(restored.scenes.length, 24);
  assert.equal(restored.scenes[5].caption, "Keep this scene");
  assert.deepEqual(restored.scenes[23], { strokes: [], caption: "" });
});
test("export captions retain newlines and wrap long unbroken words", () => {
  const measure = { measureText: text => ({ width: Array.from(text).length * 10 }) };
  const lines = wrapText(measure, "Hello world\nabcdefghijklmnop", 60);
  assert.deepEqual(lines, ["Hello", "world", "abcdef", "ghijkl", "mnop"]);
  assert.ok(lines.every(line => measure.measureText(line).width <= 60));
});
