class Rope{
	constructor(body1,body2)
	{
		var options={
			bodyA:body1,
			pointB:body2,
			stiffness:2.0,
			length:200
        }
        
		//console.log(options);
		this.rope = Constraint.create(options)
		World.add(world,this.rope)
    }
    
    fly(){
        this.rope.bodyA = null;
    }

	display(){
		var point1 = this.rope.bodyA.position
		var point2 = this.rope.pointB
		push()
		stroke("white")
		strokeWeight(4)
		line(point1.x,point1.y,point2.x,point2.y)
		pop()

	}

}