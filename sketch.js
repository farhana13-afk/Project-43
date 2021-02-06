var hr, mn, sc;
var scAngle, mnAngle, hrAngle;

function setup() {
  createCanvas(400,400);

   //calcuating angles in degrees
   angleMode(DEGREES);
}

function draw() {
  background(0);
   
   translate(200,200);
   rotate(-90);
   //functions for hr, mn, sc
   hr = hour();
   mn = minute();
   sc = second();
  
   //to creae the maps for the line to rotate
   scAngle = map(sc, 0, 60, 0 ,360);
   mnAngle = map(mn,0, 60, 0, 360);
   hrAngle = map(hr %12, 0, 12, 0, 360);

   //making the hands
   //seconds (thin)
  push ();
  rotate (scAngle);
  stroke ("magenta");
  strokeWeight(3);
  line (0,0,100,0);
  pop ();

  //minutes (medium)
  push();
  rotate(mnAngle);
  stroke ("purple");
  strokeWeight(5.5);
  line (0,0,75,0);
  pop ();

  //hour (thick)
  push();
  rotate(hrAngle);
  stroke ("teal");
  strokeWeight(8);
  line (0,0,50,0);
  pop ();
  drawSprites();

  stroke("white");
  strokeWeight(5);
  point (0,0);

  noFill();
  //second's arc
  strokeWeight(3);
  stroke("magenta");
  arc (0, 0, 220, 220, 0, scAngle);

  //minute's arc 
  strokeWeight(5.5);
  stroke("purple");
  arc (0, 0, 260, 260, 0, mnAngle);
  //hour arc
  strokeWeight(8);
  stroke("teal");
  arc (0, 0, 300, 300, 0, hrAngle);
}