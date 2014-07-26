function findMinAndMaxValue(value) {
    value.sort(function (a,b) { return a-b });
    return "Min -> " + value[0] + "\n Max -> " + value[value.length - 1];
}
console.log(findMinAndMaxValue([1, 2, 1, 15, 20, 5, 7, 31]));
console.log(findMinAndMaxValue([2, 2, 2, 2, 2]));
console.log(findMinAndMaxValue([500, 1, -23, 0, -300, 28, 35, 12]));