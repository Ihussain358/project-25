class Paper{
 constructor(x,y,r){
     var options={
         isStatic:false,
         restitution:0.3,
         friction:0,
         density:1.2
     }
     this.radius=r;
     this.body=Bodies.circle(x,y,r,options);
     this.image=loadImage("paper.png")
     World.add(world,this.body)
 }   

 display(){
     var pos=this.body.position;
imageMode(CENTER);
image(this.image,pos.x,pos.y,this.radius,this.radius)
 }
}