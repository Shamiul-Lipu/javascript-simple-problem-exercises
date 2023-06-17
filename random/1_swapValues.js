// swaping values "swaping first and last index"
// it can be done using destructuring , temporary
let array = [2, 3, 4, 7, 9]

let temp = array[0];
array[0] = array[4];
array[4] = temp;
// array[0] = array[array.length - 1];
// array[array.length - 1] = temp;

let arr = [1, 2, 3, 4, 9];
[arr[0], arr[4]] = [arr[4], arr[0]];

console.log(array, arr);