/*
 *
 * Cinema Expandido WEB
 * Tarea Pixel Array (19 de marzo 2018)
 * Renata Campuzano
 * 
 *
 * URL: https://rencamp96.github.io/CEW_pixelarrayalo/.
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
  var stepSize = 25;
  var col = round(map(mouseX, 0, windowHeight, -100, 20));
  background(0);

  for (var y = 0; y < video.height; y += stepSize) {

    for (var x = 0; x < video.width; x += stepSize) {
      var index = (x + y * video.width) * 4;

      var darkness = (255 - video.pixels[index]) / 255;
      var radio = stepSize * darkness;
      noStroke();
      fill(video.pixels[index] + col, video.pixels[index + 1] + col, video.pixels[index + 2] + col);
      if (mouseY <= windowHeight / 2) {
        rect(x, y, radio, radio);;
      } else {
        ellipse(x, y, radio, radio);;
      }
    }
  }
}