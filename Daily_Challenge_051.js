// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// doubleChar("String") ==> "SSttrriinngg"

// doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"

// doubleChar("1234!_ ") ==> "11223344!!__  "
// Good Luck!

function doubleChar(str) {
    //convert the str to an arr
    //map through the arr and duplicate each character 
    //join the arr into an str
    let strArr = str.split('').map(x => x + x).join('')
    
    return strArr
  
  }
  

