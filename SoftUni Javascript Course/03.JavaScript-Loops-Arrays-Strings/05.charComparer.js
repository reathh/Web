function compareCharacters(value) {
    var equal = true;
    if (value[0].length != value[1].length) {
        equal = false;
    } else {
        for (var i = 0; i < value[0].length; i++) {
            var letter1 = value[0][i];
            var letter2 = value[1][i];
            if (letter1 != letter2)  {
                equal = false;
            }
        }
    }
    if (equal) {
        return "Equal";
    } else {
        return "Not Equal";
    }
}
console.log(compareCharacters([['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'],
    ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q']]));
console.log(compareCharacters([['3', '5', 'g', 'd'],
    ['5', '3', 'g', 'd']]))
console.log(compareCharacters([['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'],
    ['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r']]))