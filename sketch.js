
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Ground,Ball,Woo1,Woo2,Woo3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    Ground=new ground(600,height,1200,20)
    Ball=new ball(200,20,15)
    Woo1=new wood1(700,200,10,180)
    Woo2=new wood1(900,200,10,180)
    Woo3=new wood2(800,300,200,10)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Keypressed();
  drawSprites();
 
  Ground.display();
  Ball.display();
  Woo1.display();
  Woo2.display();
  Woo3.display();
  
}

function Keypressed(){

if( keyCode===UP_ARROW ){

Matter.Body.applyForce(Ball.body,Ball.body.position,{x:1,y:-2.2})


}





}



