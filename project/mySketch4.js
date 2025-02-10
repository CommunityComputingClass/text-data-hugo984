let myMessage = "press left arrow if you pour milk first and\n     right arrow if you pour cereal first"
let yLocation = 75
let xLocation = 205
let xLocation2 = 195
let yLocation2 = 75
let shapes = [circles, squares, triangles];

function setup() {
  createCanvas(405, 400);
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
    let data2 = shapes[int(random(0, shapes.length))];
    data2(xLocation2,yLocation2)

    if(xLocation2 === 5){
      yLocation2 = yLocation2+10
      xLocation2 = 205
    }
    xLocation2 = xLocation2 - 10
  }  

  if(keyCode === RIGHT_ARROW){
    fill("green")
    let data = shapes[int(random(0, shapes.length))];
    data(xLocation,yLocation)
  if (xLocation === 395) {
    yLocation = yLocation+10 
    xLocation = 195
  }
    xLocation = xLocation + 10
  }  
}


function circles (xLocation, yLocation){
 ellipse(xLocation + 5,yLocation + 5, 10, 10)
}
function squares (xLocation, yLocation){
  square(xLocation, yLocation, 9.5)
}
function triangles (xLocation,yLocation){
  triangle(xLocation + 5, yLocation, xLocation + 10, yLocation + 5 * sqrt(3), xLocation, yLocation + 5 * sqrt(3))
}
