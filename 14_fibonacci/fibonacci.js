const fibonacci = function(i) {
    if (i < 0) {return "OOPS";}
    else {
    let fib = [0, 1, 1];
    for (c = 1; c < 26 ; c++)
    {
        let a = fib[c]+fib[c+1];
        fib.push(a);
    }
    return fib[i];
    }
    
};

// Do not edit below this line
module.exports = fibonacci;
