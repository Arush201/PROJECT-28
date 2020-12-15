
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var engine, world;
var ground, tree;
var boy 
var gameState = "onRope"


function preload()
{
	boy = loadImage("Images/boy.png")

}

function setup() {
	createCanvas(1300, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,600,width,20)
	tree = new Tree(1050,580)
	mango1 = new Mango(1050,250)
	mango2 = new Mango(1080,100)
	mango3 = new Mango(900,300)
	mango4 = new Mango(850,190)
	mango5 = new Mango(950,200)
	stone = new Stone(200,350,50,50)
	rope = new Rope(stone.body,{x:230,y:510})

	
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(230);
  
  ground.display()
  tree.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  rope.display()
  image(boy,200,450,150,200)
  stone.display()

  drawSprites();
 
}

function mouseDragged(){
	if (gameState!=="launched"){

		Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	rope.fly()
	gameState = "launched";
}
