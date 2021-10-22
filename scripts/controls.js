class Controls
{

}


let second,time;

canvas.addEventListener('mousedown',(e) =>
{
  time = Date.now();
})

canvas.addEventListener('mouseup',(e) =>
{
  let time2 = Date.now();
  second = (time2 - time)/1000
  console.log(second)
})

canvas.addEventListener('click',(e) =>
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

  // Flèche de gauche
  if (event.keyCode == 37)
  {
    character.moveLeft();
  }

  // Flèche de droite
  if (event.keyCode == 39)
  {
    character.moveRight();
  }

  if (e.key == "Escape")
  {
    if (GAME_STATUT == "paused") {
      GAME_STATUT = "play";
      WORLD.play();
    }
    else {
      GAME_STATUT = "paused";
    }
  }
})
