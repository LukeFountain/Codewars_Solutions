// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num){
  
    // for each number in the input concat a string for each increment 
    // so if num = 2, log '1 sheep...2 sheep...'
    // return the string
    
    let sheepString = ''
    
    for (let i = 1; i <= num; i++){
    sheepString += `${i} sheep...`
      
      
    }
    return sheepString
  }