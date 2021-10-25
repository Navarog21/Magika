let point = 0;
let type = ["gift", 'houx'];

class Projectile
{
  constructor()
  {
    this.radius = 10;
    this.x = getRandomNumber(0, CANVAS_WIDTH)
    this.y = getRandomNumber(-5000, -10);
    this.type = type[getRandomNumber(0, 1)]
    this.speed = 6;
    this.width = 50;
    this.height = 50;
  }

  draw()
  {
    console.log(this.type)
    let image = new Image();
    if (this.type == "gift") image.src = "images/icones/gift.png"
    else image.src = "images/icones/houx.png"
    ctx.beginPath();
    ctx.drawImage(image, this.x, this.y, this.width, this.height)
  }

  getCollision(i)
  {
    if (this.y >= character.y - character.height/2 && this.x >= character.x && this.x <= character.x + character.width)
    {
      let sound = new SoundEffect();
      sound.getObject();
      point++;
      delete projectiles[i];
      this.width = 0;
      this.height = 0;
    }

    if (this.y <= WORLD.ground - this.height)
    {
      this.y += this.speed;
    }
    else
    {
      delete projectiles[i];
    }
  }
}

class Houx
{
  constructor()
  {

  }
}

class Gift
{
  constructor()
  {

  }
}
