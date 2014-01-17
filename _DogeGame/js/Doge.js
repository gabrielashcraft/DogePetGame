Doge.prototype = new createjs.Container();

function Doge(age, color, sprite, alive)
{
	createjs.Container.call(this);
	this.sprite = new createjs.Bitmap(sprite)
	this.addChild(this.sprite);
	this.width = this.sprite.image.width;
	this.height = this.sprite.image.height;
	this.age = age;
	this.color = color;
	this.setAlive(alive);

	return this;
}

Doge.prototype.setStatus = function (health, hunger, energy)
{
	this.health = health ? health : 100;
	this.hunger = hunger ? hunger : 100;
	this.energy = energy ? energy : 100;
}

Doge.prototype.setAlive = function (alive, health, hunger, energy)
{
	this.alive = alive;
	if (this.alive)
	{
		this.setStatus(health, hunger, energy);
	}
}