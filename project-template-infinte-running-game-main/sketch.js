var rock, track, road, Iground,
var gameState = PLAY

function preload() {
  runnerImg = loadImage("runner.png");
  rockImg = loadImage("runner.png");
  roadImg = loadImage("road.jpeg");

}

function setup() {
 createCanvas(400,400);

 road=createSprite(200,200,400,400);
 road.addImage(roadImg);
 road.velocityX = 4;
 road.scale=1.5

runner=createSprite(50,300,10,10);
runner.addImage(runnerImg);
runner.scale=0.08
runner.velocityY=3
runner.collide(Iground);

Iground=createSprite(30,380,800,100);
Iground.visible=false;
rock.addImage(rockImg);
score=0
}

function draw() {
 drawSprites();

 if(road.x > 297 ){
    road.x = width/2;
  }

  restart.addImage(restartImg);

  if(rock.isTouching(runner)){
  gameState = END;
}

if (gameState === PLAY) {
  score = score + Math.round(getFrameRate()/60);
makeRocks()

if(keyDown("space")&& runner.y >= 100) {
  runner.velocityY = -12;
}

}

if (gameState === END) {
  runner.velocityX=0
  runner.velocityY=0
  text ("press up arrow to play again")
}

if (keyDown(UP_ARROW)) {
gameState = PLAY
}

}
function makeRocks() {
  if (frameCount % 60 === 0){
    var rock = createSprite(600,165,10,40);
    rock.velocityX = -(6 + score/100);
}
}