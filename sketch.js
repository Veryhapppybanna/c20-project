var astronuant
var bg
var sleep
var brush
var bath
var gym 
var eat 
var drink
var move

function preload() {
  bg = loadImage("iss.png");
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png","brush2.png");
  bath = loadAnimation("bath1.png","bath2.png")
  gym = loadAnimatission("gym1.png","gym2.png","gym12.png");
  eat = loadAnimation("eat1.png","eat2.png");
  drink = loadAnimation("drink1.png","drink2.png");
  move = loadAnimation("move.png","move1.png");

}

function setup() {
  createCanvas(600, 200);
 
  astronuant = createSprite(300,230);
  astronuant.addAnimation("sleeping",sleep);
  astronuant.scale = 0.1;
}

function draw() {
  background(180);
  createEdgeSprites();

  textSize(60);

  textAlign(LEFT, TOP);
  textFont("Impact");
  fill("black");
  stroke("black");
  strokeWeight(5);
  text("Instruction: Up Arrow=Brushing, Down Arrow= Gymming, Right= Bathing,Left Arrow= Bathing, m key= Move ", 0, 0, 400, 400);

  if(KeyDown("UP_ARROW")){
    astronuant.addAnimation("brushing",brush);
    astronuant.changeAnimation("brushing")
    astronuant.y = 350;
    astronuant.velocityX = 0;
    astronuant.velocityy = 0;
  }

  if(KeyDown("DOWN_ARROW")){
    astronuant.addAnimation("gymming",gym);
    astronuant.changeAnimation("gymming")
    astronuant.y = 350;
    astronuant.velocityX = 0;
    astronuant.velocityy = 0;
  }

  if(KeyDown("RIGHT_ARROW")){
    astronuant.addAnimation("eating",eat);
    astronuant.changeAnimation("eating")
    astronuant.y = 350;
    astronuant.velocityX = 0;
    astronuant.velocityy = 0;
  }

  if(KeyDown("LEFT_ARROW")){
    astronuant.addAnimation("bathing",bath);
    astronuant.changeAnimation("bath")
    astronuant.y = 350;
    astronuant.velocityX = 0;
    astronuant.velocityy = 0;
  }

  if(KeyDown("M_ARROW")){
    astronuant.addAnimation("moving",move);
    astronuant.changeAnimation("moving")
    astronuant.y = 350;
    astronuant.velocityX = 0;
    astronuant.velocityy = 0;
  }

drawSprites();
}

