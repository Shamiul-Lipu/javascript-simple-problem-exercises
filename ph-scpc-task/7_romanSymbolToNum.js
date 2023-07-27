// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.
function romanToInteger(roman) {
  const romanSymbols = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };

  let result = 0;
  let i = 0;

  while (i < roman.length) {
    const currentSymbol = roman[i];
    const nextSymbol = roman[i + 1];

    if (nextSymbol && romanSymbols[currentSymbol + nextSymbol]) {
      result += romanSymbols[currentSymbol + nextSymbol];
      i += 2; // Skip two characters (combined symbol) as it has been considered in this step.
    } else {
      result += romanSymbols[currentSymbol];
      i++;
    }
  }

  return result;
}

// Example usage:
console.log(romanToInteger("IX")); // Output: 9
console.log(romanToInteger("XXI")); // Output: 21
console.log(romanToInteger("XL")); // Output: 40
console.log(romanToInteger("CM")); // Output: 900
console.log(romanToInteger("MCMXCIV")); // Output: 1994
