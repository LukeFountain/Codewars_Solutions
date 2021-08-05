// Introduction
// The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

// Task :
// Given a year, return the century it is in.

// Input , Output Examples :
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// Hope you enjoy it .. Awaiting for Best Practice Codes

// Enjoy Learning !!!

function century(year) {
    //return the century for the inputed year 
    //1705 --> 18
    //1900 --> 19
    //1601 --> 17
    //2000 --> 20
    
    // divide the year by 100 
    
    return Math.ceil(year / 100)
  }

 