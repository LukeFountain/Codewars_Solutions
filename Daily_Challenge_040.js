// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x){
    //multyply each element in the array buy the next number
    //return the sum 
      const reducer = (accu, currVal) => accu*currVal;
      
      return x.reduce(reducer)
    
    }