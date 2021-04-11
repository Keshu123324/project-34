class rope{
    constructor(body1,body2,x,y){
        this.x=x;
        this.y=y;
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.x,y:this.y}
        }
    
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;
                strokeWeight(3)
                line(pointA.x, pointA.y, pointB.x+this.x, pointB.y+this.y);
               
            }
        
        }
    