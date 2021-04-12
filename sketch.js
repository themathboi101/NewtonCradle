
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Creating the Bodies Here
	bobObject1=new Bob(30);
	bobObject2=new Bob(100);
    bobObject3=new Bob(160);
	bobObject4=new Bob(240);
	bobObject5=new Bob(400);

	roofObject=new Roof(350,700,200);

	rope1=new Rope(bobObject1.body,roofObject.body,0,0);
	Engine.run(engine);
  
}


function draw() {
  
  background(200);

  rectMode(CENTER);

if(keyDown("left")){
 bobObject1.isStatic=false;
}
  
  drawSprites();
 
}



