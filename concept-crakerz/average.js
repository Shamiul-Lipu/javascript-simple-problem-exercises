function average(arrOfMarks) {
    //write your code here
    // don't forget to write return
    let sumOfMarks = 0;

    for (let i = 0; i < arrOfMarks.length; i++) {
        sumOfMarks += arrOfMarks[i];
    }
    let averageResult = parseFloat((sumOfMarks / arrOfMarks.length).toFixed(2));
    console.log(averageResult);
    return averageResult;

}
let value1 = [75.25, 65, 80, 35.45, 99.50];
let value2 = [100, 100, 100, 100, 100];

let input = average(value1);
