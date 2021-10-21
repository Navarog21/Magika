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
    this.spellIndex = 0;
  }

  draw()
  {
    if (this.spellIndex == 59) {
      this.spellIndex = 0;
    }
    else {
      let image = new Image();
      image.src = "images/spells/1_" + this.spellIndex + ".png";
      ctx.rotate(Math.PI)
      ctx.drawImage(image,this.x, this.y, 150, 150)
      // ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
      this.spellIndex++;
    }

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
