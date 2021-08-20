// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

// Example
// divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]


function divisibleBy(numbers, divisor){

    //iterate through the array and return the numbers that are divisible by the divisor
      
    return numbers.filter(numbers => numbers % divisor === 0)
               
      
    }