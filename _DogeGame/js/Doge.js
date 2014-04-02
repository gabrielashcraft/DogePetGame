Doge.prototype = new lib.Doge();

function Doge(color)
{
	self = this;

	this.color = color;
	this.instance.gotoAndStop('idle');

	this.hunger = 500;
	this.happiness = 500;
	this.energy = 500;

	this.setAlive(true);

	return this;
}

Doge.prototype.checkStatus = function ()
{
	if ((this.hunger == 0) || (this.happiness == 0) || (this.energy == 0))
	{
		this.setAlive(false);
	}
}

Doge.prototype.feed = function (food)
{
	this.hunger += food;
	if (this.hunger > 1100)
	{
		this.hunger = 1100;
	}
	this.dispatchEvent('HUNGER_CHANGED');
}

Doge.prototype.beHappy = function (happy)
{
	this.happiness += happy;
	this.dispatchEvent('HAPPINESS_CHANGED');
}

Doge.prototype.energize = function (rest)
{
	this.energy += rest;
	this.dispatchEvent('ENERGY_CHANGED');
}

Doge.prototype.setAlive = function (alive, hunger, happiness, energy)
{
	this.alive = alive;
	if (this.alive)
	{
		this.startDecay();
	}
	else
	{
		this.instance.gotoAndStop('dead');
		clearInterval(this.decayInterval);
		this.dispatchEvent('DOGE_DEAD');
	}
}

Doge.prototype.startDecay = function ()
{
	this.hungerRate = -2;

	this.decayInterval = setInterval(this.decayStatus, 1000)
}

Doge.prototype.decayStatus = function (event)
{
	self.feed(self.hungerRate);

	self.checkStatus();
}