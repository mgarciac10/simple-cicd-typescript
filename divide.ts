/**
 * Returns the division of two numbers. if the divisor is zero, it throws an error.
 */
function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Division by zero is not defined.");
  }
    return a / b;
}

// Expose to window so the HTML script can call it
(window as unknown as { divide: typeof divide }).divide = divide;