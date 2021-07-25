var canvas,backgroundImage,database,form,player;

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
function preload() {
  backgroundImage = loadImage("./assets/background.png");
}
function setup(){

  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.start();

}



function draw() {
  background(backgroundImage);
}