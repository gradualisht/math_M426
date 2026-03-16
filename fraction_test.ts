import { assertAlmostEquals, assertEquals, assertThrows } from "@std/assert";
import { Fraction } from "./fraction.ts";

// toFloat: Bruch in Dezimalzahl umwandeln
Deno.test("fraction of 1/1 is 1.0", () => {
  // Arrange
  const fraction = new Fraction(1, 1);

  // Act
  const float = fraction.toFloat(0.1);

  // Assert
  assertEquals(float, 1.0);
});

Deno.test("fraction of 2/3 is roughly 0.67", () => {
  // Arrange
  const fraction = new Fraction(2, 3);

  // Act
  const float = fraction.toFloat(0.01);

  // Assert
  assertAlmostEquals(float, 0.67);
});

// Addition 2er Brüche (Ergebnis ist ein neuer Bruch, Original bleibt unverändert)
Deno.test("1/3 + 2/6 = 2/3 is roughly 0.67", () => {
  const left = new Fraction(1, 3);
  const right = new Fraction(2, 6);

  const result = left.add(right);

  assertAlmostEquals(result.toFloat(0.01), 0.67);
  // Original bleibt unverändert
  assertAlmostEquals(left.toFloat(0.01), 0.33);
});

// Subtraktion 2er Brüche
Deno.test("3/4 - 1/4 = 1/2 is 0.5", () => {
  const left = new Fraction(3, 4);
  const right = new Fraction(1, 4);

  const result = left.subtract(right);

  assertAlmostEquals(result.toFloat(0.01), 0.5);
  // Original bleibt unverändert
  assertAlmostEquals(left.toFloat(0.01), 0.75);
});

// Multiplikation 2er Brüche
Deno.test("2/3 * 3/4 = 6/12 is 0.5", () => {
  const left = new Fraction(2, 3);
  const right = new Fraction(3, 4);

  const result = left.multiply(right);

  assertAlmostEquals(result.toFloat(0.01), 0.5);
  // Original bleibt unverändert
  assertAlmostEquals(left.toFloat(0.01), 0.67);
});

// Division 2er Brüche
Deno.test("1/2 / 1/4 = 4/2 is 2.0", () => {
  const left = new Fraction(1, 2);
  const right = new Fraction(1, 4);

  const result = left.divide(right);

  assertEquals(result.toFloat(0.1), 2.0);
  // Original bleibt unverändert
  assertEquals(left.toFloat(0.1), 0.5);
});

// toString: Bruch als String darstellen
Deno.test("toString of 3/4 is '3/4'", () => {
  const fraction = new Fraction(3, 4);

  assertEquals(fraction.toString(), "3/4");
});

// parse: String in Bruch umwandeln
Deno.test("parse '3 / 4' yields 3/4", () => {
  const fraction = Fraction.parse("3 / 4");

  assertEquals(fraction.toString(), "3/4");
  assertAlmostEquals(fraction.toFloat(0.01), 0.75);
});

// parse: Fehler bei ungueltigem Format
Deno.test("parse throws on invalid syntax", () => {
  assertThrows(() => {
    Fraction.parse("3");
  }, Error, "illegal syntax");
});

// parse: Fehler bei nicht-numerischen Werten
Deno.test("parse throws on non-numeric values", () => {
  assertThrows(() => {
    Fraction.parse("abc / def");
  }, Error, "non-numeric");
});

// Nenner 0: Fehler beim direkten Erstellen
Deno.test("constructor throws on denominator 0", () => {
  assertThrows(() => {
    new Fraction(3, 0);
  }, Error, "denominator must not be 0");
});

// Nenner 0: Fehler beim Parsen
Deno.test("parse throws on denominator 0", () => {
  assertThrows(() => {
    Fraction.parse("3 / 0");
  }, Error, "denominator must not be 0");
});
