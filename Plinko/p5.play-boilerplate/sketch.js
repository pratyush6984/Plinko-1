const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, ground1,ground2;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,800,480,10);
  ground1 = new Ground(0,400,10,800);
  ground2 = new Ground(480,400,10,800);
  for(var k = 0; k <=width; k= k + 78){
    divisions.push(new Division(k,height - divisionHeight/2, 10,divisionHeight));
  }
  for(var j = 15;j <=width; j= j+30){
    plinkos.push(new Plinko(j,50,10));
  }
  for(var j = 0;j <=width; j= j+30){
    plinkos.push(new Plinko(j,100,10));
  }
  for(var j = 15;j <=width; j= j+30){
    plinkos.push(new Plinko(j,150,10));
  }
  for(var j = 0;j <=width; j= j+30){
    plinkos.push(new Plinko(j,200,10));
  }
}

function draw() {
  background(0);  
  Engine.update(engine);
 // drawSprites();
  ground.display();
  ground1.display();
  ground2.display();
  for(var k = 0;k<divisions.length;k++){
    divisions[k].display();
  }
  for(var j = 0;j<plinkos.length;j++){
    plinkos[j].display();
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10), 10,10))
  }
for(var m = 0;m<particles.length;m++){
  particles[m].display();
  }
}
