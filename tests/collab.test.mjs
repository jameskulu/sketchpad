import test from "node:test";
import assert from "node:assert/strict";
import { generateRandomName, getRandomColor, generateRoomId, CollabManager } from "../src/lib/collab.ts";

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

test("CollabManager initializes with disconnected status and valid local user", () => {
  const manager = new CollabManager();
  assert.equal(manager.getStatus(), "disconnected");
  assert.equal(manager.getRoomId(), null);

  const localUser = manager.getLocalUser();
  assert.ok(localUser.id.startsWith("p_"));
  assert.ok(localUser.name.length > 0);
  assert.ok(localUser.color.startsWith("#"));

  const peers = manager.getPeers();
  assert.equal(peers.length, 1);
  assert.equal(peers[0].id, localUser.id);
  assert.equal(peers[0].isSelf, true);
});

test("CollabManager handles incoming packets and triggers events correctly", () => {
  let updatedElements = null;
  let cleared = false;
  let addedElement = null;

  const manager = new CollabManager({
    onElementsUpdate: (elements, erasures) => {
      updatedElements = elements;
    },
    onElementAdd: (el) => {
      addedElement = el;
    },
    onClear: () => {
      cleared = true;
    },
  });

  const fakeElement = { id: "e1", kind: "stroke", points: [], color: "#533afd", width: 4 };

  // Simulate remote element add
  manager["handleIncomingPacket"]({
    msgId: "m1",
    senderId: "remote-user-1",
    type: "ELEMENT_ADD",
    element: fakeElement,
  });
  assert.deepEqual(addedElement, fakeElement);

  // Simulate remote elements update
  manager["handleIncomingPacket"]({
    msgId: "m2",
    senderId: "remote-user-1",
    type: "ELEMENTS_UPDATE",
    elements: [fakeElement],
    erasures: [],
  });
  assert.deepEqual(updatedElements, [fakeElement]);

  // Simulate remote clear
  manager["handleIncomingPacket"]({
    msgId: "m3",
    senderId: "remote-user-1",
    type: "CLEAR",
  });
  assert.equal(cleared, true);
});
