function findMostFreqWord(value) {
    var allWords = value.toLowerCase().split(/[^a-zA-Z]/).filter(Boolean);
    var words = {};
    for (var i = 0; i < allWords.length; i++) {
        var curr = allWords[i];
        if (!(curr in words)) {
            words[curr] = 1;
        } else {
            words[curr] = words[curr] + 1;
        }
    }
    //console.log(words);
    var max = 0;
    var mostFreqWords = [];
    for (word in words) {
        if (words[word] > max) {
            max = words[word];
        }
    }
    for (word in words) {
        if (words[word] == max) {
            mostFreqWords.push(word + " -> " + words[word] + " times");
        }
    }
    return mostFreqWords.sort().join("\n");
}
console.log(findMostFreqWord('in the middle of the night'));
console.log("---");
console.log(findMostFreqWord('Welcome to SoftUni. Welcome to Java. Welcome everyone.'));
console.log("---");
console.log(findMostFreqWord('Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.'));
console.log("---");