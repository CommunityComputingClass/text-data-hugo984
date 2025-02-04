let myMessage = "press left arrow if you pour milk first and\n     right arrow if you pour cereal first"
let yLocation = 75
let xLocation = 205
let xLocation2 = 195
let yLocation2 = 75

function setup() {
  createCanvas(400, 400);
  background(50);
  noStroke();
  fill(255);
  text(myMessage, 100, 50);
}
function draw() { 
}

function keyPressed(){
  if(keyCode === LEFT_ARROW){
    fill("pink")
    ellipse(xLocation2,yLocation2,10,10)

    if(xLocation2 === 5){
      yLocation2 = yLocation2+10
      xLocation2 = 205
    }
    xLocation2 = xLocation2 - 10
  }  

  if(keyCode === RIGHT_ARROW){
    fill("green")
    ellipse(xLocation,yLocation,10,10)
  if (xLocation === 395) {
    yLocation = yLocation+10 
    xLocation = 195
  }
    xLocation = xLocation + 10
  }  
   
}