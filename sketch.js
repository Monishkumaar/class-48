const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg
var score = 100;
var gameState = "play";

function preload() {
    bgImage = loadImage("forest-stonesBG.jpg")
    gunImage = loadImage("photos/gun1.png")
    playerImage = loadImage("photos/player1.png")
    zombie1Image = loadImage("photos/zombie.png")
    zombie2Image = loadImage("photos/zombie2.png")
    zombie3Image = loadImage("photos/zombie3.png")



}

function setup() {
    createCanvas(1000, 700);
    engine = Engine.create();
    world = engine.world;

    bg = createSprite(450, 450, 1000, 700)
    bg.addAnimation("background", bgImage)
    bg.scale = 3
    bg.velocityX = -3
    bg.x = bg.width / 2

    ground = createSprite(500, 670, 1000, 20)
    ground.visible = false;

    player = createSprite(100, 630, 50, 50)
    player.addImage(playerImage)
    player.scale = 0.5

    monsterGroup = new Group();
}

function draw() {
    background("red")
    Engine.update(engine);

    if(gameState === "play"){

    }
    else if(gameState === "end"){

    }
    if (bg.x < 100) {
        bg.x = bg.width / 2
    }

    if (keyDown("space") && player.y > 603) {
        player.velocityY = -40
    }
    player.velocityY = player.velocityY + 5
    player.collide(ground)
    console.log(player.y)

    if (player.isTouching(monsterGroup)) {
        score = score - 10
    }

    spawnMonsters();

    drawSprites();
    textSize(30)
    fill("red")
    text("HP:" + score, 850, 70)

}

function spawnMonsters() {
    if (frameCount % 150 === 0) {
        zombie = createSprite(1000, 630, 50, 50)
        zombie.velocityX = -5

        monsterGroup.add(zombie)

        zombie.scale = 0.5

        var x = Math.round(random(1, 3))
        switch (x) {
            case 1: zombie.addImage(zombie1Image)
                break;
            case 2: zombie.addImage(zombie2Image)
                break;
            case 3: zombie.addImage(zombie3Image)
                break;
            default: break;
        }

    }
}
