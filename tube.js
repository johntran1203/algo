function sumAll(arr) {
    let total =0;
    let min, max;
    if(arr[0]> arr[1]){
        max = arr[0]
        min = arr[1]
        
    } 
    else {
        max = arr[1]
        min = arr[0]
    }
    for(let i=min; i<= max; i++){
        
        total += i
    }
    console.log(total, min, max)
}

console.log(sumAll([4,1]))