const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin,dustbinImg;
var ball;
var ground;

function preload(){
  dustbinImg=loadImage("dustbin.png")
}
function setup() {
    createCanvas(1500, 800);
    engine = Engine.create();
    world = engine.world;
    ball = new PAPER(100,200,20);
    ground = new GROUND(750,580,1500,20)
    dustbin1 = createSprite(1150,490,20,120)
    dustbin2 =  createSprite(1000, 490, 20, 120)
    dustbin3 = createSprite (1080, 550, 150, 30)
    Engine.run(engine);  
}

function draw() {
  rectMode(CENTER);
  background(0);
    
    Engine.update(engine);

    ground.display();
    ball.display();
  
  drawSprites();
  
}

function keyPressed(){
    if(keyCode===UP_ARROW){
        Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
    }
}
