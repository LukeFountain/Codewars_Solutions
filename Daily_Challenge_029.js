// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

function getSize(width, height, depth){
    //to find the volume of a cubiod you multipley the width, by the height, by the depth
   return[((width * height + width * depth + height * depth) * 2),(width * height * depth )]
  }