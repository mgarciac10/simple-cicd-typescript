/**
 * Unit tests for divide()
 * Loads the compiled divide.js so window.divide is available (same as in the browser).
 */
declare global {
  interface Window {
    divide: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // Load the built script that attaches divide to window (non-module)
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./divide.js");
});

describe("divide", () => {
  it("divides two positive numbers", () => {
    expect(window.divide(6, 3)).toBe(2);
  });

  it("divides a positive number and a negative number", () => {
    expect(window.divide(6, -3)).toBe(-2);
  });

  it("divides two negative numbers", () => {
    expect(window.divide(-6, -3)).toBe(2);
  });

  it("returns 0 when the dividend is 0", () => {
    expect(window.divide(0, 3)).toBe(0);
  });

  it("throws an error when dividing by zero", () => {
    expect(() => window.divide(6, 0)).toThrowError("Division by zero is not defined.");
  });
});

export {};
