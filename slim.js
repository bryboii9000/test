class Sline {
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB: {x:offsetX,y:offsetY}
        }
         
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    
    display(){
        
        push();
        stroke(3,50,150)
        strokeWeight(2);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();
    }
    }
    

