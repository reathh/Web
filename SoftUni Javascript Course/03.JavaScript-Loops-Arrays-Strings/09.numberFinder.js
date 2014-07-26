function findMostFreqNum(value) {
    var numbers = {};
    for (var i = 0; i < value.length; i++) {
        var n = value[i];
        if (!(n in numbers)) {
            numbers[n] = 1;
        } else {
            numbers[n] = numbers[n] + 1;
        }
    }
    var maxnumber;
    var maxcount = 0;
    output:
    for (el in numbers) {
        if (numbers[el] > maxcount)  {
            maxnumber = el;
            maxcount = numbers[el];
        }
    }
    return maxnumber + " (" + maxcount + " times)";
}

console.log(findMostFreqNum([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]));
console.log(findMostFreqNum([2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1]));
console.log(findMostFreqNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]));