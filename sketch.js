
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

	roof = new Roof(360,200,200,15);
	bob1 = new Bob(300,400,15);
	bob2 = new Bob(330,400,15);
	bob3 = new Bob(360,400,15);
	bob4 = new Bob(390,400,15);
	bob5 = new Bob(420,400,15);

	rope1 =new Rope(bob1.body,{x:460,y:205})
	rope2 =new Rope(bob2.body,{x:460,y:205})
	rope3 =new Rope(bob3.body,{x:460,y:205})
	rope4 =new Rope(bob4.body,{x:460,y:205})
	rope5 =new Rope(bob5.body,{x:460,y:205})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  
}



