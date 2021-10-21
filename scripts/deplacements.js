let spellSound = ['sounds/normalAttack', "sounds/fireImpact", "sounds/iceAttack"]
function moveBackground()
{
  ctx.drawImage(background, x, 0);
  ctx.drawImage(background, x2, 0)
  if (x < -CANVAS_WIDTH) x = CANVAS_WIDTH + x2 - gameSpeed;
  else x -= gameSpeed;
  if (x2 < -CANVAS_WIDTH) x2 = CANVAS_WIDTH + x - gameSpeed;
  else x2 -= gameSpeed
}

class Object
{
  constructor()
  {
    this.x = Math.floor(Math.random() * CANVAS_WIDTH * 2);
    this.y = ground;
  }

  draw()
  {
    ctx.fillStyle = "yellow";
    ctx.fillRect(this.x, this.y, 100, 100);
  }
}


class Character
{
  constructor()
  {
    this.x = 200;
    this.y = ground;
    this.width = 200;
    this.height = 200;
    this.shape = 1; // basic, feu et glace
    this.movementType = "3_RUN";
    this.spriteIndex = 0;
    this.attackStatut = false;
    this.movementIndex = 0;
    this.jump = false;
    this.fall = false;
    this.jumping = 20;
    this.falling = 30;
  }

  draw()
  {
    if (gameFrame == 5){
      this.spriteIndex++;
      gameFrame = 0;
    }
    if (this.spriteIndex > 4) this.spriteIndex = 0;
    characterImage.src = "images/sprites/" + this.shape + "/" + this.movementType + "_00" + this.spriteIndex + ".png";
    ctx.drawImage(characterImage, this.x, this.y, this.width, this.height)

    if (this.attackStatut == true)
    {
      this.movementIndex++
      if (this.movementIndex > 40 ) {
        this.movementType = "3_RUN";
        this.movementIndex = 0;
        this.attackStatut = false;
      }
    }
  }

  attack()
  {
    let audio = new Audio(spellSound[this.shape]);
    audio.play();
    this.attackStatut = true;
    this.spriteIndex = 0;
    let spell;
    switch (this.shape)
    {
      case 0:
      spell = new MagicSpell(this.shape);
      this.movementType = "5_ATTACK";
      magicSpells.push(spell);
      break;

      case 1:
      spell = new FireSpell(this.shape);
      this.movementType = "5_ATTACK";
      fireSpells.push(spell);
      drawProjectile()
      break;

      case 2:
      spell = new IceSpell(this.shape, mouse.x, mouse.y);
      this.movementType = "5_ATTACK";
      iceSpells.push(spell);
      drawProjectile()
      break;
    }
  }

  toJump()
  {
    let jump = setInterval((e) =>
    {
      if (this.jump == false && this.fall == false)
      {
        if (this.y > ground - 150) {
          this.y -= this.jumping;
        }
        else {
          this.y += this.falling;
          this.fall = true;
        }
      }

      if (this.fall == true)
      {
        if (this.y > ground) {
          this.jump = false;
          this.fall = false;
          clearInterval(jump)
        }
        else {
          this.y += this.falling;
        }
      }
    },10)
  }
}

function drawProjectile()
{
  ctx.fillStyle = "red";
  ctx.fillRect(this.x, this.y, 100, 100);
}
