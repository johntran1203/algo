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
// console.log(fib(3))q
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

// console.log(fact(0))
// console.log(fact(1))
// console.log(fact(5))

function prime(n) {
    if (n < 2) {
        return false
    } for(let i=2; i<n; i++) {
        if(n % i === 0) {
            return false
        }
    }
    return true
} 

// console.log(prime(2))
// console.log(prime(23))
// console.log(prime(4))

function powerOfTwo(n) {
    if (n<2) {
        return false
    }
    while( n%2 !==0) {
        return false
    } n  = n/2

    return true
}

// console.log(powerOfTwo(44))

function fibonacci(n){
    const fib = [0,1]
    for(let i=2; i<n; i++) {
        fib[i] = fib[i-1] +fib[i-2]
    }
    return fib
}

console.log(fibonacci(7))