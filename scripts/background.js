class World
{
  constructor()
  {
    this.gameType = "";
    this.gravity = 3;
    this.gameSpeed = 8;
    this.gameFrame = 0;
    this.ground = CANVAS_HEIGHT-250;
  }

  createBackground()
  {
    let image = new Image();
    image.src = "images/backgrounds/background4.png";
    return image;
  }

  leave()
  {
    pauseMusic();
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    cancelAnimationFrame(gameLoop);
    startScreen.style.display = "flex";
    breakScreen.style.display = "none";
    GAME_STATUT = "play";
  }

  restart()
  {
    WORLD = new World();
    let image = WORLD.createBackground();
    BACKGROUND = new Background(image)
    character = new Character();
    characterImage = new Image();
  }

  play()
  {
    if (GAME_STATUT == "play")
    {
      playMusic();
      startScreen.style.display = "none";
      breakScreen.style.display = "none";
      requestAnimationFrame(gameLoop);
      WORLD.gameFrame++;
    }
    else
    {
      breakScreen.style.display = "flex";
      cancelAnimationFrame(gameLoop);
    }
  }

}

class Background extends World
{
  constructor(image)
  {
    super();
    this.x = 0;
    this.x2 = CANVAS_WIDTH;
    this.backgroundImage = image;
  }

  moveBackground()
  {
    ctx.drawImage(this.backgroundImage, this.x, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(this.backgroundImage, this.x2, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    if (this.x < -CANVAS_WIDTH) this.x = CANVAS_WIDTH + this.x2 - this.gameSpeed;
    else this.x -= this.gameSpeed;
    if (this.x2 < -CANVAS_WIDTH) this.x2 = CANVAS_WIDTH + this.x - this.gameSpeed;
    else this.x2 -= this.gameSpeed
  }

  reset()
  {
    this.x = 0;
    this.x2 = CANVAS_WIDTH;
  }
}
