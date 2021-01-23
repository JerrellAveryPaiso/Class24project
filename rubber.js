class Rubber {
    constructor(x, y) {
      var options = {
        restitution:0.3,
        friction:5,
        density:1
      };
      this.body = Bodies.circle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('black')
      fill('blue')
      rectMode(CENTER)
      ellipse(56, 46, 55, 55);
      Matter.Bodies.circle(x, y, 40, options, maxSides)
      pop();
    };
  };