class Bob{
	constructor(x,y,r)
	{
	
this.x=x;
this.y=y;
this.width=50;
this.height=50;
var options={
'restitution':0.3,
'friction': 5,
'density':1,

}
this.body=Bodies.rectangle(this.x, this.y, 50,50, options)
World.add(world, this.body);

}

    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      translate(pos.x,pos.y);
      rotate(angle)	    
      rectMode(CENTER);
      fill("green");
      rect(pos.x, pos.y, this.width, this.height);
      pop();	    
    }
  }			

}
