export function gcdBruteForce(a: number, b: number): number {
  for (let i = Math.min(a, b); i >= 1; i--) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
  }
  return 1;
}
