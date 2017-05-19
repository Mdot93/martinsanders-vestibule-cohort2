/*
Setting Color.
Created By Dawn C.Hayes March 2017
modfied by Martin Sanders.
*/
function setup() {
createCanvas(400,400);  
}

// a triangle is draw at an x position of 253 and y positon of 175 width of 50 and height of 50.
function draw() {
  background ('green');
  stroke(255,255,0); // stroke () sets color of the outline
  strokeWeight(4);  // strokeWeight() sets the thickness of the outline
  fill(255,98,191); // fill() sets the color of the object
  triangle(30, 75, 58, 20, 86, 75);
}

