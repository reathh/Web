function findPalindromes(value) {
    var words = value.toLowerCase().split(/[ .,]/).filter(Boolean);
    var palindromes = [];
    for (var i = 0; i < words.length; i++) {
        var curr = words[i];
        if (curr[0] == curr[curr.length-1]) {
            palindromes.push(curr);
        }
    }
    return palindromes.join(", ");
}
console.log(findPalindromes('There is a man, his name was Bob.'));