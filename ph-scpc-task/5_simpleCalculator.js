// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculator(numOne, numTwo, operator) {
  switch (operator) {
    case "+":
      return numOne + numTwo;
    case "-":
      return numOne - numTwo;
    case "*":
      return numOne * numTwo;
    case "/":
      return numOne / numTwo;
    default:
      return "Invalid operator";
  }
}

console.log(calculator(2, 2, "+"));
console.log(calculator(2, 2, "-"));
console.log(calculator(2, 2, "*"));
console.log(calculator(2, 2, "/"));
