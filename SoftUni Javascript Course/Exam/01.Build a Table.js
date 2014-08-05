function solve(args) {
    var output = '<table>\n';
    output += '<tr><th>Num</th><th>Square</th><th>Fib</th></tr>\n';

    for (var i = parseInt(args[0]); i <= parseInt(args[1]); i++) {
        output += '<tr><td>' + i + '</td><td>' + i*i + '</td><td>' + isFibonacci(i) + '</td></tr>\n';
    }

    output += '</table>';
    return output;

    function isFibonacci(n) {
        var fnumbers = [];
        var a = 0;
        var b = 1;
        // In N steps compute Fibonacci sequence iteratively.
        for (var i = 0; a <= n; i++)
        {
            var temp = a;
            a = b;
            b = temp + b;
            fnumbers.push(a);
        }
        if (fnumbers.indexOf(n) > -1) {
            return 'yes';
        } else {
            return 'no';
        }
    }
}
console.log(solve(['2', '6']));