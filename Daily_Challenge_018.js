// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

// For example:

// monkeyCount(10) // --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// monkeyCount(1) // --> [1]


function monkeyCount(n) {
    //take the input
      //for loop incrementing up to the input number 
      //return as an array with each step 
      let numStep = [] 
      
        //local scope increment starts at 0, while i is less than'n'. step up by 1
      for (let i = 0; i < n; i++) {
        numStep.push(i+1)
      }
    
      return(numStep)
    }
    
    