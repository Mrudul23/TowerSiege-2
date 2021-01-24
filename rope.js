class Rope{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:20,
        }
        this.pointB = pointB;
        this.body = Constraint.create(options);
        World.add(world,this.body);
    }

    fly(){
        this.body.bodyA = null;  
    }

    attach(){
        this.body.bodyA=polygon.body;
    }

    display(){
        if(this.body.bodyA){
            var pointA = this.body.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(6);
            stroke("grey");
            line(pointA.x,pointA.y+60,pointB.x,pointB.y);
            pop();
        }
    }
}