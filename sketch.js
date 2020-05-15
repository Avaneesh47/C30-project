const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//variables
var world,engine;
var ball,ball2,chain,ground,platform1,platform3,platform4;

var block1,block2,block3,block4,block5;
var block6,block7,block8,block9;

var block10,block11,block12,block13,block14;
var block15,block16,block17,block18;

var block19,block20,block21,block22,block23;
var block24,block25,block26,block27;

var polygonImg;
var score = 0;

function preload(){
  polygonImg = loadImage("polygon.png");
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  //creating the ground
  ground = new Ground();

  //creating the ball
  ball = Bodies.circle(600,200,50);
  World.add(world,ball);

  //creating the second ball
  ball2 = Bodies.circle(1000,1000,50);
  World.add(world,ball2);
  
  //creating platforms
  platform1 = new Platform(120,150,200,10);
  platform3 = new Platform(150,350,200,10);

  //creating blocks for first platform
  block1 = new Block(70,320);
  block2 = new Block(110,320);
  block3 = new Block(150,320);
  block4 = new Block(190,320);
  block5 = new Block(230,320);

  block6 = new Block(90,300);
  block7 = new Block(130,300);
  block8 = new Block(170,300);
  block9 = new Block(210,300);

  //creating blocks for third platform
  block19 = new Block(40,120);
  block20 = new Block(80,120);
  block21 = new Block(120,120);
  block22 = new Block(160,120);
  block23 = new Block(200,120);

  block24 = new Block(60,100);
  block25 = new Block(100,100);
  block26 = new Block(140,100);
  block27 = new Block(180,100);

  //constraint
  chain = new Chain(this.ball,{x:600,y:200});
}

function draw() {
  background("black");
  Engine.update(engine);
  text("Score:" + score,650,30);

  fill("white");
  text("X:"+mouseX,50,50);
  text("Y:"+mouseY,50,60);

  ground.display();

  platform1.display();
  platform3.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();

  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block25.score();
  block26.score();
  block27.score();

  push();
  fill("yellow");
  imageMode(CENTER);
  image(polygonImg,ball.position.x,ball.position.y,50,50);
  pop();

  chain.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX, y:mouseY});
}

function mouseReleased(){
  chain.fly();
}

function keyPressed(){
  if(keyCode === 32){
    chain.attach(this.ball);
  }
}