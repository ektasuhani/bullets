var bullet
var wall,thickness
var speed,weight

function setup() {
  createCanvas(1600,400);
 
 
  weight=random(30,52);
  thickness=random(22,83);
  
  wall=createSprite(800,200,thickness,height/2);
  bullet=createSprite(100,150,20,20);
}

function draw() {
  background("black");
  speed=random(100,400);
  bullet.velocityX=speed 
  wall.shapeColor =color(80,80,80) 
  if(wall.x-bullet.x<(bullet.width+wall.width)/2) 
  
   
   
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }
  drawSprites();}
  function hasCollided(lbullet,lwall){
    bulletRightEdge=lbullet.x + lbullet.width;
    wallLeftEdge=lwall.x;
    if(bulletRightEdge>=wallLeftEdge){
      return true
    }
    return false;
  }
 