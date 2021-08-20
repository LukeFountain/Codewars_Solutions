// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x){
    //iterate over the array and sum the numbers and string values, 
    //return the sum as a number 
      
      return x.reduce((accu, currVal) => accu + parseInt(currVal),0)
      
    }