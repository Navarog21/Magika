
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
    this.width = CANVAS_WIDTH/11;
    this.height = CANVAS_HEIGHT/6;
    this.x = 200;
    this.y = WORLD.ground - this.height;
    this.shape = 2; // basic, feu et glace
    this.movementType = "1_IDLE";
    this.spriteIndex = 0;
    this.speed = 75;
    this.attackStatut = false;
    this.movementIndex = 0;
    this.jump = false;
    this.fall = false;
    this.jumping = 20;
    this.falling = 30;
  }

  draw()
  {
    if (WORLD.gameFrame == 5){
      this.spriteIndex++;
      WORLD.gameFrame = 0;
    }
    if (this.spriteIndex > 4) this.spriteIndex = 0;
    characterImage.src = "images/sprites/" + this.shape + "/" + this.movementType + "_00" + this.spriteIndex + ".png";
    ctx.drawImage(characterImage, this.x, this.y, this.width, this.height)

    if (this.attackStatut == true)
    {
      this.movementIndex++
      if (this.movementIndex > 40 ) {
        this.movementType = "1_IDLE";
        this.movementIndex = 0;
        this.attackStatut = false;
      }
    }
  }

  attack()
  {
    new SoundEffect().soundAttack(this.shape)
    this.attackStatut = true;
    this.spriteIndex = 0;
    let spell;
    switch (this.shape)
    {
      case 0:
      spell = new MagicSpell(this.shape);
      this.movementType = "5_ATTACK";
      spells.push(spell);
      break;

      case 1:
      spell = new FireSpell(this.shape);
      this.movementType = "5_ATTACK";
      spells.push(spell);
      break;

      case 2:
      spell = new IceSpell(this.shape, mouse.x, mouse.y);
      this.movementType = "5_ATTACK";
      spells.push(spell);
      break;
    }
  }

  toJump()
  {
    let jump = setInterval((e) =>
    {
      if (this.jump == false && this.fall == false)
      {
        if (this.y > WORLD.ground - 150) {
          this.y -= this.jumping;
        }
        else {
          this.y += this.falling;
          this.fall = true;
        }
      }
      if (this.fall == true)
      {
        if (this.y > WORLD.ground) {
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

  moveLeft()
  {
    if (this.x < 0) {
      return
    }
    else {
      this.x -= this.speed;
    }
  }

  moveRight()
  {
    if (this.x > CANVAS_WIDTH-character.width) {
      return
    }
    else {
      this.x += this.speed;
    }

  }

}
