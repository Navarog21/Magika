class World
{
  constructor(level)
  {
    this.gameType = "";
    this.gravity = 3;
    this.gameSpeed = 8;
    this.gameFrame = 0;
    this.ground = CANVAS_HEIGHT-125;
    this.level = level;
    this.gameFrame = 0;
  }

  createBackground()
  {
    let image = new Image();
    image.src = "images/backgrounds/background" + this.level + ".png";
    return image;
  }

  leave()
  {
    stopMusic();
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
    gameLoop();
    playMusic();
    startScreen.style.display = "none";
  }

  break()
  {
    stopMusic();
    breakScreen.style.display = "flex";
    cancelAnimationFrame(gameLoop);
  }

  gameOver()
  {
    stopMusic();
    breakScreen.style.display = "flex";
    cancelAnimationFrame(gameLoop);
  }

}

class Background extends World
{
  constructor(image)
  {
    super();
    this.x = 0;
    this.x2 = CANVAS_WIDTH;
    this.y = 0;
    this.y2 = -CANVAS_HEIGHT;
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

  snow()
  {
    let image = new Image();
    image.src = "images/backgrounds/snow.png";
    ctx.drawImage(image, this.x, this.y, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(image, this.x, this.y2, CANVAS_WIDTH, CANVAS_HEIGHT)
    if (this.y > CANVAS_HEIGHT) this.y = -CANVAS_HEIGHT;
    else this.y += this.gameSpeed;
    if (this.y2 > CANVAS_HEIGHT) this.y2 = -CANVAS_HEIGHT;
    else this.y2 += this.gameSpeed;
  }

  reset()
  {
    this.x = 0;
    this.x2 = CANVAS_WIDTH;
  }
}
