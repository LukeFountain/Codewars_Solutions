// This is a spin off of my first kata. You are given a list of character sequences as a comma separated string. Write a function which returns another string containing all the character sequences except the first and the last ones, separated by spaces. If the input string is empty, or the removal of the first and last items would cause the string to be empty, return a null value.

function array(arr) {
  //split the string into an array, remove the first and last elements using .shift() and .pop()
  //use an if loop to see if the arr us empty if so
  //converting the strong into an array
  let newArr = arr.split(",");
  //create a condition that checks if the array length is greater than 3
  if (newArr.length >= 3) {
    //remove the first element in the array
    newArr.shift();
    //remove the last element in the array
    newArr.pop();
    //convert the array to a string with spaces
    return newArr.join(" ");
    //return the string
  } else {
    //or return null
    return null;
  }
}
