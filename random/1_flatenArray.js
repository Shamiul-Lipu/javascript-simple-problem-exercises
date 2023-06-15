// hot to flatten a multi-dimensional array

let levelOne = ['l1', ['ml1', 'ml1'], 'l1', ['ml1', 'ml1']];

console.log(levelOne.flat());


// Infinity prarameter to array.flat function to make all level array to single arraay
let levelTwo = ['l2', ['ml1', ['ml2']], 'l2', [['ml2', ['ml3']], 'ml1']];
console.log(levelTwo.flat(Infinity));


