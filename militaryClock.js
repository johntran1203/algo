function timeConversion(s) {
    // Write your code here
  const arr = s.slice(0,8).split(':');
  if(s.slice(8) === 'PM' && Number(arr[0]) === 12 ){
     arr[0] = 12
     return  arr.join(":")
  } else if(s.slice(8) === 'PM'){
    arr[0] = Number(arr[0]) + 12
    return arr.join(':')
  } else  if(s.slice(8) === 'AM' && Number(arr[0]) === 12 ){
     arr[0] = '00'
    console.log(arr[0])
     return  arr.join(":")
  } 
  else {
    return arr.join(":")
  }

}


// Sample Input

// 07:05:45PM
// Sample Output

// 19:05:45

// console.log(timeConversion('12:05:45PM'))
console.log(timeConversion('12:40:22AM'))
console.log(timeConversion('12:05:45AM'))
