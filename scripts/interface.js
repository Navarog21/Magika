  const startScreen = document.querySelector('#startScreen');
const levelButtons = document.querySelectorAll('.level');
const restartButton = document.querySelector('#restartButton');
const leaveButton = document.querySelector('#leaveButton');
const creditsButton = document.querySelector('#creditsButton');
const creditsContainer = document.querySelector('#creditsContainer');
const breakScreen = document.querySelector('#breakScreen');
const controls = document.querySelector('#controls');


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

      for (let i = 0; i < 75; i++)
      {
        projectiles.push(new Projectile());
      }

      for (let i = 0; i < 4; i++)
      {
        platforms.push(new Platform());
      }
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
