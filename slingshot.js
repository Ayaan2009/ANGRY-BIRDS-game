class SlingShot {
    constructor(bird, point) {
        var options = {
            bodyA: bird,
            pointB: point,
            length: 2,
            stiffness: 0.2
        }
        this.body = Constraint.create(options);
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");

        World.add(world, this.body);
    }

    //null is datatype in JS, practically empty
    fly(){
       this.body.bodyA = null; 
    }
    attach(bird){
        this.body.bodyA = bird;
    }

    display() {

        //Displaying the image
        image(this.sling1, 200, 20);
        image(this.sling2, 170, 20);
      //  image(this.sling3, 0, 0);

        if (this.body.bodyA){
            var posA = this.body.bodyA.position;
            var posB = this.body.pointB;
            push ();
            stroke("#301608");
            strokeWeight(4);
            line(posA.x, posA.y, posB.x - 10, posB.y); 
            pop()

        }
        //Line segment has two points start(x1,y1) & end,(x2,y2)
      
      
    }
}