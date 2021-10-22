let spells = [];

class Spell
{
  constructor(shape)
  {
    this.shape = shape;
    this.spriteIndex = 0;
  }

  draw()
  {
    if (this.spriteIndex > this.spriteNumber) this.spriteIndex = 0;
    let image = new Image();
    image.src = this.imageLink + this.spriteIndex + ".png";
    ctx.drawImage(image, this.x, this.y, this.width, this.height)
    this.spriteIndex++;
  }
}

class MagicSpell extends Spell
{
  constructor()
  {
    super()
    this.x = mouse.x;
    this.y = mouse.y;
    this.imageLink = "images/spells/normal/1_";
    this.spriteNumber = 59;
    this.width = 150;
    this.height = 150;
    this.speed = 8;
  }

  shoot()
  {
    this.x -= WORLD.gameSpeed;
    this.y += this.speed;
  }
}

class FireSpell extends Spell
{
  constructor()
  {
    super()
    this.x = character.x + character.width/2;
    this.y = character.y + character.height/2;
    this.imageLink = "images/spells/fire/1_";
    this.spriteNumber = 59;
    this.width = 150;
    this.height = 150;
    this.mouseX = mouse.x;
    this.mouseY = mouse.y;
    this.speed = 10;
  }

  shoot()
  {
    this.y -= this.speed;
    this.x += this.speed;
  }

  bigShoot()
  {
    this.y -= this.speed;
    this.x += this.speed;
    this.radius = 20;
  }

}

class IceSpell extends Spell
{
  constructor()
  {
    super()
    this.x = character.x + character.width/2;
    this.y = character.y;
    this.mouseX = mouse.x;
    this.mouseY = mouse.y;
    this.spriteNumber = 59;
    this.width = 150;
    this.height = 150;
    this.speed = 10;
    this.imageLink = "images/spells/ice/1_";
  }

  shoot()
  {
    if (monsters.length != 0) {
      let first = getFirstMonster();
      if (this.x > first) {
      }
    }
    this.x += this.speed;
  }
}



function getFirstMonster()
{
  let monstersPositionX = [];
  for (let i = 0; i < monsters.length; i++)
  {
    monstersPositionX.push(monsters[i].x);
  }
  let firstMonster = Math.min.apply(null, monstersPositionX)
  return firstMonster;
}
