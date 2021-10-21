let backgroundMusic = new Audio('sounds/glory.mp3')
let musicButton = document.querySelector('#musicButton');

musicButton.addEventListener('click', () =>
{
  let icon = pauseMusic();
  musicButton.src = icon;
})

function playMusic()
{
  backgroundMusic.play();
}
    
function pauseMusic()
{
  if (backgroundMusic.muted == true) {
    backgroundMusic.muted = false;
    return "images/icones/musique.png";
  }
  else {
    backgroundMusic.muted = true;
    backgroundMusic.currentTime = 0;
    return "images/icones/muet.png";
  }
}
