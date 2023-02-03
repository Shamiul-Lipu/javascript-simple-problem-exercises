function findMax(arr) {
    //write your code here
    //don't forget to write return
    // console.log(Math.max(...arr)); // maximum function for array in javascript
    let maxi = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxi) {
            maxi = arr[i];
        }
    }
    // console.log(maxi);
}
let arr = [55, 10, 95, 500]
let input = findMax(arr);

// let a = 3;
// let b = 7;
// let c = 34;
// console.log(Math.max(a, b, c));
