// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// area_or_perimeter(6, 10) --> 32
// area_or_perimeter(3, 3) --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.


const areaOrPerimeter = function(l , w) {
  // if its a square return the area(l is equal to the w)
  //if l and w are not equal, return the perimeter 
  if ( l === w){
    return l * l 
  } else {
    return l * 2 + w * 2
  }
  
};


