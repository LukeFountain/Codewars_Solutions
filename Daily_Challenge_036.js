// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.


function fakeBin(x){
    //replace digits below 5 with 0 
    //replace digits above 5 with 1 
    //return
    
    //.split it 
    //map through the array and replace based on the fake binary 
    //join it and return it 
    
    let notBin = x.split('').map( num => num < 5 ? 0 : 1).join('')
    
    return notBin
    
  }