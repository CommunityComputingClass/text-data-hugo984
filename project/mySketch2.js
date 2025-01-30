let myMessage = "my bikes brake \n   fell apart"
xLocation = 30;
let myFont; 

function preload(){
  myFont = loadFont("BlackBallTattooPersonalUse.ttf")
}

function setup() {
  createCanvas(400, 400);
  textFont(myFont)

}

function draw() {
  background(50);
  stroke("yellow");
  textSize(30)
  text(myMessage, xLocation, 200);
  xLocation = xLocation+0.1
}