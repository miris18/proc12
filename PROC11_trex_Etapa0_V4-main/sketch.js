
var trex ,trex_running;
var ground, groundImage;

function preload(){
  trex_running =loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground1.png");

}

function setup(){
  createCanvas(600,200);
  
  //crear sprite de Trex
  trex = createSprite(50,170,20,80);
  trex.addAnimation("runnig",trex_running);
  trex.scale=0.5;
  trex.x= 50;
 
  ground = createSprite(200,180,400,20);

  ground.x = ground.whidth/2;


}

function draw(){
  background("white")
 ground.velocityX = -2;

 if(keyDown("space")){
 trex.velocityY= -9;
 }

 trex.velocityY= trex.velocityY +0.5;

 trex.collide(ground);
  
 drawSprites();
}
