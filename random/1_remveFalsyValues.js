// romove falsy values from any array
// Note: There are only six falsy values in JavaScript: undefined , null , NaN , 0 , "", and false.
let arr = ['apple', false, 'orange', NaN, 'mango', 0, 'chilli', undefined, 'avocados', null, 'jackfruits']

let elemenetFalsy = arr.filter(Boolean);
console.log(elemenetFalsy);

// Javascript has first-class functions. This is why you can directly pass the Boolean constructor function to filter.
// arr.filter(Boolean) filters all the falsy values present in the array and returns a new array.