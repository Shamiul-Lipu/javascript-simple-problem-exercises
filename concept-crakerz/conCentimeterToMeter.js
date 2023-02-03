const values = [6, 7, 5.2, 5.4, 8];

centimeterToMeter(values);

// meters = centimeters ÷ 100
function centimeterToMeter(values) {
    let result = [];
    for (let i = 0; i < values.length; i++) {
        let value = parseFloat((values[i] / 100).toFixed(2));
        result.push(value);
    }
    console.log(result);
}