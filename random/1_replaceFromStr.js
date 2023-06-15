let str = "Hello world, hello universe";
let replacedStr = str.replace(/hello/gi, "hi");

console.log(replacedStr); // "Hi world, hi universe" gi
// In the example above, the regular expression /hello/gi is used to match the word "hello" in a case-insensitive manner (i flag) and globally (g flag). It replaces all occurrences of "hello" with "hi" in the string.

let strSp = "Hello world, hello universe";
let words = str.split(" ");
let replacedWords = words.map(word => word === "hello" ? "hi" : word);
let replacedStr2 = replacedWords.join(" ");

console.log(replacedStr2); // "Hello world, hi universe"
// In this example, the string is split into an array of words using the space character as the separator. Then, the map() method is used to iterate over each word and replace "hello" with "hi" if it matches. Finally, the modified array is joined back into a string using the space character as the separator.