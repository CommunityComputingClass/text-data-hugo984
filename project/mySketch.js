let myQuestion = "What is your favorite movie?"
let contents = "";
let all_the_answers = []

let saveAnswer_button; 
let showAnswers_button;
let textBox; 
let myFont;

function preload(){
  myFont = loadFont("Stagera.otf")
}

function setup() {
  createCanvas(500, 400);
  saveAnswer_button = createButton("save your answer");
  saveAnswer_button.position(275,125)
  saveAnswer_button.mousePressed(saveText)
  saveAnswer_button.style("background-color", "rgba(185, 132, 146, 0.42)");
  saveAnswer_button.style("padding", "10px");
  saveAnswer_button.style("color", "white");
  saveAnswer_button.style("border-radius", "5px");
  
  showAnswer_button= createButton("see the answers");
  showAnswer_button.position(285,300)
  showAnswer_button.mousePressed(showAnswers);
  showAnswer_button.style("background-color", "rgba(185, 132, 146, 0.42)"); // Green
  showAnswer_button.style("color", "white");
  showAnswer_button.style("border-radius", "5px");
  
  textBox = createInput("type your answer here")
  textBox.size(200,40)
  textBox.position(50,100)
  textBox.input(storeText)
  
  textFont(myFont)
  background("pink");
  fill(255);
  textSize(18);
  stroke(10)
  text(myQuestion,50,50) 
}


function draw() {  
}


function saveText(){
   all_the_answers.push(contents);
   contents = "" ;
   textBox.value("type your answer here")
   print(all_the_answers)   
}

function storeText(){
  contents = this.value(); 
}

function showAnswers(){
  
  textBox.hide();
  saveAnswer_button.hide();
  showAnswer_button.hide();
  
  textSize(14);
  fill("white");    
  textAlign(LEFT, TOP);
  
  let yPos = 100; 
  for (let i = 0; i < all_the_answers.length; i++) {
    text("- " + all_the_answers[i], 50, yPos);
    yPos += 30;
}
}
