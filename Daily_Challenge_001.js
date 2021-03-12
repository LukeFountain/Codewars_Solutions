// Color Ghost
// Create a class Ghost

// Ghost objects are instantiated without any arguments.

// Ghost objects are given a random color attribute of white" or "yellow" or "purple" or "red" when instantiated

// ghost = new Ghost();
// ghost.color //=> "white" or "yellow" or "purple" or "red"

class Ghost{
    constructor(){
    this.color = Math.random() < .25 ? 'white' 
    : Math.random() < .50 ? 'yellow' 
    : Math.random() < .75 ? 'purple'
    :'red'   
  }}

  