function solve(args) {
    var original = args.concat();
    var output = args;
    for (var row = 0; row < original.length - 1 ; row++) {
        for (var col = 1; col < original[row].length; col++) {
            var currLetter = original[row][col];
            var pLetterNextLine = original[row + 1][col - 1];
            var nLetterNextLine = original[row + 1][col+1];
            var currLetterNextLine = original[row + 1][col];
            if (currLetter == pLetterNextLine && pLetterNextLine == nLetterNextLine && nLetterNextLine == currLetterNextLine) {
                output[row] = output[row].split("");
                output[row][col] = '*';
                output[row] = output[row].join("");

                output[row+1] = output[row+1].split("");
                output[row + 1][col - 1] = '*';
                output[row + 1][col+1] = '*';
                output[row + 1][col] = '*';
                output[row+1] = output[row+1].join("");
            }
        }
    }
    return output.join("\n");

}
console.log(solve(
    ['abcdexgh',
    'bbbdxxxh',
    'abcxxxxx']));
//console.log(solve(['aa',
//'aaa',
//'aaaa',
//R'aaaaa']));