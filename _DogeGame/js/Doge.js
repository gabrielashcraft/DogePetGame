Doge.prototype = new lib.Doge();

function Doge(color)
{
	self = this;

	this.color = color;
	this.instance.gotoAndStop('idle');
	//this.instance.getChildAt(0).gotoAndPlay(0);

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
	self.hunger += food;
	if (self.hunger > 1100)
	{
		self.hunger = 1100;
	}
	if (food > 0)
	{
		self.beHappy(food/10);
		self.instance.gotoAndStop('eating');
		self.instance.getChildAt(0).gotoAndPlay(0);
		self.goIdle = setTimeout(function(){self.instance.gotoAndStop('idle'); self.dispatchEvent('ACTION_OVER');}, 2000);
	}
	self.dispatchEvent('HUNGER_CHANGED');
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

Doge.prototype.moonball = function ()
{
	self.instance.gotoAndStop('moonball');
	self.instance.getChildAt(0).gotoAndPlay(0);
	createjs.Ticker.addEventListener('tick', self.moonballTick);
}

Doge.prototype.moonballTick = function ()
{
	if (self.instance.getChildAt(0).currentFrame == self.instance.getChildAt(0).timeline.duration-1)
	{
		createjs.Ticker.removeEventListener('tick', self.moonballTick);
		self.instance.gotoAndStop('idle');
		self.beHappy(200);
		self.energize(-100);
		self.dispatchEvent('ACTION_OVER');
	}
}

// --------------- ALIVE STATS AND DECAY -----------------//
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
	this.sadnessRate = -2;
	this.tiredRate = -3;

	this.decayInterval = setInterval(this.decayStatus, 6000)
}

Doge.prototype.decayStatus = function (event)
{
	self.feed(self.hungerRate);
	self.beHappy(self.sadnessRate);
	self.energize(self.tiredRate);

	self.checkStatus();
}