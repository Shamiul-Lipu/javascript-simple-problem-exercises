function temperatureConverter(valNum) {
    let c = parseFloat(((valNum - 32) / 1.8).toFixed(2));
    console.log(c);
}

let input = temperatureConverter(50);