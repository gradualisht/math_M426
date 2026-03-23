import { roundTo } from "./utils.ts";
import { gcdBruteForce } from "./gcd.ts";

export class Fraction {
  constructor(
    private numerator: number,
    private denominator: number,
  ) {
    // Nenner darf nicht 0 sein (Division durch 0 ist undefiniert)
    if (denominator === 0) {
      throw new Error("denominator must not be 0");
    }
  }

  // Gibt einen neuen Bruch zurück, ohne das Original zu verändern
  public add(other: Fraction): Fraction {
    const newNumerator =
      this.numerator * other.denominator + other.numerator * this.denominator;
    const newDenominator = this.denominator * other.denominator;
    return new Fraction(newNumerator, newDenominator);
  }

  // Gibt einen neuen Bruch zurück, ohne das Original zu verändern
  public subtract(other: Fraction): Fraction {
    const newNumerator =
      this.numerator * other.denominator - other.numerator * this.denominator;
    const newDenominator = this.denominator * other.denominator;
    return new Fraction(newNumerator, newDenominator);
  }

  // Gibt einen neuen Bruch zurück, ohne das Original zu verändern
  public multiply(other: Fraction): Fraction {
    const newNumerator = this.numerator * other.numerator;
    const newDenominator = this.denominator * other.denominator;
    return new Fraction(newNumerator, newDenominator);
  }

  // Gibt einen neuen Bruch zurück, ohne das Original zu verändern
  public divide(other: Fraction): Fraction {
    const newNumerator = this.numerator * other.denominator;
    const newDenominator = this.denominator * other.numerator;
    return new Fraction(newNumerator, newDenominator);
  }

  // Gibt einen gekürzten Bruch zurück
  public cancel(): Fraction {
    const gcd = gcdBruteForce(this.numerator, this.denominator);
    return new Fraction(this.numerator / gcd, this.denominator / gcd);
  }

  public toFloat(precision: number): number {
    return roundTo(this.numerator / this.denominator, precision);
  }

  public toString(): string {
    return `${this.numerator}/${this.denominator}`;
  }

  public static parse(expression: string): Fraction {
    const parts = expression.split("/");
    if (parts.length != 2) {
      throw new Error(`illegal syntax: "[numerator]/[denominator]" required`);
    }
    const numerator = Number.parseInt(parts[0].trim());
    const denominator = Number.parseFloat(parts[1].trim());
    if (Number.isNaN(numerator) || Number.isNaN(denominator)) {
      throw new Error(`non-numeric numerator/denominator`);
    }
    return new Fraction(numerator, denominator);
  }
}
