class ball{
    constructor(x,y,radius){
        var options ={
            density:1.2,
            restitution:1.7,
            friction:0.2
        }
        this.body = Bodies.circle(x,y,radius,options)
        this.radius=radius
        this.image = loadImage("paper.png");
        World.add(world,this.body)
    }
    splay(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        ellipse(0,0,this.radius,this.radius);
        pop()
    }
}