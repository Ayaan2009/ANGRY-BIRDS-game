class Pig extends BaseClass {
  constructor(x, y) {
    super(x, y, 50, 50);
    this.image = loadImage("sprites/Pig.png");
    this.visibility = 255;
  }

  //to modify the way pig will look
  display() {

    if (this.body.speed < 3) {
      //still accessing what we defined in display method of parent class
      super.display();
    }
    else {
      push();
      World.remove(world, this.body);
      this.visibility = this.visibility - 5;

      tint(255, this.visibility);
      console.log("remove")
      image(this.image, this.body.position.x, this.body.position.y, 50,50);
      pop();
    }

  }
  score(){
      if (this.visibility < 0 && this.visibility > -1005){
        score++;

      }
  }


  // width and height is given in absolute no. because child's constructor does not have it
  // anything that is moving has Kinetic Energy(speed)
  // when we hit the pig it's speed is going to change
}