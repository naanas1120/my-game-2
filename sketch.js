var gun
var imageColored
var imageNonColored
var fire
var zoom
var color1,color2,color3,color4,color5,color6,color7
function setup() {
  createCanvas(1200,800);
  gun=createSprite(380, 650, 50, 50);
  color1=createSprite(380, 150, 20, 20);
  color1.shapeColor="violet"
  color2=createSprite(420, 150, 20, 20);
  color2.shapeColor="indigo"
  color3=createSprite(460, 150, 20, 20);
  color3.shapeColor="blue"
  color4=createSprite(500, 150, 20, 20);
  color4.shapeColor="green"
  color5=createSprite(400, 200, 20, 20);
  color5.shapeColor="yellow"
  color6=createSprite(440, 200, 20, 20);
  color6.shapeColor="orange"
  color7=createSprite(480, 200, 20, 20);
  color7.shapeColor="red"

fire=createButton('fire')
fire.position(250,580,50,50)
//fire.style('border-radius',50%)

zoom=createButton('zoom')
zoom.position(500,580,50,50)
}

function draw() {
  background(0);  
  
  drawSprites();
}