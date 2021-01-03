const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body=Matter.Body
const constraint=Matter.Constraint

var box1,box2,box3;
var ground, ball;
var madhur,newto2
let paperimage,dustbinimages,backgroundimage

function preload(){
paperimage=loadImage("paper.png")
dustbinimages=loadImage("dustbingreen.png")
backgroundimage=loadImage("background.jpg")
newtonimage=loadImage("newton's cradle.jpg")
newton2image=loadImage("newto2.jpg")
}



function setup(){
  createCanvas(800,600)
 
  engine=Engine.create()
  world=engine.world
 
  
  // Creating new Ground
  ground=new Ground(370,185,400,20)
  base=new Ground(370,490,400,20)
  weight1=new Paper(370,450,40)
  weight2=new Paper(410,450,40)
  weight3=new Paper(450,450,40)
  weight4=new Paper(330,450,40)
 Chainn=new Chain(weight1.body,ground.body,0,0)
 Chainnn=new Chain(weight2.body,ground.body,40,0)
 Chain3=new Chain(weight3.body,ground.body,80,0)
 Chain4=new Chain(weight4.body,ground.body,-40,0)
 pot=new Dustbin(700,100,200,200)
}

function draw(){
  background(backgroundimage)
  Engine.update(engine)

 ground.display()
 weight2.display()
 weight1.display()
 Chainn.display()
 Chainnn.display()
 weight3.display()
 Chain3.display()
 base.display()
 weight4.display()
 Chain4.display()
 pot.display()
  }

  function keyPressed(){ 
    if(keyCode === UP_ARROW){
      Matter.Body.applyForce(weight4.body,weight4.body.position,{x:-65,y:65}); 
     } 
   }

  
