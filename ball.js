class Paper{
  constructor(x, y, r) {
this.image=loadImage("paper.png")
    var options = {
        isStatic:false, 
        restitution:1,
        friction:0,  
        density:1.2,
        
    }
    
    this.r=r
    this.body = Bodies.circle(x, y,this.r/2, options);
    World.add(world, this.body);
  }

  display(){
    var pos =this.body.position;
    push()
    translate(pos.x,pos.y);
  ellipseMode(CENTER);
    fill('pink');
  ellipse(0,0,this.r,this.r);
    pop()
  }
};
  