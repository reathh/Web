function checkDigit(input) {
    input = String(input);
    var thirdDigit = input.split("").reverse().join("").charAt(2);
    if (thirdDigit == 3) {
        console.log('true');
    } else {
        console.log('false');
    }
}

checkDigit(1235);
checkDigit(25368);
checkDigit(123456);