function moveBackground()
{
  console.log(CANVAS_WIDTH);
  ctx.drawImage(background, x, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.drawImage(background, x2, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  if (x < -CANVAS_WIDTH) x = CANVAS_WIDTH + x2 - gameSpeed;
  else x -= gameSpeed;
  if (x2 < -CANVAS_WIDTH) x2 = CANVAS_WIDTH + x - gameSpeed;
  else x2 -= gameSpeed
}
