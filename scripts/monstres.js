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
}
