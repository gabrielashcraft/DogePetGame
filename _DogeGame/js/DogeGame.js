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

	var myDoge;

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

		myDoge.x = canvas.width/2;
		myDoge.y = canvas.height/2;

		setHungerText();
		setHappinessText();
		setEnergyText();
		myDoge.addEventListener('HUNGER_CHANGED', setHungerText);
		myDoge.addEventListener('HAPPINESS_CHANGED', setHappinessText);
		myDoge.addEventListener('ENERGY_CHANGED', setEnergyText);
		myDoge.addEventListener('DOGE_DEAD', killDoge);

		raiz.addChild(myDoge);

		raiz.menu.feedPet.addEventListener('click', feedPet)
		raiz.menu.playPet.addEventListener('click', playPet)

	// ------------------------ DOGE SETUP ------------------------ //
	}

	function feedPet(event)
	{
		myDoge.feed(200)
	}

	function playPet(event)
	{
		console.log('No Moonball yet. Such sad. Much tears.')
	}

	function setHungerText(event)
	{
		var hunger = Math.floor(myDoge.hunger/200);
		raiz.status.hunger_txt.text = json.hunger[statusName[hunger]];
	}

	function setHappinessText(event)
	{
		var happiness = Math.floor(myDoge.happiness/200);
		raiz.status.happiness_txt.text = json.happiness[statusName[happiness]];
	}

	function setEnergyText(event)
	{
		var energy = Math.floor(myDoge.energy/200);
		raiz.status.energy_txt.text = json.energy[statusName[energy]];
	}

	function killDoge(event)
	{
		raiz.status.hunger_txt.text = json.dead;
		raiz.status.happiness_txt.text = json.dead;
		raiz.status.energy_txt.text = json.dead;

		raiz.menu.mouseEnabled = false;
	}

	DogeGame.getDoge = function (){return myDoge}
})();