var bullet,wall,speed,weight,thickness;

function setup() {
  createCanvas(600,600);

  bullet = createSprite(50,100,30,30);
 bullet.shapeColor = "white";

  wall = createSprite(550,100,thickness,180);
  wall.shapeColor = rgb(80,80,80);

  speed = random(55,90);
  weight= random(400,1500);
  thickness = random(22,83);
}

function draw() {
  background("blue");  
  
  bullet.velocityX = speed;
  
  if (hasCollided(bullet , wall)){

    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){

      wall.shapeColor=color(255,0,0);
    }
    if(damage<10){

      wall.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}

function hasCollided(bullet,wall) {
bulletRightEdge = bullet.x + bullet.width;
wallLeftEdge = wall.x;

if (bulletRightEdge >= wallLeftEdge){

  return true;
}
return false;
}