
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1
var dust1
var ball1 
var engine,world 
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	ball1 = new ball(100,350,35)
	dust2 = new dust(650,590,200,200)
	//Create a Ground
	ground1 = new ground(400,650,800,50);


	
  
}


function draw(){
  background(0);
  Engine.update(engine);
  ball1.splay();
  dust2.display();
  ground1.display();
  key();
  drawSprites();
}
function key(){
	if (keyCode === UP_ARROW){
		matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})
	}
}