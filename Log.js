class Log extends Baseclass {
    constructor(x, y, height, angle) {
    
      super(x,y,15,height,angle)
      this.img = loadImage("sprites/wood2.png")
      Matter.Body.setAngle(this.body, angle);
    }
  };
  