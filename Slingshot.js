class SlingShot{
  constructor(bodyA, pointB){
      var options = {
          bodyA: bodyA,
          pointB: pointB,
          stiffness: 0.04,
          length: 1
      }
      this.pointB = pointB
      this.Sling= Constraint.create(options);
      World.add(world, this.Sling);
  }

sly(){
this.slying.bodyA=null;

}
    display(){
          
         
      
          if(this.slying.bodyA){
            var pointA = this.Sling.bodyA.position;
            var pointB = this.pointB;

          }

          if(this.slying.bodyB){
            var pointA = this.Sling.bodyA.position;
            var pointB = this.pointB;

          }

          strokeWeight(4);
          stroke("turquoise")
          line(pointA.x, pointA.y, pointB.x, pointB.y);
  }
}
