import { assertAlmostEquals, assertEquals } from "@std/assert";
import { Circle, Point2D, Rectangle } from "./geometry.ts";

// Kreis: Umfang berechnen
Deno.test("circumference of a circle with radius 5 is roughtly 31.416", () => {
  const circle = new Circle(new Point2D(3, 4), 5);

  const actual = circle.circumference();

  assertAlmostEquals(actual, 31.416, 0.01);
});

// Kreis: Fläche berechnen
Deno.test("area of a circle with radius 5 is roughly 78.54", () => {
  const circle = new Circle(new Point2D(0, 0), 5);

  const actual = circle.area();

  assertAlmostEquals(actual, 78.54, 0.01);
});

// Kreis: Durchmesser berechnen
Deno.test("diameter of a circle with radius 5 is 10", () => {
  const circle = new Circle(new Point2D(0, 0), 5);

  assertEquals(circle.diameter(), 10);
});

// Punkt: Distanz zwischen 2 Punkten
Deno.test("distance between (0,0) and (3,4) is 5", () => {
  const a = new Point2D(0, 0);
  const b = new Point2D(3, 4);

  assertEquals(a.distanceTo(b), 5);
});

// Rechteck: Umfang berechnen
Deno.test("rectangle 3x4 has circumference 22", () => {
  const rect = new Rectangle(new Point2D(0, 0), new Point2D(3, 4));

  const actual = rect.circumference();

  assertEquals(actual, 22);
});

// Rechteck: Fläche berechnen
Deno.test("rectangle 3x4 has area 12", () => {
  const rect = new Rectangle(new Point2D(0, 0), new Point2D(3, 4));

  assertEquals(rect.area(), 12);
});

// Rechteck: Diagonale berechnen
Deno.test("rectangle 3x4 has diagonal 5", () => {
  const rect = new Rectangle(new Point2D(0, 0), new Point2D(3, 4));

  assertEquals(rect.diagonal(), 5);
});
