// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers){
    //write a function that squares each number passed into it, 
    //and then sums all the results together 
    
    return numbers.reduce((accumulator, currentValue ) => {
      accumulator += currentValue **2 
      return accumulator
    },0)
    
    
    
  }