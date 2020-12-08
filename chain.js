class Chain {
    constructor(bodyA,bodyB){
     var meme ={
         bodyA:bodyA,
         bodyB:bodyB,
         stiffness:0.04,
         length:5
     }

        this.chain = Constraint.create(meme);
World.add(world,this.chain)
    }

display(){
var pointA = this.chain.bodyA.position;
var pointB = this.chain.bodyB.position

    line(pointA.x,pointA.y,pointB.x,pointB.y)
}

}


