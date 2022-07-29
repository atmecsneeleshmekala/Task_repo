
// creating variables
var speed = 1;
var maxspeed = 7;
var playerX = 50;
var playerY = 50;
playSpeech("good luck dont touch the lava", "male", "English");

//creating player
var player = createSprite(playerX, playerY, 10, 10);
player.shapeColor = "SKYBLUE";

// creating the platforms
var platform1 = createSprite(160, 70, 320, 10);
var platform2 = createSprite(240, 140, 320, 10);
var platform3 = createSprite(50, 210, 100, 10);
var platform4 = createSprite(150, 210, 40, 10);
var platform5 = createSprite(210, 210, 40, 10);
var platform6 = createSprite(270, 300, 80, 10);
var platform7 = createSprite(80, 300, 40, 10);
var platform8 = createSprite(50, 395, 100, 10);
var platform9 = createSprite(240, 395, 130, 10);
var platform10 = createSprite(375, 215, 70, 10);
var platform11 = createSprite(180, 385, 10, 30);


// creating the moving platform and timer Platform
var movingPlatform1 = createSprite(260, 210, 40, 10);
movingPlatform1.velocityX = 3;

var timerPlatform = createSprite(170, 300, 20,10);
timerPlatform.setAnimation("animation_1");
timerPlatform.play();
timerPlatform.setFrame(1);


// creating trampoleen
var trampoleen = createSprite(360, 400, 40,30);

// creating sprites to hold the lava and prevent player from going out
var barrier1 = createSprite(340, 220,10,20);
var barrier2 = createSprite(95, 220,10,20);
var barrier3 = createSprite(217.5, 230, 255, 10);

var barrier4 = createSprite(340-35, 220+95,10,20);
var barrier5 = createSprite(95, 220+95,10,20);
var barrier6 = createSprite(200, 230+100, 220, 10);

var barrier7 = createSprite(305, 370,10,100);

// creting danger objects
var lava1 = createSprite(160, 70, 30, 10.1);
var lava2 = createSprite(320, 70, 30, 10.1);
var lava3 = createSprite(200, 140, 30, 10.1);
var lava4 = createSprite(260, 140, 30, 10.1);
var lava5 = createSprite(217.5, 220, 235, 10.1);
var lava6 = createSprite(200, 315, 200, 20.1);

// setting the color for all spreites to their respectives
lava1.shapeColor = "red";
lava2.shapeColor = "red";
lava3.shapeColor = "red";
lava4.shapeColor = "red";
lava5.shapeColor = "red";
lava6.shapeColor = "red";

platform1.shapeColor = "blue";
platform2.shapeColor = "blue";
platform3.shapeColor = "blue";
platform4.shapeColor = "blue";
platform5.shapeColor = "blue";
platform6.shapeColor = "blue";
platform7.shapeColor = "blue";
platform8.shapeColor = "blue";
platform9.shapeColor = "blue";
platform10.shapeColor = "darkblue";
platform11.shapeColor = "blue";

barrier1.shapeColor = "blue";
barrier2.shapeColor = "blue";
barrier3.shapeColor = "blue";
barrier4.shapeColor = "blue";
barrier5.shapeColor = "blue";
barrier6.shapeColor = "blue";
barrier7.shapeColor = "blue";

movingPlatform1.shapeColor = "green";

// creating the finsish line / flag
var flag = createSprite(250,365);
flag.setAnimation("finish");
flag.play();



function draw() {
  // clearing the screen and creating egdes
  background("orange");
  createEdgeSprites();
  
  // making the text for each level and trampolleen
  text("WASD for movement", 275, 15);
  text("R To Reset", 70, 15);
  text("Go Ahead, Do Not Touch The Lava  ---->", 70, 30);
  text("<---- Jump Over These...", 70, 100);
  text("Keep Hopping. And u can just avoid the moving platform", 5, 170);
  text("Don't jump on trampoline or you fail", 5, 186);
  text("<---- You can do it", 200, 260);
  text("Secret block in center for help if ur bad at obbies", 125, 280);
  text("One Jump Left Come - On ---->", 70, 360);
  fill("yellow");
  text("3rd level", 0, 13);
  text("is weird", 0, 26);
  text("cuz u can jump on dark blue thing and fall through it", 0, 40);
  text("4th level is weird also cuz u can jump beside the trampoline", 0, 51);
  
  // making player jump and move
  if(keyDown("w") && player.y >= 60 && player.y < 65 && player.x < 315|| keyDown("w") && player.y > 128 && player.y < 139 && player.x > 80|| keyDown("w") && player.y > 199.5 && player.y < 201|| keyDown("w") && player.y > 289.5 && player.y < 291 || keyDown("w") && player.y > 199.5 && player.y < 201|| keyDown("w") && player.y > 384 && player.y < 386){
      player.velocityY = -4.5;
  }
  if (keyDown("d") && !player.isTouching(flag)){
    player.velocityX = player.velocityX + speed;
  } else if ((keyDown("a") && !player.isTouching(flag))) {
    player.velocityX = player.velocityX - speed;
  } else if ((player.velocityX < 0)){
    player.velocityX = player.velocityX + speed/2;
  }else if((player.velocityX > 0) ) {
    player.velocityX = player.velocityX - speed/2;
  }
  
  // making smooth movement
  if (player.velocityX > maxspeed ){
    player.velocityX = maxspeed
  }
  
  if(player.velocityX < -maxspeed){
    player.velocityX = -maxspeed
  }
  
  if(player.isTouching(movingPlatform1)){
    player.x = movingPlatform1.x
  }
  
  // making gtravity
  player.velocityY = player.velocityY + 0.5;
  
  // setting gameover and win statements
  if (player.isTouching(lava1) || player.isTouching(lava2) || player.isTouching(lava3) || player.isTouching(lava4) || player.isTouching(lava5) || player.isTouching(lava6) || player.y > 395){
    player.x = playerX;
    player.y = playerY;
  }
  
  if (player.isTouching(flag)){
    fill("red");
    textSize(40);
    text("You Win", 150, 200);
    stopSound("sound://category_background/repitition.mp3");
    
    timerPlatform.pause();
    movingPlatform1.velocityX = 0;
  }
  if (keyDown("r")) {
    player.x = 50;
    player.y = 50;
  }
  
  // letting player not go through other sprites
  player.collide(platform1);
  player.collide(platform2);
  player.collide(platform3);
  player.collide(platform4);
  player.collide(platform5);
  player.collide(platform6);
  player.collide(platform7);
  player.collide(platform8);
  player.collide(platform9);
  player.collide(platform11);
  
  player.collide(timerPlatform);
  
  player.collide(movingPlatform1);
  
  player.collide(barrier1);
  player.collide(barrier2);
  player.collide(barrier3);
  player.collide(barrier4);
  player.collide(barrier5);
  player.collide(barrier6);
  player.collide(barrier7);
  
  player.bounciness = 0.8;
  player.bounceOff(trampoleen);
  
  player.collide(edges);
  
  movingPlatform1.bounceOff(edges);
  movingPlatform1.bounceOff(platform5);
  
  drawSprites();
}
playSound("sound://category_background/repitition.mp3", true);
