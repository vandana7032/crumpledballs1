
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1;
var paperObject;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground=new Ground(600,height,1200,20);

	paperObject=new Paper(230,385,70);

	dustbin1=new Dustbin(890,385,200,10);
	dustbin2=new Dustbin(790,290,10,200);
	dustbin3=new Dustbin(990,290,10,200);
	console.log(dustbin1);  

	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  ground.display();
  paperObject.display();
  dustbin1.display(); 
  dustbin2.display(); 
  dustbin3.display(); 
  
  text("Press up arrow to throw the paper into the dusbin",200,200);
  text("Press ctrl+r to play again",200,250);
}

function keyPressed(){
	if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}
