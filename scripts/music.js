let backgroundMusic = new Audio('sounds/glory.mp3')
let interfaceMusic = new Audio('sounds/interfaceMusic.ogg')
let musicButton = document.querySelector('#musicButton');

musicButton.addEventListener('click', () =>
{
  let icon = pauseMusic();
  musicButton.src = icon;
})

document.addEventListener('click', () =>
{

})

function playMusic()
{
  backgroundMusic.play();
}

function stopMusic()
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

class Sounds
{
  constructor()
  {
    this.volume = 10;
  }
}

class Music extends Sounds
{
  constructor()
  {

  }
}

let spellSound = ['sounds/normalAttack', "sounds/fireImpact", "sounds/iceAttack"]
class SoundEffect extends Sounds
{
  constructor()
  {
    super();
  }

  soundAttack(shape)
  {
    let audio = new Audio(spellSound[shape]);
    audio.play();
  }
}
