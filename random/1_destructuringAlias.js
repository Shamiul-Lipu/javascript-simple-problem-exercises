// let arr1 = [1, 2, 3];
// let arr2 = arr1; // Creating an alias for arr1

// arr2.push(4); // Modifying arr2

// console.log(arr1); // Output: [1, 2, 3, 4]
// console.log(arr2); // Output: [1, 2, 3, 4]

// let obj1 = { name: 'John', age: 25 };
// let obj2 = obj1; // Creating an alias for obj1

// obj2.age = 30; // Modifying obj2

// console.log(obj1); // Output: { name: 'John', age: 30 }
// console.log(obj2); // Output: { name: 'John', age: 30 }
const language = {
    name: "JavaScript",
    founded: 1995,
    founder: "Brendan Eich"
}
const { name: languageName, founder: founderName } = language;

console.log(languageName, founderName);
// Array destructuring with aliasing
let arr = [1, 2, 3];
let [a, b, c] = arr;
console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3

// Object destructuring with aliasing
let obj = { name: 'John', age: 25 };
let { name: personName, age: personAge } = obj;
console.log(personName); // Output: 'John'
console.log(personAge); // Output: 25