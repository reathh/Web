function reverseString(value) {
    var length = value.length
    value = value.split("");
    var output = "";
    for (var i = 0; i < length; i++) {
        output += value.pop();
        //console.log(output);
    }
    return output;
}
console.log(reverseString('sample'));
console.log(reverseString('softUni'));
console.log(reverseString('java script'));