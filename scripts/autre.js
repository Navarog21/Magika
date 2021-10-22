document.addEventListener('resize', () =>
{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  CANVAS_WIDTH = window.innerWidth;
  CANVAS_HEIGHT = window.innerHeight;
})

function getRandomNumber(min, max)
{
  const number = Math.floor(Math.random() * (max - min) + min);
  return number;
}
