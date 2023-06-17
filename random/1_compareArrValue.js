const array1 = [1, 2, 3];
const array2 = [1, 2, 3];

const areEqual = array1.every((value, index) => value === array2[index]);
console.log(areEqual); // Output: true
// Using the every() method:
// The every() method tests whether all elements in an array pass a given condition. You can compare array values using a callback function that checks the desired comparison condition. The every() method returns true if all elements satisfy the condition; otherwise, it returns false.

const _ = require('lodash');

const areEqualLodash = _.isEqual(array1, array2);
console.log(areEqual); // Output: true
// Using the isEqual function from a library like Lodash:
// Lodash is a popular JavaScript utility library that provides a range of helpful functions. It includes a function called isEqual() that performs a deep comparison between two values, including arrays and objects.

let isEqual = true;
if (array1.length !== array2.length) {
    isEqual = false;
} else {
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            isEqual = false;
            break;
        }
    }
}
console.log(isEqual); // Output: true
// Manually iterating over the arrays:
// You can compare array values by manually iterating over the arrays and comparing the corresponding elements at each index. You can use a for loop, forEach(), or other iteration methods to compare the values.