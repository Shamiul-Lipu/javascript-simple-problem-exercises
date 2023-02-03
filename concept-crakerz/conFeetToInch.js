const values = [6, 7, 5.2, 5.4, 8];

feetToInch(values);

// inches = feet × 12
function feetToInch(values) {
    let result = [];
    for (let i = 0; i < values.length; i++) {
        let value = parseFloat((values[i] * 12).toFixed(2));
        result.push(value);
    }
    console.log(result);
}
