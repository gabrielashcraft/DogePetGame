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
	var statusName = ['worst','bad','average','good', 'great','best'];

	var Game, myDoge;

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
		myDoge.addEventListener('HUNGER_CHANGED', setHungerText);
		myDoge.addEventListener('HAPPINESS_CHANGED', setHappinessText);
		myDoge.addEventListener('ENERGY_CHANGED', setEnergyText);
		myDoge.addEventListener('COINS_CHANGED', setCoinText);
		myDoge.addEventListener('DOGE_DEAD', killDoge);
		myDoge.addEventListener('ACTION_OVER', enableMenu);

		Game.addChild(myDoge);
		// ------------------------ DOGE SETUP ------------------------ //

		// ------------------------ MENU SETUP ------------------------ //
		Game.menu.feedPet.addEventListener('mousedown', function(e){ e.addEventListener('mouseup', feedPet); });
		Game.menu.playPet.addEventListener('mousedown', function(e){ e.addEventListener('mouseup', playPet); });
		Game.menu.restPet.gotoAndStop(0);
		Game.menu.restPet.addEventListener('mousedown', function(e){ e.addEventListener('mouseup', restPet); });
		Game.menu.mineDoge.addEventListener('mousedown', function(e){ e.addEventListener('mouseup', mineDoge); });
		// ------------------------ MENU SETUP ------------------------ //
	}

	function feedPet(event)
	{
		disableMenu();
		myDoge.feed(200)
	}

	function playPet(event)
	{
		disableMenu();
		myDoge.moonball();
	}

	function restPet(event)
	{
		if (!myDoge.isResting)
		{
			disableMenu(Game.menu.restPet);
			myDoge.rest();
		}
		else
		{
			enableMenu(Game.menu.restPet);
			myDoge.wakeUp();
		}
	}

	function mineDoge(event)
	{
		if (!myDoge.isMining)
		{
			disableMenu(Game.menu.mineDoge);
			myDoge.mine();
		}
		else
		{
			enableMenu(Game.menu.mineDoge);
			myDoge.stopMining();
		}
	}

	function setHungerText(event)
	{
		var hunger = Math.floor(myDoge.hunger/200);
		Game.status.hunger_txt.text = json.hunger[statusName[hunger]];
	}

	function setHappinessText(event)
	{
		var happiness = Math.floor(myDoge.happiness/200);
		Game.status.happiness_txt.text = json.happiness[statusName[happiness]];
	}

	function setEnergyText(event)
	{
		var energy = Math.floor(myDoge.energy/200);
		Game.status.energy_txt.text = json.energy[statusName[energy]];
	}

	function setCoinText(event)
	{
		Game.status.doge_txt.text = myDoge.coins;
	}

	function killDoge(event)
	{
		Game.status.hunger_txt.text = json.dead;
		Game.status.happiness_txt.text = json.dead;
		Game.status.energy_txt.text = json.dead;

		Game.menu.mouseEnabled = false;
	}

	function disableMenu(button)
	{
		for (var i = 0; i < Game.menu.children.length; i++)
		{
			Game.menu.children[i].mouseEnabled = false;
			Game.menu.children[i].gotoAndStop(0);
			Game.menu.children[i].alpha = 0.5;
		}
		if (button)
		{
			console.log(button);
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
		}
		if (button)
		{
			button.gotoAndStop(0);
		}
		stage.update();
	}

	DogeGame.getDoge = function (){return myDoge}
})();