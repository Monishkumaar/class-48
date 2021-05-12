const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg

function preload(){
    bgImage = loadImage("forest-stonesBG.jpg")
    gunImage = loadImage("photos/gun1.png")
    playerImage = loadImage("photos/player1.png")
    zombie1Image = loadImage("photos/zombie.png")
    zombie2Image = loadImage("photos/zombie2.png")
    zombie3Image = loadImage("photos/zombie3.png")



}

function setup() {
    createCanvas(1000,700);
    engine = Engine.create();
    world = engine.world;

   bg = createSprite(450,450,1000,700)
   bg.addAnimation("background",bgImage)
   bg.scale=3
   bg.velocityX = -3
   bg.x = bg.width/2
   ground = createSprite(500,670,1000,20)
   ground.visible = false;

   player = createSprite(100,630,50,50)
   player.addImage(playerImage)
   player.scale=0.5
}

function draw() {
    background("red")

    Engine.update(engine);
   if(bg.x<100){
    bg.x = bg.width/2

   }

   spawnMonsters();
   drawSprites();
}

  function spawnMonsters(){
  if(frameCount % 150 === 0){
  zombie = createSprite(1000,630,50,50)
  zombie.velocityX = -5
  }
  }

