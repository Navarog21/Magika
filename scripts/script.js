const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let CANVAS_WIDTH = canvas.width;
let CANVAS_HEIGHT = canvas.height;

let WORLD;
let GAME_STATUT = "play";
let BACKGROUND;
let character;
let characterImage;
let monsters = [];

const mouse = {
  x: 0,
  y: 0
}

window.addEventListener('load', () =>
{
  playButton.addEventListener('click',() =>
  {
    WORLD = new World();
    character = new Character();
    characterImage = new Image();
    WORLD.play();
  })
})

let gameLoop = () =>
{
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  character.draw();

  spells.forEach((spell) => {
    spell.draw();
    spell.shoot();
  });

  WORLD.play();
}
