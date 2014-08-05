function solve(args) {
    var patt = /<a href="(.*?)"/g;
    while(match=patt.exec(args[0])){
        (match[1]);
    }
}
console.log(solve(['<a href="https://softuni.bg" class="new"></a>']));
//console.log(solve(['<p>This text has no links</p>']));