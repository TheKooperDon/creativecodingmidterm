let song, analyzer;
let xSpeed = 2, xAxis = 50;
let ySpeed = 5, yAxis = 50;
let y = 0;


function preload() {
  song = loadSound('../storageforsounds/scarletfire.mp3');
}

function setup() {
  createCanvas(1500, 1000, WEBGL);
  song.loop();

  // create a new Amplitude analyzer
  analyzer = new p5.Amplitude();

  // Patch the input to a volume analyzer
  analyzer.setInput(song);
  
 

  
}

function mousePressed() {
  if (song.isPlaying()) {
    song.stop();
    background(0);
  } else {
    song.play();
    background(0);
  }
}


function draw() {
  
  
  
  xAxis += xSpeed;
  yAxis += ySpeed;

  if (xAxis > width - 10 || xAxis < 10) {
    xSpeed *= -1;
  }
  if (yAxis > height - 10 || yAxis < 10) {
    ySpeed *= -1;
  }
  

 

  // Get the average (root mean square) amplitude
  let rms = analyzer.getLevel();
  
  // Draw celestial bodies with size and color based on volume
  push();
  fill(255, 255, 255, 50);
  translate(0, 0, -1000);
  sphere(5 + rms * 300);
  pop();
  
  push();
  fill(255, 255, 0, 50);
  translate(-300, 0, -1500);
  sphere(20 + rms * 300);
  pop();
  
  push();
  fill(255, 0, 0, 50);
  translate(300, 0, -1500);
  sphere(20 + rms * 300);
  pop();

  push();
  fill(0, 255, 255);
  translate(xAxis, yAxis, -1000, -1000);
  sphere(5 + rms * 160);
  pop();

  let cubeSize = 20 + rms * 1000;
  let ringSize = 20 + rms * 100;
  push();
  translate(width/2, height/2, -1500);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  fill(255, 255, 255, 50);
  box(cubeSize);
  pop();
  

  translate(240, 0, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(-1000, 20);
  pop();

  translate(-750, 0, 0);
  push();
  fill(255,0,0)
  rotateZ(frameCount * 0.001);
  rotateX(frameCount * 0.001);
  rotateY(frameCount * 0.001);
  torus(ringSize);
  pop();

  push();
  translate(600, -1000, -2500);
  fill(random(255), random(255), random(255));
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  
  box(cubeSize);
  pop();
}