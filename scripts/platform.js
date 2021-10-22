class Platform
{
  constructor()
  {
    this.x = getRandomNumber(0, CANVAS_WIDTH);
    this.y = getRandomNumber(50, CANVAS_HEIGHT - 20);
    this.width = 200;
    this.height = 10;
    this.collision = false;
  }

  draw()
  {
    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  getCollision()
  {
    if (character.y+character.height < this.y && character.x > this.x && character.x < this.x+this.width) {
      character.y = this.y;
    }
  }
}
