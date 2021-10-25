document.addEventListener('resize', () =>
{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  CANVAS_WIDTH = window.innerWidth;
  CANVAS_HEIGHT = window.innerHeight;
})

function getRandomNumber(min, max)
{
  const number = Math.round(Math.random() * (max - min) + min);
  return number;
}
