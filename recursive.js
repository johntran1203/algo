function recursiveFib(n) {
    if(n < 2) {
        return n
    }
    return recursiveFib(n-1) + recursiveFib(n-2)
}

// console.log(recursiveFib(0))
// console.log(recursiveFib(1))
// console.log(recursiveFib(6))

function recusriveFact(n) {
    if (n === 0) {
        return 1
    }
    return n* recusriveFact(n-1)

}

// console.log(recusriveFact(0))
// console.log(recusriveFact(1))
// console.log(recusriveFact(5))

// linear search
// binary search 


// function linearSearch(arr, target) {
//     for(let i =0; i< arr.length; i++) {
//         if(arr[i] === target) {
//             return i
//         }
//     }
//     return -1
// }

console.log(linearSearch([-5,2,10,4,6],10))
console.log(linearSearch([-5,2,10,4,6],6))
console.log(linearSearch([-5,2,10,4,6],20))
