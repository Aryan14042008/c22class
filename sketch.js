const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,obj;
var option = {isStatic : true};
var balloption = {restitution : 1.3};
var ball,ground;
function setup() {
  createCanvas(800,400);
 engine = Engine.create();
 world = engine.world;
 //creating obj bodies
 obj = Bodies.rectangle(200,200,60,60,option);
 World.add(world,obj);
 console.log(obj);
 // creating ground bodies
 ground = Bodies.rectangle(0,380,500,20,option);
 World.add(world,ground);
 console.log(ground);
 //creating ball bodies
 ball = Bodies.circle(120,20,30,balloption);
 
 World.add(world,ball);
 console.log(ball);
}

function draw() {
  background(0);
  Engine.update(engine);  
  rectMode(CENTER); 
  rect(obj.position.x,obj.position.y,60,60);
  rect(ground.position.x,ground.position.y,500,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30);
  
}