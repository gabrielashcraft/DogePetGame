DogeGame = window.DogeGame || {};

(function()
{
	var root;
	var canvas, stage;
	var images = [];
	var json;
	var raiz;

	//var dogeColors = ['tan', 'cream', 'black'];
	var dogeColors = new Array('tan', 'cream', 'black');

	//var statusLevel = [20,40,60,80,100];
	var statusName = ['worst','bad','average','good','great','best'];

	var Game, myDoge, myInventory;

	window.onload = function()
	{
		//----- LOADING ASSETS -----//
		/*var manifest = [
		];

		var loader = new createjs.LoadQueue(false);
		loader.addEventListener("fileload", handleFileLoad);
		loader.addEventListener("complete", loadJson);
		loader.loadManifest(manifest);
	}

	function handleFileLoad(event)
	{
		if (event.item.type == "image") { images[event.item.id] = event.result; }
	}

	function loadJson(event)
	{
		console.log('json');*/
		$.getJSON("./txt/DogeText.json", jsonLoaded.bind(this)).error(function(jqXhr, textStatus, error) {
					alert("ERROR: " + textStatus + ", " + error);
		});
	}

	function jsonLoaded(_json)
	{
		json = _json;

		canvas = document.getElementById("canvas");
		stage = new createjs.Stage(canvas);

		raiz = new lib.DogePet();
		Game = raiz.game;
		stage.addChild(raiz);
		stage.enableMouseOver();

		createjs.Ticker.setFPS(24);
		createjs.Ticker.addEventListener("tick", stage);

		newGame();
	}

	//----- NEW GAME -----//
	function newGame()
	{
		// ------------------------ DOGE SETUP ------------------------ //
		myDoge = new Doge('tan');

		setHungerText();
		setHappinessText();
		setEnergyText();
		setCoinText();
		Game.stats.coin.gotoAndStop(0);
		
		myDoge.addEventListener('HUNGER_CHANGED', setHungerText);
		myDoge.addEventListener('HAPPINESS_CHANGED', setHappinessText);
		myDoge.addEventListener('ENERGY_CHANGED', setEnergyText);
		myDoge.addEventListener('COINS_CHANGED', setCoinText);
		myDoge.addEventListener('DOGE_DEAD', killDoge);
		myDoge.addEventListener('ACTION_OVER', function(){ enableMenu(); });

		Game.addChild(myDoge);
		// ------------------------ DOGE SETUP ------------------------ //

		// --------------------- INVENTORY SETUP ---------------------- //
		myInventory = {};
		myInventory.food = [3,1];
		// --------------------- INVENTORY SETUP ---------------------- //

		// ------------------------ MENU SETUP ------------------------ //
		Game.shop.visible = false;

		Game.menu.feedPet.gotoAndStop(0);
		Game.menu.feedPet.amount.text = myInventory.food[0];
		for (var i = 0; i < json.food.length; i++)
		{
			Game.menu.feedPet[json.food[i].name].addEventListener('mousedown', function(e){ e.addEventListener('mouseup', feedPet); });
		}
		Game.menu.feedPet.prev.addEventListener('click', prevFood);
		Game.menu.feedPet.next.addEventListener('click', nextFood);
		
		Game.menu.playPet.addEventListener('mousedown', function(e){ e.addEventListener('mouseup', playPet); });
		
		Game.menu.restPet.gotoAndStop(0);
		Game.menu.restPet.addEventListener('mousedown', function(e){ e.addEventListener('mouseup', restPet); });

		Game.menu.mineDoge.gotoAndStop(0);
		Game.menu.mineDoge.addEventListener('mousedown', function(e){ e.addEventListener('mouseup', mineDoge); });

		Game.menu.shop.addEventListener('mousedown', function(e){ e.addEventListener('mouseup', openShop); });
		// ------------------------ MENU SETUP ------------------------ //
	}

	// ---------------- FOOD CONTROLS ---------------- //

	function feedPet(event)
	{
		disableMenu();
		var index = Game.menu.feedPet.currentFrame;
		if ((myDoge.hunger <= myDoge.maxStats) && (myInventory.food[index] > 0))
		{
			myInventory.food[index]--;
			Game.menu.feedPet.amount.text = myInventory.food[index];
			myDoge.feed(json.food[index].amount);
		}
		else
		{
			myDoge.sayNo();
		}
	}

	function prevFood(event)
	{
		var index = Game.menu.feedPet.currentFrame-1;
		if (index < 0)
		{
			index = Game.menu.feedPet.timeline.duration-1;
			console.log(Game.menu.feedPet.timeline.duration)
		}
		Game.menu.feedPet.gotoAndStop(index);
		Game.menu.feedPet.amount.text = myInventory.food[index];
	}

	function nextFood(event)
	{
		var index = Game.menu.feedPet.currentFrame+1;
		if (index > Game.menu.feedPet.timeline.duration-1)
		{
			index = 0;
		}
		Game.menu.feedPet.gotoAndStop(index);
		Game.menu.feedPet.amount.text = myInventory.food[index];
	}

	// ---------------- FOOD CONTROLS ---------------- //

	function playPet(event)
	{
		disableMenu();
		if (myDoge.energy < myDoge.lowStats)
		{
			myDoge.sayNo();
		}
		else
		{
			myDoge.moonball();
		}
	}

	function restPet(event)
	{
		if (!myDoge.isResting)
		{
			if (myDoge.energy > myDoge.maxStats)
			{
				disableMenu();
				myDoge.sayNo();
			}
			else
			{
				disableMenu(Game.menu.restPet);
				myDoge.rest();
			}
		}
		else
		{
			myDoge.wakeUp();
		}
	}

	function mineDoge(event)
	{
		if (!myDoge.isMining)
		{
			if ((myDoge.hunger < myDoge.lowStats) || (myDoge.energy < myDoge.lowStats))
			{
				disableMenu();
				myDoge.sayNo();
			}
			else
			{
				disableMenu(Game.menu.mineDoge);
				myDoge.mine();
			}
		}
		else
		{
			myDoge.stopMining();
		}
	}

	// --------------- SHOP SETUP --------------- //
	function openShop(event)
	{
		disableMenu();
		
		Game.shop.coinsOwned.text = myDoge.coins;
		Game.shop.total.text = 0;
		Game.shop.coinsRemaining.text = myDoge.coins;

		for (var i = 0; i < json.food.length; i++)
		{
			Game.shop[json.food[i].name].price.text = json.food[i].price;
			Game.shop[json.food[i].name].amount.text = 0;
			Game.shop[json.food[i].name].up.addEventListener('click', addProduct);
			Game.shop[json.food[i].name].down.addEventListener('click', removeProduct);
		}

		Game.shop.close.addEventListener('click', function(){ Game.shop.visible = false; enableMenu(); });
		Game.shop.confirm.addEventListener('click', confirmBuy);
		Game.addChild(Game.shop);
		Game.shop.visible = true;
	}

	function addProduct(event)
	{
		var product = event.currentTarget.parent;
		product.amount.text++;
		Game.shop.total.text += product.price.text;
		Game.shop.coinsRemaining.text -= product.price.text;
	}

	function removeProduct(event)
	{
		var product = event.currentTarget.parent;
		if (product.amount.text > 0)
		{
			product.amount.text--;
			Game.shop.total.text -= product.price.text;
			Game.shop.coinsRemaining.text += product.price.text;
		}
	}

	function confirmBuy(event)
	{
		if (Game.shop.coinsRemaining.text >= 0)
		{
			for (var i = 0; i < json.food.length; i++)
			{
				myInventory.food[i] += Game.shop[json.food[i].name].amount.text;
			}
			myDoge.earn(-Game.shop.total.text)
			Game.menu.feedPet.amount.text = myInventory.food[Game.menu.feedPet.currentFrame];
			enableMenu();
			Game.shop.visible = false;
		}
	}
	// --------------- SHOP SETUP --------------- //

	// --------------- TEXT CONTROLS -------------- //
	function setHungerText(event)
	{
		var hunger = Math.floor(myDoge.hunger/myDoge.lowStats);
		Game.stats.hunger_txt.text = json.hunger[statusName[hunger]];
	}

	function setHappinessText(event)
	{
		var happiness = Math.floor(myDoge.happiness/myDoge.lowStats);
		Game.stats.happiness_txt.text = json.happiness[statusName[happiness]];
	}

	function setEnergyText(event)
	{
		var energy = Math.floor(myDoge.energy/myDoge.lowStats);
		Game.stats.energy_txt.text = json.energy[statusName[energy]];
	}

	function setCoinText(event)
	{
		Game.stats.doge_txt.text = myDoge.coins;
	}
	// --------------- TEXT CONTROLS -------------- //

	function killDoge(event)
	{
		Game.stats.hunger_txt.text = json.dead;
		Game.stats.happiness_txt.text = json.dead;
		Game.stats.energy_txt.text = json.dead;

		Game.menu.mouseEnabled = false;
	}

	function disableMenu(button)
	{
		for (var i = 0; i < Game.menu.children.length; i++)
		{
			Game.menu.children[i].mouseEnabled = false;
			//Game.menu.children[i].gotoAndStop(0);
			Game.menu.children[i].alpha = 0.5;
		}
		if (button)
		{
			button.mouseEnabled = true;
			button.alpha = 1;
			button.gotoAndStop(1)
		}
		stage.update();
	}

	function enableMenu(button)
	{
		for (var i = 0; i < Game.menu.children.length; i++)
		{
			Game.menu.children[i].mouseEnabled = true;
			Game.menu.children[i].alpha = 1;
			//Game.menu.children[i].gotoAndStop(0);
		}
		stage.update();
	}

	DogeGame.getDoge = function (){return myDoge}
})();