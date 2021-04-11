
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var Roof;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var joint1,joint2,joint3,joint4,joint5;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Roof=new roof(570,100,450,30);
	bobObject1=new Bob(400,500,80);
	bobObject2=new Bob(480,500,80);
	bobObject3=new Bob(560,500,80);
	bobObject4=new Bob(640,500,80);
	bobObject5=new Bob(720,500,80);
  joint1=new rope(bobObject1.body,Roof.body,-170,0);
  joint2=new rope(bobObject2.body,Roof.body,-90,0);
  joint3=new rope(bobObject3.body,Roof.body,-10,0);
  joint4=new rope(bobObject4.body,Roof.body,70,0);
  joint5=new rope(bobObject5.body,Roof.body,150,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  Roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  joint1.display();
  joint2.display();
  joint3.display();
  joint4.display();
  joint5.display();

  drawSprites();
 
}

/*function keyPressed() {
	if (keyCode === UP_ARROW) {
	
		 Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,
								{x:-500,y:-500});
     }
		  }*/

function mouseDragged(){
Matter.Body.setPosition(bobObject1.body,{x:mouseX,y:mouseY});
}
