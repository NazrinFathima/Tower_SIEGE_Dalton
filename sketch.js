const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint
var engine, world;
var boing
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  //Engine.run(engine);
 
  createSprite(400, 200, 50, 50);
  boing=createSprite(20,20,20,20)
  hi1 = new box(330,235,30,40)
  hi2 = new box(360,235, 30,40)
  hi3 = new box(390,235,30,40)
  hi4 = new box(420,235, 30,40)
  hi5 = new box(450,235, 30,40)
  hex=new box(20,20,20,20)
 // Slingshot1= new Slingshot(hex.body,ground.body);
}

function draw() {
 Engine.update(engine);
  background(0);  
  drawSprites();
  
  hi1.display()
  hi2.display()
  hi3.display()
  hi4.display()
  hi5.display()
  hex.display()
}
function keyPressed(){
  if(keyCode===32)
  me.attach(hex.body);
}
