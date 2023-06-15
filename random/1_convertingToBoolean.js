console.log(Boolean(0));       // false
console.log(Boolean(1));       // true
console.log(Boolean(''));      // false
console.log(Boolean('hello')); // true
console.log(Boolean(null));    // false
console.log(Boolean(undefined));// false
console.log(Boolean([]));      // true
console.log(Boolean({}));      // true
// Using double negation (!!):
console.log(!!0);       // false
console.log(!!1);       // true
console.log(!!'');      // false
console.log(!!'hello'); // true
console.log(!!null);    // false
console.log(!!undefined);// false
console.log(!![]);      // true
console.log(!!{});      // true
