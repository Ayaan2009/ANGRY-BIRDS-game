class Bird extends BaseClass {
    constructor(x, y) {
        super(x, y, 50, 50)
        this.image = loadImage("sprites/Bird.png");
        this.smokeImg = loadImage("sprites/Smoke.png");
        //to store the changing position and loop over to print smoke dot
        this.trajectory = [];
    }

    display() {
        super.display(); // calling parents display
        //this.body.position.x = mouseX;
        //this.body.position.y = mouseY;ss
        var position = [this.body.position.x, this.body.position.y];
        if (this.body.position.x > 220 && this.body.speed > 10) {
            this.trajectory.push(position);    
        }
        

        // to do a task repeatedly
        // initialization; exit condition; increment/decrement
        for (var index = 0; index < this.trajectory.length; index++) {
            image ( this.smokeImg, this.trajectory[index][0], this.trajectory[index][1]  )
        }

    }

}