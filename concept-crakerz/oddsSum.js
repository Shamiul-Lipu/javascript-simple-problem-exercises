function findLeapYear(arrOfYears) {
    //write your code here
    //don't forget to write return
    let leapYears = []
    for (let i = 0; i < arrOfYears.length; i++) {
        if (arrOfYears[i] % 4 === 0) {
            if (arrOfYears[i] % 100 === 0 && arrOfYears[i] % 400 === 0) {
                leapYears.push(arrOfYears[i]);
            }
            leapYears.push(arrOfYears[i]);
        }
    }
    console.log(leapYears);
}

let arrOfYears = [2023, 2024, 2025, 2028, 2030];
let input = findLeapYear(arrOfYears);
