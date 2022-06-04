
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,ball,leftside,rigthside;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,670,width,20)
	leftside = new Ground(1100,600,20,120);
	rigthside = new Ground(1350,600,20,120);
var ball_options = {
	restitution: 0.3,
	density: 1.2,
	isStatic: false
	}
	ball = Bodies.circle(260,100,40,ball_options);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
ground.display();
leftside.display();
rigthside.display();
ellipse(ball.position.x,ball.position.y,40);
}
function keyPressed(){
if (keyCode==UP_ARROW) {
	Matter.Body.applyForce(ball,ball.position,{x:85, y:-85})
}	
}


