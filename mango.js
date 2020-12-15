class Mango{
    constructor(x,y){
        var options ={
            isStatic : true,
            restitution : 0,
            fricion : 1
        }
        this.radius = 50
        this.image = loadImage("Images/mango.png")
        this.body = Bodies.circle(x,y,this.radius,options)
        World.add(world,this.body)

    }
    display(){
        push()
        var pos = this.body.position
        translate(pos.x,pos.y)
        imageMode(CENTER)
        image(this.image,0,0,this.radius,this.radius)
        pop()
        
    }
}