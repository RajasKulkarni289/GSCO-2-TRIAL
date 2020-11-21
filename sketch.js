var wall,thickness;
var speed,weight,bullet;

function setup() {
  createCanvas(800,400);
  
  speed=random(223,321);
  weight=random(400,1500);

  thickness=random(22,83);
  wall=createSprite(750,200,thickness,height/2);

  bullet.velocityX=speed;
}

function draw() {
  background("white");
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;
    if(deformation>180){
      car.shapeColor=color(255,0,0);
    }

    if(deformation<180 && deformation>100){
      car.shapeColor=color(230,230,0);
    }

    if(deformation<100){
      car.shapeColor=color(0,255,0);
    
    }
  }
  drawSprites();
}