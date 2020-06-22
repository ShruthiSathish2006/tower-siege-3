class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.visibility = 255;
      
    }
  display(){
     if(this.body.speed<1){
      var pos =this.body.position;
    rectMode(CENTER); 
    fill("yellow");
    rect(pos.x, pos.y, this.width, this.height);

    }
    else{
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility - 5
      tint(255,this.visibility);
      rect(this.body, this.body.position.x, this.body.position.y, 50, 50);
      pop();
    }

  }
  score(){
    if(this.visibility < 0 && this.visibility > -1005)  {
    score = score + 1
    }
  }
}
















  
  