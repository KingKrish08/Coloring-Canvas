function setup() {
  createCanvas(windowWidth-70, windowHeight-70);
  s= 20; 
  c = (0);
}

function draw() {
  if (mouseIsPressed) {
    fill(c);
    noStroke();
    ellipse(mouseX, mouseY, s, s);
  }
}

function keyPressed() {

  if (key === '1' || key === '1') {
c = color(255, 0, 0); 

  } else if (key === '2' || key === '2') {
c = color(255, 127, 0); 

  } else if (key === '3' || key === '3') {
c = color(255, 255, 0); 

  } else if (key === '4' || key === '4') {
c = color(0, 255, 0); 

  } else if (key === '5' || key === '5') {
c = color(0, 0, 255);

  } else if (key === '6' || key === '6') {
 c = color(127, 0, 255);

  } else if (key === '7' || key === '7') {
c = color(255, 0, 255);

  } else if (key === '8' || key === '8') {
c = color(255);

  } else if (key === '9' || key === '9') {
c = color(127);

  } else if (key === '0' || key === '0') {
c = color(0); 


  } else if (keyCode === UP_ARROW) {
    s += 5; 

  } else if (keyCode === DOWN_ARROW) {
    s = (5, s - 5); 
  }
}
