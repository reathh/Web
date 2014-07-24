function roundFloor(input) {
    var round = Math.floor(input);
    var floor = Math.round(input);
    return input + " rounded is: " + round + " ; " + "floored is: " + floor;
}
console.log(roundFloor(22.7));
console.log(roundFloor(12.3));
console.log(roundFloor(58.7));