// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
    // console.log(str[i]);
  }
  return reversed;
}

// input test cases

// reverseString("hello");
// reverseString("world");
// const input = reverseString("hello world");
// console.log(input);
