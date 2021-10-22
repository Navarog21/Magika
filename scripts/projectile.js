class Projectile
{
  constructor()
  {
    this.radius = 10;
    this.x = getRandomNumber(0, CANVAS_WIDTH)
    this.y = getRandomNumber(-5000, -10);
    this.speed = 6;
  }

  draw()
  {
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
    ctx.fill();
  }

  fall()
  {
    this.y += this.speed;
  }

}
