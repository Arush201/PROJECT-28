
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground, tree;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,600,width,20)
	tree = new Tree(1050,580)
	mango1 = new Mango(650,300)

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(230);
  
  ground.display()
  tree.display()
  mango1.display()
  
  drawSprites();
 
}



