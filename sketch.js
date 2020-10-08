var Zenia, Tourus, Cyclap;
var car, wall;
var speed, weight;
var deformation
function preload () {

}
function setup () {
createCanvas(200,200);

speed=random(55,90);
weight=random(400,1500);

car=createSprite(50,200,50,50);
car.velocityX=speed;
wall=createSprite(100,200,60,height/2);
wall.shapeColor(0,0,0);

}
function draw ()  {
background("red");

if(wall.x - car.x < (car.width + wall.width)/2)  {
car.velocityX=0;
deformation=0.5 * weight * speed * speed / 22509;
if (deformation=180)  {
car.shapeColor(255,0,0);
}
if(deformation<180 && deformation >100) {
car.shapeColor(230,230,0);
}
if (deformation<100) {
car.shapeColor(0,255,0);
}
}
  drawSprites();
}
