class Box{
    constructor(x,y,width,height){
        var options = {
            'restitiution':0.8,
            'friction':1.0,
            'density':1.0,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.shade = 255
        World.add(world,this.body);

    }
  

    display(shapeColor){
        var angle=this.body.angle;
        var pos = this.body.position;
        
        if(this.body.speed < 8){
            this.shapeColor = shapeColor;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            rectMode(CENTER);
            stroke("black");
            strokeWeight(4);
            fill(shapeColor);
            rect(0,0,this.width,this.height);
            pop();

        }else{
            World.remove(world,this.body); 
            push();
            this.shade = this.shade - 5;
            tint(255,this.shade);
            pop();
        }
    }

    score() {
        if(this.shade < 0 && this.shade > -105){
            score = score + 1;
        }
      }
    
}

   
  