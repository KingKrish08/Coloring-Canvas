function setup() { // command to create the background
  createCanvas(400, 400); // width and height of the background
  createCanvas(windowWidth-70, windowHeight-70);// makes the canvas slightly smaller than window size
  s= 20; // default size value
  c = (0);// default color value
}

function draw() {
  if (mouseIsPressed) {// is the mouse button command
    fill(c); // fills cirles
    noStroke();// removes borders
    ellipse(mouseX, mouseY, s, s); // makes circles on mouse pointer
  }
}

function keyPressed() { // is the function to detect keys

  if (key === '1' || key === '1') {
c = color(255, 0, 0); // Color Red

  } else if (key === '2' || key === '2') {
c = color(255, 127, 0); // Color Orange

  } else if (key === '3' || key === '3') {
c = color(255, 255, 0); // Color Yellow

  } else if (key === '4' || key === '4') {
c = color(0, 255, 0); // Color Green

  } else if (key === '5' || key === '5') {
c = color(0, 0, 255); // Color Blue

  } else if (key === '6' || key === '6') {
 c = color(127, 0, 255); // Color Purple

  } else if (key === '7' || key === '7') {
c = color(255, 0, 255); // Color Pink

  } else if (key === '8' || key === '8') {
c = color(255); // Color White

  } else if (key === '9' || key === '9') {
c = color(127); // Color Gray

  } else if (key === '0' || key === '0') {
c = color(0); // Color Black


  } else if (keyCode === UP_ARROW) {
    s += 5; // Makes brush size larger

  } else if (keyCode === DOWN_ARROW) {
    s = (5, s - 5); // Maes brush size smaller
  }
}
