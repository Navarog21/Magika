class Monster
{
  constructor()
  {
    this.x = getRandomNumber(CANVAS_WIDTH+100, CANVAS_WIDTH*2)
    this.y = ground + 90;
    this.width = 50;
    this.height = 50;
    this.speed = 10;
    this.cadence = 4000;
    this.image = "image";
    this.number = 5;
  }

  draw()
  {
    this.x -= this.speed;
    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  attack()
  {
    let projectile = new Projectile(this.x, this.y);
  }
}

function getRandomNumber(min, max)
{
  const number = Math.floor(Math.random() * (CANVAS_WIDTH*2 - CANVAS_WIDTH+100) + CANVAS_WIDTH+100);
  return number;
}

class Projectile
{
  constructor(x, y)
  {
    this.x = x;
    this.y = y;
    this.cadence = 2000;
  }

  draw()
  {
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.arc(this.x, this.y, 7, 0, Math.PI*2);
  }
}
