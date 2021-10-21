const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let CANVAS_WIDTH = canvas.width;
let CANVAS_HEIGHT = canvas.height;

let WORLD;

const mouse = {
  x: 0,
  y: 0
}

const startScreen = document.querySelector('#startScreen');
const playButton = document.querySelector('#playGame');
const breakScreen = document.querySelector('#breakScreen');
const controls = document.querySelector('#controls');

let monsters = [];

window.addEventListener('load', () =>
{
  playButton.addEventListener('click',() =>
  {
    WORLD = new World();
    startScreen.style.display = "none";
    // WORLD.create();
    setInterval((e) =>
    {
      for (let i = 0; i < 5; i++)
      {
        let monster = new Monster();
        monster.draw();
        monster.attack();
      }
    },4000)
  })
})

let GAME_STATUT = "play";

let magicSpells = [];
let fireSpells = [];
let iceSpells = [];

let character = new Character();

let characterImage = new Image();

let gameFrame = 0;

let gameLoop = () =>
{
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  WORLD.moveBackground();
  character.draw();

  for (let i = 0; i < magicSpells.length; i++)
  {
    magicSpells[i].draw();
    magicSpells[i].shoot();
  }

  for (let i = 0; i < fireSpells.length; i++)
  {
    if (second > 1) {
      fireSpells[i].bigShoot();
    }
    else {
      fireSpells[i].shoot();
    }
    fireSpells[i].draw();
  }

  for (let i = 0; i < iceSpells.length; i++)
  {
    iceSpells[i].draw();
    iceSpells[i].shoot();
  }
  playGame();
}


function playGame()
{
  if (GAME_STATUT == "play")
  {
    breakScreen.style.display = "none";
    requestAnimationFrame(gameLoop);
    gameFrame++;
  }
  else
  {
    breakScreen.style.display = "flex";
    cancelAnimationFrame(gameLoop);
  }
}
