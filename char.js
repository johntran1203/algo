function charCount(str) {
    let result = {}
    // make object to return at the end
    // loop over string, for each char///''
    for (let i = 0; i < str.length; i++) {
      let char = str[i].toLowerCase()
      // if the char is a key in object, add one to count
      if (result[char] > 0) {
        result[char]++
      } else {
  
        // if the char is not in object, add it and set value to 1
        result[char] = 1
      }
    }
  
    // if char is something else dont do anything
    // return object at the end
    return result
  }
  
  console.log(charCount("hHello world!!"))