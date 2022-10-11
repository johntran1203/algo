function validAnagram(first, second){
    if(first.length !== second.length) {
      return false
    }
      const lookup = {}
      for (let i=0; i< first.length; i++) {
        let letter = first[i]
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
        console.log(lookup)
      }
     for (let i=0; i< second.length; i++) {
       let letter = second[i]
       // can't find letter or letter is zzdro then it's not an anagram
        if(!lookup[letter]) {
        return false
      } else {
        lookup[letter] -=1
      }
     }
      return true
    }
    
    // console.log(validAnagram('abca', 'abca'))
    
    var containsDuplicate = function(nums) {
      const lookup = {}
      for(let i=0; i<nums.length; i++) {
        let number = nums[i]
        lookup[number] ? lookup[number] +=1: lookup[number] =1
       // console.log(lookup)
      }
      let result = Object.values(lookup)
      let total =0 
      for(let i=0; i< result.length; i++) {
          let letter = result[i]
        if(letter >1) {
          total += letter
        }
      }
     return total >1 ? true : false 
    }
    console.log(typeof(containsDuplicate([2,14,18,22,22])))
    console.log(containsDuplicate([1,2,3,4]))
    console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))
    