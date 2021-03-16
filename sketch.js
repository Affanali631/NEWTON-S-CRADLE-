const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var roof,p1

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	roof = new Ground (400,100,550,20);
	engine = Engine.create();
	world = engine.world;

	
Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("gray");
  roof.display;
  drawSprites();
 
}



