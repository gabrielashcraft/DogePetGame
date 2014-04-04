Doge.prototype = new lib.Doge();

function Doge(color)
{
	self = this;

	this.color = color;
	this.instance.gotoAndStop('idle');

	this.hunger = 500;
	this.happiness = 500;
	this.energy = 500;
	this.coins = 10;

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
	self.hunger = inRange(self.hunger);
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
	self.happiness += happy;
	self.happiness = inRange(self.happiness);
	self.dispatchEvent('HAPPINESS_CHANGED');
}

Doge.prototype.energize = function (rest)
{
	self.energy += rest;
	self.energy = inRange(self.energy);
	self.dispatchEvent('ENERGY_CHANGED');
}

Doge.prototype.mine = function ()
{
	self.isMining = true;
	self.instance.gotoAndStop('mining');
	self.instance.mining.gotoAndPlay(0);
	createjs.Ticker.addEventListener('tick', self.mineTick);
}

Doge.prototype.mineTick = function ()
{
	if (self.instance.mining.mine.currentFrame == self.instance.mining.mine.timeline.duration-1)
	{
		var coin = Math.ceil(Math.random()*3);
		self.coins += coin;
		self.dispatchEvent('COINS_CHANGED');

		self.energize(-5);
		self.feed(-5);
	}
}

Doge.prototype.stopMining = function ()
{
	createjs.Ticker.removeEventListener('tick', self.mineTick);
	self.instance.gotoAndStop('idle');
	self.isMining = false;
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

Doge.prototype.rest = function ()
{
	this.hungerRate = -1;
	this.sadnessRate = -1;
	this.tiredRate = 3;

	this.isResting = true;

	this.instance.gotoAndStop('resting');
	this.instance.getChildAt(0).gotoAndPlay(0);
}

Doge.prototype.wakeUp = function ()
{
	this.hungerRate = -2;
	this.sadnessRate = -2;
	this.tiredRate = -3;

	this.isResting = false;

	this.instance.gotoAndStop('idle');
}

function inRange(stat)
{
	if (stat > 1180)
	{
		stat = 1180;
	}
	if (stat < 0)
	{
		stat = 0;
	}
	return stat;
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