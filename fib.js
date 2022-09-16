// loop o(n)
// nested loops o(n^2)
// input size reduce by half-o(logn)



function fib(n) {
    const fib = [0,1]
    for(let i=2; i<n; i++){
        fib[i] = fib[i-1] + fib[i-2]
    }
    return fib
}

// console.log(fib(2))
// console.log(fib(3))
// console.log(fib(7))

function fact (n) {
    let total = 1;
    if(n===0) {
        return total
    } else {
        for(let i=1; i<=n; i++) {
            total = total*i
        }
    }
    return total
}

console.log(fact(0))
console.log(fact(1))
console.log(fact(5))