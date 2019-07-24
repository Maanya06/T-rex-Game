 var trex,GameState,ground,invisibleground,cloud,Obstacles,gameover,restart,score,trexRunning,trexColided,groundImage,cloudImage,cloudGroup,obs1,obs2,obs3,obs4,obs5,obs6,obstacleGroup,count;

function preload(){
  trexRunning =    loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage=loadImage("ground2.png");
  cloudImage = loadImage("cloud.png");
  obs1 = loadImage("obstacle1.png");
  obs2 = loadImage("obstacle2.png");
  obs3 = loadImage("oebstacl3.png");
  obs4 = loadImage("obstacle4.png");
  obs5 = loadImage("obstacle5.png");
  obs6 = loadImage("obstacle6.png");
}

function setup() {
  createCanvas(600, 200);
  trex= createSprite (50,160,86,87);
  ground = createSprite (200,180,86,87);
  invisibleground=createSprite(200,185,400,10  ); 
  //restart = createSprite(200,350,54,56);
  trex.addAnimation("running",trexRunning);
  ground.addImage("moving",groundImage);
  invisibleground.visible= false;
  trex.scale = 0.5;
  ground.velocityX = -3;
  ground.x = ground.width/2;
  cloudGroup = new Group();
  count = 0;
  }

function draw() {
  background(180);
  
  if(keyDown("space")) {
  trex.velocityY = -10;
   }         
  trex.velocityY = trex.velocityY + 0.8;
  trex.collide(invisibleground);
   
  if(ground.x<0){
    ground.x = ground.width/2; 
  } 
   
   text("Score : "+count,450,70 );
   
   count = count+ Math.round(getFrameRate()/60);
  
  spawnclouds();
  spawnObstacles();
  
  drawSprites();
}
  
function spawnclouds(){
  if(frameCount%90===0){
   var  cloud = createSprite(600,100,25,25);
   cloud.velocityX = -2;
   cloud.addImage(cloudImage);
   cloud.scale = 0.5;
   cloud.y = random(90,120);
   cloud.lifetime = 300;
   cloud.depth = trex.depth;
   trex.depth = trex.depth+1;
   cloudGroup.add(cloud);
  }
}

function spawnObstacles(){
 if(frameCount%90===0){
   var  Obstacles = createSprite(600,170,25,25);
   Obstacles.velocityX = -3;
   var randam = Math.round(random(1,6)); 
   switch (randam){
   case 1: Obstacles.addImage(obs1);
   break;
   case 2: Obstacles.addImage(obs2);
   break;
   case 3: Obstacles.addImage(obs3);
   break;
   case 4: Obstacles.addImage(obs4);
   break;
   case 5: Obstacles.addImage(obs5);
   break;
   case 6: Obstacles.addImage(obs6);
   break;
   default:break;
   }
 Obstacles.scale = 0.5 ;
 Obstacles.lifetime = 200;
 } 
}