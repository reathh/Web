function findMaxSequence(value) {
    var currSequence = [];
    var maxSequence = [];
    currSequence.push(value[0]);
    maxSequence.push(value[0]);
    for (var i = 1; i < value.length; i++) {
        if (value[i] == value[i - 1]) {
            currSequence.push(value[i]);
            if (currSequence.length >= maxSequence.length) {
                maxSequence = currSequence;
            }
        } else {
            currSequence = [value[i]];
    }
}
return maxSequence;
}
console.log(findMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]))
console.log(findMaxSequence(['happy']));
console.log(findMaxSequence([2, 'qwe', 'qwe', 3, 3, '3']));