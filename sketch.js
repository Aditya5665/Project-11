var path;
var player;
var leftLine, rightLine;

function preload(){
  //pre-load images
  boy = loadAnimation("Runner-1.png","Runner-2.png");
  road = loadImage("path.png"); 
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,-50,100,100);
  path.addImage(road);
  player = createSprite(200,300,50,50);
  player.addAnimation("run",boy);
  player.scale = 0.06;
  leftLine = createSprite(60,200,10,400);
  rightLine = createSprite(340,200,10,400);
  leftLine.visible = false;
  rightLine.visible = false;
}

function draw() {
  background("lightgrey");
  path.velocityY = 10;
  
  
  if(path.y == 200){
    path.y = -50
  }
  player.collide(leftLine);
  player.collide(rightLine);
  if(keyDown("left")){
    player.x = player.x+-3;
  }
  if(keyDown("right")){
    player.x = player.x+3;
  }
  drawSprites();
}
