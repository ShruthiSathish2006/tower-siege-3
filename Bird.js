class Bird extends BaseClass {
    constructor(x,y){
      super(x,y,70,70);
      World.add(world,this.body)
    }
  
    display() {
       fill("pink");
       var pos =this.body.position;
       rectMode(CENTER);
       rect(pos.x, pos.y, this.width, this.height);
     
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
      super.display();
    }
  }