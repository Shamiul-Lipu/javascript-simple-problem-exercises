const numArray = [0, 3, 5, 3, 6, 0, 9, 0, -5, 4, -8];

allPositiveNum(numArray);
function allPositiveNum(numArray) {
    let positiveArray = [];
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] < 0) {
            break;
        }
        else if (numArray[i] === 0) {
            continue;
        }
        else {
            positiveArray.push(numArray[i]);
        }
    }
    console.log(positiveArray);
}