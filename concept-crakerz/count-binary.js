function countZeros(binary_num) {
    //Write your code here
    //Don't forget to return
    let sum = 0;
    for (let i = 0; i < binary_num.length; i++) {
        let chr = binary_num[i];
        if (chr === '0') {
            sum++;
        }
    }
    console.log(sum);
}

let input = countZeros('10101');
// console.log(countZeros);