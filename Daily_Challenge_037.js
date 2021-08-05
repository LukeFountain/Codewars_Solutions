// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
  
    //write a loop that decrements from n to 1
    //return the decrements 
      
      let decNum = []
      for (let i = n; i > 0; i--){
        decNum.push(i)
      }
       return(decNum)
        
      
    };