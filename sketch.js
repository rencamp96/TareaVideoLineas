/*
 *
 * Cinema Expandido WEB
 * Tarea Pixel Array (10 de abril 2018)
 * Renata Campuzano
 * 
 *
 * URL: https://rencamp96.github.io/TareaVideoLineas/
 */


/*
 *****************************************
 *****************************************
 * VARIABLES
 *****************************************
 *****************************************
 */
 var video;
 
var angle =0;

var isLoading = false;

/*
 *****************************************
 *****************************************
 * LIFE CYCLE METHODS
 *****************************************
 *****************************************
 */



function preload() {
  
}

function windowResized(){
 resizeCanvas(windowWidth,windowHeight);
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  initializeVideo();

}

function draw() {
  if (isLoading == true){
    drawVideo();
  } else{
  drawLoading();
  }

}

function initializeVideo(){
  video = createVideo("assets/videos/centro.mov",videoLoaded);
}

function videoLoaded(){
  isLoading = true;
  video.loop();
  video.hide();

}

function drawVideo(){
  image(video,0,0);
}

function drawLoading(){
  background(255,210,210);
  translate(windowWidth/2,windowHeight/2);
  rotate(angle);
  strokeWeight(10);
  stroke(255,160,160);
  line(0,0,100,100);
  angle += 0.1;
}

