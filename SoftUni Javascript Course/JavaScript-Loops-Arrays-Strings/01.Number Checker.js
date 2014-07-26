function printNumbers(n) {
    var output = [];
    for (var number = 1; number <= n; number++) {
        if (number%4 != 0 && number%5 != 0) {
            output.push(number);
        }
    }
    if (output.length > 0) {
        return output.join(", ");
    } else {
        return "no";
    }
}
console.log(printNumbers(20));
console.log(printNumbers(-5));
console.log(printNumbers(13));
