Doge.prototype = new lib.Doge();

function Doge(color)
{
	self = this;

	this.color = color;
	this.instance.gotoAndStop('idle');

	this.hunger = 1000;
	this.happiness = 1000;
	this.energy = 1000;
	this.coins = 10;

	this.maxStats = 1999;
	this.lowStats = 400;

	this.setAlive(true);

	return this;
}

Doge.prototype.checkStatus = function ()
{
	if (this.hunger == 0)
	{
		this.setAlive(false);
	}
}

Doge.prototype.feed = function (food)
{
	self.hunger += food;
	self.hunger = self.inRange(self.hunger);
	if (food > 0)
	{
		self.beHappy(food/2);
		self.instance.gotoAndStop('eating');
		self.instance.eating.gotoAndPlay(0);
		self.goIdle = setTimeout(function(){self.instance.gotoAndStop('idle'); self.dispatchEvent('ACTION_OVER');}, 2000);
	}
	self.dispatchEvent('HUNGER_CHANGED');
}

Doge.prototype.beHappy = function (happy)
{
	self.happiness += happy;
	self.happiness = self.inRange(self.happiness);
	self.dispatchEvent('HAPPINESS_CHANGED');
}

Doge.prototype.energize = function (rest)
{
	self.energy += rest;
	self.energy = self.inRange(self.energy);
	self.dispatchEvent('ENERGY_CHANGED');
}

Doge.prototype.mine = function ()
{
	self.isMining = true;
	self.instance.gotoAndStop('mining');
	self.instance.mining.gotoAndPlay(0);
	self.instance.mining.mine.gotoAndPlay(0);
	createjs.Ticker.addEventListener('tick', self.mineTick);
}

Doge.prototype.mineTick = function ()
{
	if (self.instance.mining.mine.getCurrentLabel() == 'getCoin')
	{
		var coin = Math.ceil(Math.random()*3);
		self.earn(coin);

		self.energize(-3);
		self.feed(-3);

		if ((self.hunger <= self.lowStats) || (self.energy <= self.lowStats))
		{
			self.stopMining();
		}
	}
}

Doge.prototype.stopMining = function ()
{
	createjs.Ticker.removeEventListener('tick', self.mineTick);
	self.instance.gotoAndStop('idle');
	self.isMining = false;
	self.dispatchEvent('ACTION_OVER');
}

Doge.prototype.earn = function (coin)
{
	self.coins += coin;
	self.dispatchEvent('COINS_CHANGED');
}

Doge.prototype.moonball = function ()
{
	self.instance.gotoAndStop('moonball');
	self.instance.moonball.gotoAndPlay(0);
	createjs.Ticker.addEventListener('tick', self.moonballTick);
}

Doge.prototype.moonballTick = function ()
{
	if (self.instance.moonball.currentFrame == self.instance.moonball.timeline.duration-1)
	{
		createjs.Ticker.removeEventListener('tick', self.moonballTick);
		self.instance.gotoAndStop('idle');
		self.beHappy(400);
		self.energize(-200);
		self.dispatchEvent('ACTION_OVER');
	}
}

Doge.prototype.rest = function ()
{
	this.hungerRate = -1.5;
	this.sadnessRate = -1.5;
	this.tiredRate = 3;

	this.isResting = true;

	this.instance.gotoAndStop('resting');
	this.instance.resting.gotoAndPlay(0);
}

Doge.prototype.wakeUp = function ()
{
	this.hungerRate = -1.5;
	this.sadnessRate = -1.5;
	this.tiredRate = -1.5;

	this.isResting = false;

	this.instance.gotoAndStop('idle');
	self.dispatchEvent('ACTION_OVER');
}

Doge.prototype.sayNo = function ()
{
	this.instance.gotoAndStop('no');
	this.instance.no.gotoAndPlay(0);
	createjs.Ticker.addEventListener('tick', this.noTick)
}

Doge.prototype.noTick = function ()
{
	if (self.instance.no.currentFrame == self.instance.no.timeline.duration-1)
	{
		createjs.Ticker.removeEventListener('tick', self.noTick)
		self.instance.gotoAndStop('idle');
		self.dispatchEvent('ACTION_OVER');
	}
}

Doge.prototype.inRange = function (stat)
{
	if (stat > self.maxStats)
	{
		stat = self.maxStats;
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
	this.hungerRate = -1.5;
	this.sadnessRate = -1.5;
	this.tiredRate = -1.5;

	this.decayInterval = setInterval(this.decayStatus, 6000)
}

Doge.prototype.decayStatus = function (event)
{
	self.feed(self.hungerRate);
	self.beHappy(self.sadnessRate);
	self.energize(self.tiredRate);

	self.checkStatus();
}