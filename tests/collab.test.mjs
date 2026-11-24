import test from "node:test";
import assert from "node:assert/strict";
import { generateRandomName, getRandomColor, generateRoomId } from "../src/lib/collab.ts";

test("generateRandomName generates valid adjective and mascot format", () => {
  for (let i = 0; i < 20; i++) {
    const name = generateRandomName();
    assert.match(name, /^[A-Z][a-z]+ [A-Z][a-z]+$/);
    const parts = name.split(" ");
    assert.equal(parts.length, 2);
    assert.ok(parts[0].length >= 3);
    assert.ok(parts[1].length >= 3);
  }
});

test("getRandomColor returns valid hex color code from palette", () => {
  for (let i = 0; i < 20; i++) {
    const color = getRandomColor();
    assert.match(color, /^#[0-9a-fA-F]{6}$/);
  }
});

test("generateRoomId produces non-empty, safe url slug", () => {
  const r1 = generateRoomId();
  const r2 = generateRoomId();
  assert.ok(r1.startsWith("room-"));
  assert.ok(r2.startsWith("room-"));
  assert.notEqual(r1, r2);
  assert.match(r1, /^room-[a-z0-9]+$/);
});
