function findMaxSequence(value) {
    var currSequence = [value[0]];
    var maxSequence = [];
    for (var i = 1; i < value.length; i++) {
        if (value[i] > value[i-1]) {
            currSequence.push(value[i]);
            if (currSequence.length > maxSequence.length) {
                maxSequence = currSequence;
            }
        } else {
            currSequence = [];
            currSequence.push(value[i]);
        }
    }
    if (maxSequence.length> 0) {
        return maxSequence;
    } else {
        return "no";
    }
}
console.log(findMaxSequence([3, 2, 3, 4, 2, 2, 4]));
console.log(findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]));
console.log(findMaxSequence([3, 2, 1]));
