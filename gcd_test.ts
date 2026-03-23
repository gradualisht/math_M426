import { assertEquals } from "@std/assert";
import { gcdBruteForce } from "./gcd.ts";

// Triviale Tests
Deno.test("gcdBruteForce(1, 1) = 1", () => {
  assertEquals(gcdBruteForce(1, 1), 1);
});

Deno.test("gcdBruteForce(1, 2) = 1", () => {
  assertEquals(gcdBruteForce(1, 2), 1);
});

// GGT gleich einer der Zahlen
Deno.test("gcdBruteForce(2, 2) = 2", () => {
  assertEquals(gcdBruteForce(2, 2), 2);
});

// Teilerfremd
Deno.test("gcdBruteForce(3, 4) = 1", () => {
  assertEquals(gcdBruteForce(3, 4), 1);
});

// Echter gemeinsamer Teiler
Deno.test("gcdBruteForce(6, 9) = 3", () => {
  assertEquals(gcdBruteForce(6, 9), 3);
});

Deno.test("gcdBruteForce(81, 36) = 9", () => {
  assertEquals(gcdBruteForce(81, 36), 9);
});
