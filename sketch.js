var fixedRec;
var movingRec;

function setup() {
  createCanvas(800,400);
fixedRec = createSprite(400, 200, 50, 50);
fixedRec.shapeColor = (rgb(168, 99, 30));
movingRec = createSprite(500, 200, 100, 50);
movingRec.shapeColor = (rgb(168, 99, 30));
}

function draw() {
  background(90, 154, 196); 
  movingRec.x = mouseX;
  movingRec.y = mouseY;

  if(movingRec.x - fixedRec.x < movingRec.width/2 + fixedRec.width/2 && 
    fixedRec.x - movingRec.x < movingRec.width/2 + fixedRec.width/2 &&
    movingRec.y - fixedRec.y < movingRec.height/2 + fixedRec.height/2 &&
    fixedRec.y - movingRec.y < movingRec.height/2 + fixedRec.height/2){
    movingRec.shapeColor = (rgb(245, 37, 172));
    fixedRec.shapeColor = (rgb(245, 37, 172));
  } else {
    movingRec.shapeColor = (rgb(168, 99, 30));
    fixedRec.shapeColor = (rgb(168, 99, 30));
  }
  
  
  drawSprites();
}