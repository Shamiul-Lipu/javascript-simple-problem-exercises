function findingSmallest(numbers) {
    //Write your code here
    //Don't forget to return
    let min = numbers[0];
    console.log(numbers[0]);
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < min) {//for the largest change the condition
            min = numbers[i];
        }
    }
    console.log(min);
    console.log(numbers[0]);
}

// function findingSmallest(numbers) {
//     //Write your code here
//     //Don't forget to return
//     numbers.sort(function (a, b) { return a - b })
//     return numbers[0];
// }


let numbers = [10, 33, 5, 99, 6];
let input = findingSmallest(numbers);