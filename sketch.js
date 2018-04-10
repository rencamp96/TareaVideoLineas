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

/*
 *****************************************
 *****************************************
 * LIFE CYCLE METHODS
 *****************************************
 *****************************************
 */

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function preload() {
  video = createVideo("assets/videos/colores.mov");
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  initilizeVideo();
}

function draw() {
  background(250);
  drawVideoNose();
  //toggleVideo();
}


/*
 *****************************************
 *****************************************
 * VIDEO METHODS
 *****************************************
 *****************************************
 */

function initilizeVideo() {

  video.loop();
  video.hide();

}


function drawVideoNose() {
  var correctionX = (windowWidth / 2) - video.width / 2;
  var correctionY = (windowHeight / 2) - video.height / 2;

  video.loadPixels();
  var stepSize = 40;
  var mouseX2 = round(map(mouseX, 0, windowWidth, 0, 608));
  var mouseY2 = round(map(mouseY, 0, windowHeight, 0,480));
  background(0);

  for (var y = 0; y < video.height; y += stepSize) {

    for (var x = 0; x < video.width; x += stepSize) {
      var index = (x + y * video.width) * 4;

      var darkness = (250 - video.pixels[index]) / 100;
      var radio = 3;
      noStroke();
      fill(video.pixels[index] , video.pixels[index + 1], video.pixels[index + 2] );
      //triangle(x, y, x + (radio), y - radio, x, y - radio);;
      triangle(mouseX, mouseY, x + radio/2, y, x - radio/2,y + radio);
      triangle(608-mouseX2, 480-mouseY2, x + radio/2, y, x - radio/2,y + radio);
      triangle(mouseX, 480-mouseY2, x + radio/2, y, x - radio/2,y + radio);
      triangle(608-mouseX2, mouseY, x + radio/2, y, x - radio/2,y + radio);
    


    }
  }
}