function secondLargest(numbers) {
    //Write your code here
    //Don't forget to return
    numbers.sort(function (a, b) { return b - a });
    console.log(numbers[1]);
}

let numbers = [10, 33, 5, 99, 6];
let input = secondLargest(numbers);
// console.log(numbers.length);