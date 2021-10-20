class Monster
{
  constructor()
  {
    this.x = getRandomNumber(CANVAS_WIDTH+100, CANVAS_WIDTH*2)
    this.y = ground;
    this.width = 50;
    this.height = 50;
    this.speed = 10;
  }

  draw()
  {

    console.log(this.x)
    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

function getRandomNumber(min, max)
{
  const number = Math.floor(Math.random() * (CANVAS_WIDTH*2 - CANVAS_WIDTH+100) + CANVAS_WIDTH+100);
  return number;
}
