const startScreen = document.querySelector('#startScreen');
const playButton = document.querySelector('#playGame');
const restartButton = document.querySelector('#restartButton');
const leaveButton = document.querySelector('#leaveButton');
const breakScreen = document.querySelector('#breakScreen');
const controls = document.querySelector('#controls');

leaveButton.addEventListener('click', () =>
{
  WORLD.leave();
})

restartButton.addEventListener('click', () =>
{
  WORLD.play();
})
