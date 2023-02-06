function temperatureConverter(valNum) {
    const convert = (valNum - 32) / 1.8;
    const fixed = convert.toFixed(2);
    const parse = parseFloat(fixed);
    return parse;
}

const input = temperatureConverter(103);
console.log(input);