class BaseClass{
    constructor(x, y, width, height, angle){
        var options = {
            'restitution' : 1,
            'friction' : 0.8,
            'density' : 1
            
        }
        //body property of the object we are going to create using this blueprint/class
        //all properties will be assigned to objects that we create using box class
        this.body =  Matter.Bodies.rectangle(x, y, width, height, [options]);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/Base.png");
        World.add(world, this.body);
    }

    //methods/member function of class)
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push ();
        translate (pos.x, pos.y);
        rotate (angle);
        imageMode (CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop ();

    }
}