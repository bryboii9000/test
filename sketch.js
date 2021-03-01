
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bobOb1,bobOb2,bobOb3,bobOb4,bobOb5;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
    Engine.run(engine);

	roof = new Flyoor(345,170,400,35)
  bobOb1 =  new Bob(480,450,100)
  bobOb2 =  new Bob(410,450,100)
  bobOb3 =  new Bob(340,450,100)
  bobOb4 =  new Bob(270,450,100)
  bobOb5 =  new Bob(200,450,100)
  rope = new Sline(bobOb1.body,roof.body,-bobDiameter*2,0)
}


function draw() {
  rectMode(CENTER);
  background(176,196,222);



  roof.display();
  bobOb1.display();
  bobOb2.display();
  bobOb3.display();
  bobOb4.display();
  bobOb5.display();

  
  drawSprites();
 
}



