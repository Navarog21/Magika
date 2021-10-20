class Spell
{
  constructor(shape)
  {
    this.shape = shape;
    this.falling = 4;
    this.speed = 8;
  }
}

class MagicSpell extends Spell
{
  constructor()
  {
    super()
    this.x = mouse.x;
    this.y = mouse.y;
    this.width = 50;
    this.height = 50;
  }

  draw()
  {
    ctx.fillStyle = "purple";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  fall()
  {
    this.x -= gameSpeed;
    this.y += this.falling;
  }
}

class FireSpell extends Spell
{
  constructor()
  {
    super()
    this.x = character.x + character.width/2;
    this.y = character.y + character.height/2;
    this.mouseX = mouse.x;
    this.mouseY = mouse.y;
    this.radius = 7;
  }

  draw()
  {
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
    ctx.fill();
  }

  shoot()
  {
    this.x += this.speed;
    this.y -= this.speed;
  }
}

class IceSpell extends Spell
{
  constructor()
  {
    super()
  }

  draw()
  {
    ctx.beginPath();
    ctx.fillStyle = "purple";
    ctx.fillRect(this.x-this.width/2, this.y-this.height/2, this.width, this.height);
  }
}
