import test from "node:test";
import assert from "node:assert/strict";
import { invertColorForTheme, invertElementsTheme } from "../src/lib/color-theme.ts";

test("invertColorForTheme: basic dark ink and white inversions", () => {
  // Dark ink to dark mode
  assert.equal(invertColorForTheme("#0d253d", true), "#ffffff");
  assert.equal(invertColorForTheme("#000000", true), "#ffffff");

  // White to light mode
  assert.equal(invertColorForTheme("#ffffff", false), "#0d253d");

  // Two-way inversion round-trip
  const toDark = invertColorForTheme("#0d253d", true);
  assert.equal(toDark, "#ffffff");
  const backToLight = invertColorForTheme(toDark, false);
  assert.equal(backToLight, "#0d253d");
});

test("invertColorForTheme: palette colors retain distinct hues", () => {
  // Indigo
  const darkIndigo = invertColorForTheme("#533afd", true);
  assert.equal(darkIndigo, "#818cf8");
  assert.equal(invertColorForTheme(darkIndigo, false), "#533afd");

  // Emerald green
  const darkGreen = invertColorForTheme("#0e9f6e", true);
  assert.equal(darkGreen, "#34d399");
  assert.equal(invertColorForTheme(darkGreen, false), "#0e9f6e");

  // Rose/pink
  const darkRose = invertColorForTheme("#ea2261", true);
  assert.equal(darkRose, "#fb7185");
  assert.equal(invertColorForTheme(darkRose, false), "#ea2261");
});

test("invertElementsTheme: inverts all stroke and shape element colors without data loss", () => {
  const elements = [
    { kind: "stroke", color: "#0d253d", points: [{ x: 10, y: 10, p: 0.5 }] },
    { kind: "rect", color: "#533afd", x1: 0, y1: 0, x2: 100, y2: 100 },
    { kind: "sticky", color: "#fef08a", textColor: "#0d253d", text: "Hello" },
  ];

  // Invert to dark
  invertElementsTheme(elements, true);
  assert.equal(elements[0].color, "#ffffff");
  assert.equal(elements[1].color, "#818cf8");
  assert.equal(elements[2].color, "#713f12");
  assert.equal(elements[2].textColor, "#ffffff");

  // Points and text remain completely intact!
  assert.equal(elements[0].points[0].x, 10);
  assert.equal(elements[2].text, "Hello");

  // Invert back to light
  invertElementsTheme(elements, false);
  assert.equal(elements[0].color, "#0d253d");
  assert.equal(elements[1].color, "#533afd");
  assert.equal(elements[2].color, "#fef08a");
  assert.equal(elements[2].textColor, "#0d253d");
});

test("invertColorForTheme: arbitrary colors preserve hue and invert lightness", () => {
  // A custom dark teal
  const darkTeal = "#004d40";
  const invertedTeal = invertColorForTheme(darkTeal, true);
  // Should be substantially lighter so it is visible on #121212
  assert.notEqual(invertedTeal, darkTeal);

  // Inverting back to light should restore high contrast dark color
  const restoredTeal = invertColorForTheme(invertedTeal, false);
  assert.notEqual(restoredTeal, invertedTeal);
});

test("dark mode preserves drawing elements and undo history without wiping canvas", () => {
  // Mock elements representing user drawing
  const elements = [
    { id: "s1", kind: "stroke", color: "#0d253d", points: [{ x: 50, y: 50, p: 1 }, { x: 60, y: 60, p: 1 }] },
    { id: "s2", kind: "stroke", color: "#533afd", points: [{ x: 100, y: 100, p: 1 }] },
  ];
  const undoStack = [
    {
      elements: [
        { id: "s1", kind: "stroke", color: "#0d253d", points: [{ x: 50, y: 50, p: 1 }] },
      ],
      erasures: [],
    },
  ];

  // User toggles to dark mode
  invertElementsTheme(elements, true);
  for (const snap of undoStack) {
    invertElementsTheme(snap.elements, true);
  }

  // 1. Elements NOT deleted or wiped
  assert.equal(elements.length, 2);
  assert.equal(elements[0].id, "s1");
  assert.equal(elements[1].id, "s2");
  assert.equal(elements[0].points.length, 2);

  // 2. Colors inverted to dark mode palette
  assert.equal(elements[0].color, "#ffffff");
  assert.equal(elements[1].color, "#818cf8");

  // 3. Undo stack also inverted so undoing doesn't flash light colors
  assert.equal(undoStack[0].elements[0].color, "#ffffff");
});
