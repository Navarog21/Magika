  const startScreen = document.querySelector('#startScreen');
const levelButtons = document.querySelectorAll('.level');
const restartButton = document.querySelector('#restartButton');
const leaveButton = document.querySelector('#leaveButton');
const creditsButton = document.querySelector('#creditsButton');
const creditsContainer = document.querySelector('#creditsContainer');
const breakScreen = document.querySelector('#breakScreen');
const controls = document.querySelector('#controls');


let character;
let characterImage;
let monsters = [];
const projectiles = [];
const platforms = [];

window.addEventListener('load', () =>
{
  levelButtons.forEach((button, i) =>
  {
    button.addEventListener('click',() =>
    {
      let index = i+1;
      document.body.style.backgroundImage = "url('images/backgrounds/background" + index + ".png')";
      WORLD = new World(i+1); // Niveau
      character = new Character();
      characterImage = new Image();
      WORLD.play();

      setInterval(function()
      {
        for (let i = 0; i < 10; i++)
        {
          projectiles.push(new Projectile());
        }
      },4000)
      
    })
  });
})

creditsButton.addEventListener('click', () =>
{
  creditsContainer.style.display = "grid"
})

leaveButton.addEventListener('click', () =>
{
  WORLD.leave();
})

restartButton.addEventListener('click', () =>
{
  WORLD.play();
})
