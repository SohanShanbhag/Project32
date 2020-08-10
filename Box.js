var color = "";

class Box{
    constructor(x,y,width,height){
        var options = {
            isStatic:false
        }

        this.body = Bodies.rectangle(x,y,width, height, options);
        this.width = width;
        this.height = height;

        this.Visibility = 255;

        World.add(world, this.body);
    }

    display(){
        var speed = this.body.speed;
        var pos = this.body.position
    
        if(speed < 5){
            push();
            strokeWeight(5);
            stroke("red");
            rect(pos.x,pos.y,this.width,this.height);
            pop();
        }
    
        else{
            World.remove(world, this.body);
            push();
            tint(255, this.Visibility);
            this.Visibility = this.Visibility - 5;
            pop();
        }
    }

    score() {

        if(this.Visibility < 0 && this.Visibility > -1005) {
      
          score ++;
      
        } 
      }
};