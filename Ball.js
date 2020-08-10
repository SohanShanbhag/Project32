class Ball{
    constructor(x,y,radius){
        var options = {
            isStatic: false,
            density: 5.1,
            stiffness: 0.4
        }
        
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.image = loadImage('download.png');

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        ellipseMode(CENTER);
        fill("white")
        image(this.image, pos.x,pos.y,50,50);
        pop();
    }
}