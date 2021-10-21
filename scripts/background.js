class World
{
  constructor()
  {
    this.gameType = "";
    this.gravity = 3;
    this.gameSpeed = 8;
    this.ground = CANVAS_HEIGHT-250;
  }

  create()
  {
    const background = new Background();
    background.src = this.backgroundImage;
    gameLoop();
  }

}

class Background extends World
{
  constructor()
  {
    this.x = 0;
    this.x2 = CANVAS_WIDTH;
    this.backgroundLink = "images/backgrounds/background1.png"
    this.backgroundImage = new Image();
  }

  moveBackground()
  {
    ctx.drawImage(this.backgroundImage, this.x, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(this.backgroundImage, this.x2, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    if (x < -CANVAS_WIDTH) x = CANVAS_WIDTH + x2 - gameSpeed;
    else x -= gameSpeed;
    if (x2 < -CANVAS_WIDTH) x2 = CANVAS_WIDTH + x - gameSpeed;
    else x2 -= gameSpeed
  }
}
