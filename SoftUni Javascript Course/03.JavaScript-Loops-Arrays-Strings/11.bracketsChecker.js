function checkBrackets(value){
    var isCorrect = true;
    var leftBrackets = 0;
    var rightBrackets = 0;
    var brackets = value.split(/[^()]/).filter(Boolean);
    for (var i = 0; i < brackets.length; i++) {
        var bracket = brackets[i];
        if (bracket == '(') {
            leftBrackets++;
        } else {
            rightBrackets++;
        }
    }
    if (brackets[0] == ")") {
        isCorrect = false;
    }
    if (leftBrackets != rightBrackets) {
        isCorrect = false;
    }
    if (isCorrect) {
        return "correct";
    } else {
        return "incorrect";
    }
}
console.log(checkBrackets('( ( a + b ) / 5 – d )'));
console.log(checkBrackets(') ( a + b ) )'));
console.log(checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )'));