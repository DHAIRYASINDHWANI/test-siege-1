class Block{
    constructor(x, y, width, height) {
   
        this.body = Bodies.rectangle(x, y,30,40, {restitution :0.5 });
        this.width = 30;
        this.height = 40;
        this.image = loadImage("Picture1.png");
        this.Visibility = 255;
        World.add(world, this.body);

      }
      display(){
      console.log(this.body.speed);
     if(this.body.speed < 3){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,30,40);
        pop();
     }else{
       World.remove(world, this.body);
        push();
        this.Visibility = this.Visibility - 5;
        tint(255,this.Visibility);
       image(this.image,this.body.position.x,this.body.position.y,30,40);
       pop();
      }
}
}