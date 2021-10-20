const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = window.innerWidth;
const CANVAS_HEIGHT = canvas.height = window.innerHeight;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.addEventListener('resize', () =>
{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
})

let MUSIC = new Audio('sounds/glory.mp3')
window.addEventListener('click', (e) =>
{
  MUSIC.play();
})

let GAME_STATUT = "play";
const mouse = {
  x: 0,
  y:0
}

let magicSpells = [];
let fireSpells = [];
let iceSpells = [];

let ground = CANVAS_HEIGHT-250
let gameSpeed = 5;
let background = new Image();
let character = new Character();

let characterImage = new Image();

background.src = "images/backgrounds/background1.png";
let x = 0;
let x2 = CANVAS_WIDTH;


let runSpriteIndex = 0;
let movement = "run";
let monsters = [];


setInterval((e) =>
{
  for (let i = 0; i < 5; i++)
  {
    monsters.push(new Monster());
  }
},4000)

let gameFrame = 0;

let gameLoop = () =>
{
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  moveBackground();
  character.draw();

  for (let i = 0; i < magicSpells.length; i++)
  {
    magicSpells[i].draw();
    magicSpells[i].fall();
  }

  for (let i = 0; i < fireSpells.length; i++)
  {
    fireSpells[i].draw();
    fireSpells[i].shoot();
  }

  monsters.forEach((monster, i) => {
    monster.draw();
    monster.x -= monster.speed;
  });

  playGame();
}
gameLoop();



/*ATTAQUE*/
window.addEventListener('click',(e) =>
{
  mouse.x = e.clientX;
  mouse.y = e.clientY;
  character.attack();
})

window.addEventListener('keydown',(e) =>
{
  e.preventDefault();
  if (e.key == "Tab")
  {
    let audio = new Audio("sounds/swap.wav")
    audio.play();
    if (character.shape == 2) character.shape = 0;
    else character.shape++;
  }

  if (e.keyCode == 32)
  {
    character.toJump();
  }

  if (e.key == "Escape")
  {
    if (GAME_STATUT == "paused") {
      GAME_STATUT = "play";
      playGame();
    }
    else {
      GAME_STATUT = "paused";
    }
  }
})

function playGame()
{
  let breakScreen = document.querySelector('#breakScreen');
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
