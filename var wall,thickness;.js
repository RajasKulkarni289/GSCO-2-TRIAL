var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(800,400);
  
  speed=random(223,221);
  weight=random(30,52);

  thickness=random(22,83);
  wall=createSprite(750,200,thickness,height/2);

  bullet.velocityX=speed;
}

function draw() {
  background("white");
  hasCollided();

  if(hasCollided(bullet,wall)){
      bullet.velocityX=0;
      var damage=0.5 * weight * speed * speed/(thickness *thickness* thickness);
      if (damage>10){
          bullet.shapeColor=color(255,0,0);
      }
      if (damage<10){
          bullet.shapeColor(0,255,0);
      }
  }
}
function hasCollided(ibullet,iwall){
    bulletRightEdge=ibullet.x + iwall.width;

    if(bulletRightEdge>=wallLeftEdge){
        return true
  }
        return false;
}