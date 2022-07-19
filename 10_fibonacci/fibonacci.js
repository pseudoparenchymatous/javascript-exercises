const fibonacci = function(num) {
    let fib = [1, 1];
    for (let i = 3; i <= num; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib[num - 1];

};

// Do not edit below this line
module.exports = fibonacci;
