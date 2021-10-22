const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let CANVAS_WIDTH = canvas.width;
let CANVAS_HEIGHT = canvas.height;

let WORLD;
let GAME_STATUT = "play";
let BACKGROUND = new Background()
let character;
let characterImage;
let monsters = [];
const projectiles = [];
const platforms = [];

const mouse = {
  x: 0,
  y: 0
}

let gameLoop = () =>
{
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  BACKGROUND.snow();
  character.draw();

  projectiles.forEach((projectile) =>
  {
    projectile.draw();
    projectile.fall();
  });

  platforms.forEach((platform) =>
  {
    platform.draw();
    platform.getCollision();
  });

  spells.forEach((spell) => {
    spell.shoot();
    spell.draw();
  });
  WORLD.gameFrame++;
  requestAnimationFrame(gameLoop);

}
