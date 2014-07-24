function kwToHp(kw) {
    var hp = kw/0.745699872;
    return Math.round(hp * 100) / 100;
}
console.log(kwToHp(75));
console.log(kwToHp(150));
console.log(kwToHp(1000));