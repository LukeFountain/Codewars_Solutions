// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

// If the input array is empty or null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].



function countPositivesSumNegatives(input) {
    if(input == null || input.length == 0){
      return []
    }
    //split the arr into positive numbers and negative numbers, 
    //sum the two arrays
    //join them using an array literal 
    let positive = []
    let negative = []
    
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    
    input.forEach(function(item) {
     if (item >= 1){
       positive.push(item)
      } else {
      negative.push(item)}     
    })
  return([positive.length,((negative.reduce(reducer,0)))])
    
  }
  
  
  



  
  
  
  