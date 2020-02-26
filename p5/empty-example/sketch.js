let positionX;
let speedX;
let positionY;
let speedY;
let sanicImage;
let mappedValue;
let value = 0;

function preload(){
  sanicImage = loadImage("images/tumblr_lvzhs5klqn1r83dego1_400.gif");
}

function setup() {
  // put setup code here
  createCanvas(1400, 600);
  background(161, 225, 255);//sonic background lol
positionX = 20;
speedX = 8;
positionY = 20;
speedY = 6;

noCursor();
mappedValue = 0;

}

function draw() {
//  background(161, 225, 255);
  mappedValue = map(mouseY, 0, 1400, 0, 255);

noStroke();
fill(mappedValue);
ellipse(mouseX, mouseY, 50, 50);

  image(sanicImage, positionX, 0, 0, positionY);
triangle(1, 600, 20, 500, 40, 600);
fill(94, 219, 75);
stroke(56, 255, 179);
strokeWeight(5);
positionX = positionX + speedX;

fill(value);
rect(25, 25, 50, 50);

if (positionX >= 1400 || positionX <= 0) {
  speedX = speedX * -1;
}

function keyPressed(){
  if (value === 0){
    value = 225;
  } else {
    value = 0;
  }
}

positionY = positionY + speedY;
if (positionY >= 1400 || positionY <= 0) {
  speedY = speedY * -1;
}

function mousePressed(){
  ellipse(100, 100, 50, 50);
}
}
