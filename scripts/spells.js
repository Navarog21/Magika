let spells = [];

class Spell
{
  constructor(shape)
  {
    this.shape = shape;
  }
}

class MagicSpell extends Spell
{
  constructor()
  {
    super()
    this.x = mouse.x;
    this.y = mouse.y;
    this.width = 50;
    this.height = 50;
    this.speed = 8;
  }

  draw()
  {
    ctx.fillStyle = "purple";
    ctx.fillRect(this.x, this.y, this.width, this.height);
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
    this.mouseX = mouse.x;
    this.mouseY = mouse.y;
    this.radius = 7;
    this.speed = 10;
  }

  draw()
  {
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
    ctx.fill();
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
    this.y = character.y + character.height/2;
    this.mouseX = mouse.x;
    this.mouseY = mouse.y;
    this.width = 70;
    this.height = 10;
    this.speed = 15;
  }

  draw()
  {
    ctx.beginPath();
    ctx.fillStyle = "cyan";
    ctx.fillRect(this.x, this.y, this.width, this.height);
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
