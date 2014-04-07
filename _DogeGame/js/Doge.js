Doge.prototype = new lib.Doge();

function Doge(color, age, hunger, happiness, energy, coins)
{
	self = this;

	this.color = color;
	this.gotoAndStop(this.color);

	this.age = age ? age : 'cub';
	this[color].gotoAndStop(this.age);

	this.dog = this[this.color][this.age];
	this.dog.gotoAndStop('idle');

	this.hunger = hunger;
	this.happiness = happiness;
	this.energy = energy;
	this.coins = coins;

	this.maxStats = 2399;
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
		self.dog.gotoAndStop('eating');
		self.dog.eating.gotoAndPlay(0);
		self.goIdle = setTimeout(function(){self.dog.gotoAndStop('idle'); self.dispatchEvent('ACTION_OVER');}, 2000);
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
	self.dog.gotoAndStop('mining');
	self.dog.mining.gotoAndPlay(0);
	self.dog.mining.mine.gotoAndPlay(0);
	createjs.Ticker.addEventListener('tick', self.mineTick);
}

Doge.prototype.mineTick = function ()
{
	if (self.dog.mining.mine.getCurrentLabel() == 'getCoin')
	{
		var coin = Math.ceil(Math.random()*3);
		self.earn(coin);

		self.energize(-5);
		self.feed(-5);

		if ((self.hunger <= self.lowStats) || (self.energy <= self.lowStats))
		{
			self.stopMining();
		}
	}
}

Doge.prototype.stopMining = function ()
{
	createjs.Ticker.removeEventListener('tick', self.mineTick);
	self.dog.gotoAndStop('idle');
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
	self.dog.gotoAndStop('moonball');
	self.dog.moonball.gotoAndPlay(0);
	createjs.Ticker.addEventListener('tick', self.moonballTick);
}

Doge.prototype.moonballTick = function ()
{
	if (self.dog.moonball.currentFrame == self.dog.moonball.timeline.duration-1)
	{
		createjs.Ticker.removeEventListener('tick', self.moonballTick);
		self.dog.gotoAndStop('idle');
		self.beHappy(400);
		self.energize(-200);
		self.dispatchEvent('ACTION_OVER');
	}
}

Doge.prototype.rest = function ()
{
	this.hungerRate = -2;
	this.sadnessRate = -2;
	this.tiredRate = 10;

	this.isResting = true;

	this.dog.gotoAndStop('resting');
	this.dog.resting.gotoAndPlay(0);
}

Doge.prototype.wakeUp = function ()
{
	this.hungerRate = -2;
	this.sadnessRate = -2;
	this.tiredRate = -2;

	this.isResting = false;

	this.dog.gotoAndStop('idle');
	self.dispatchEvent('ACTION_OVER');
}

Doge.prototype.sayNo = function ()
{
	this.dog.gotoAndStop('no');
	this.dog.no.gotoAndPlay(0);
	createjs.Ticker.addEventListener('tick', this.noTick)
}

Doge.prototype.noTick = function ()
{
	if (self.dog.no.currentFrame == self.dog.no.timeline.duration-1)
	{
		createjs.Ticker.removeEventListener('tick', self.noTick)
		self.dog.gotoAndStop('idle');
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
		this.dog.gotoAndStop('dead');
		clearInterval(this.decayInterval);
		this.dispatchEvent('DOGE_DEAD');
	}
}

Doge.prototype.startDecay = function ()
{
	this.hungerRate = -2;
	this.sadnessRate = -2;
	this.tiredRate = -2;

	this.decayInterval = setInterval(this.decayStatus, 6000)
}

Doge.prototype.decayStatus = function (event)
{
	self.feed(self.hungerRate);
	self.beHappy(self.sadnessRate);
	self.energize(self.tiredRate);

	self.checkStatus();
}