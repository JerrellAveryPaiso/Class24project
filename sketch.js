
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var hammer,ground,stone,rubber

function setup() {
	createCanvas(1200,600);
	engine = Engine.create();
	world = engine.world;

    //Create the Bodies Here.
    ground = new Ground(600,height,1200,20);
    hammer=new Hammer(100,100);
    stone=new Stone(200,120,200,30)
    rubber=new Rubber(600,300,30,30)
    
    
    Engine.run(engine);
  
}


function draw() {
    rectMode(CENTER);
    background("skyblue");
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
   
    ground.display();
    hammer.display();
    stone.display();
    rubber.display();
   drawSprites();
 
}



