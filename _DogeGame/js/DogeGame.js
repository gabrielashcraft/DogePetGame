DogeGame = window.DogeGame || {};

(function()
{
	var canvas, stage;
	var images = [];

	//var dogeColors = ['tan', 'cream', 'black'];
	var dogeColors = new Array('tan', 'cream', 'black');

	var myDoge;

	window.onload = function()
	{
		//----- LOADING ASSETS -----//
		var manifest = [
			{src:"./images/pickyourshibe.jpg", id:"pickyourshibe"},
			{src:"./images/cub_tan.jpg", id:"cub_tan"},
			{src:"./images/cub_cream.jpg", id:"cub_cream"},
			{src:"./images/cub_black.jpg", id:"cub_black"}
		];

		var loader = new createjs.LoadQueue(false);
		loader.addEventListener("fileload", handleFileLoad);
		loader.addEventListener("complete", filesLoaded);
		loader.loadManifest(manifest);
	}

	function handleFileLoad(event)
	{
		if (event.item.type == "image") { images[event.item.id] = event.result; }
	}

	function filesLoaded(event)
	{
		canvas = document.getElementById("canvas");
		stage = new createjs.Stage(canvas);
		stage.enableMouseOver();

		createjs.Ticker.setFPS(30);
		createjs.Ticker.addEventListener("tick", stage);

		newGame();
	}

	//----- NEW GAME -----//
	function newGame()
	{
		var newGameScreen = new createjs.Container();
		newGameScreen.name = 'newGame';
		stage.addChild(newGameScreen);

		var pickBG = new createjs.Bitmap(images.pickyourshibe);
		newGameScreen.addChild(pickBG);

		_doges = new createjs.Container();
		index = 0;

		for (var i = 0; i < dogeColors.length; i++)
		{
			_d = new Doge('cub', dogeColors[i], images['cub_'+dogeColors[i]]);
			_d.x = 160*(i);
			_doges.addChild(_d);
			_d.cursor = 'pointer';
			_d.addEventListener('click', selectShibe);
			console.log('Such ADD', _d ,'|| Much ID', _doges.children[i].id);
		}

		_doges.regX = _doges.getBounds().width/2;
		_doges.regY = _doges.getBounds().height;
		_doges.x = canvas.width/2;
		_doges.y = 300;

		newGameScreen.addChild(_doges);
	}

	function selectShibe(event)
	{
		myDoge = event.currentTarget;
		stage.removeChild(stage.getChildByName('newGame'));

		myDoge.setAlive(true);
		myDoge.regX = myDoge.width/2;
		myDoge.regY = myDoge.height/2;
		myDoge.x = canvas.width/2;
		myDoge.y = canvas.height/2;
		stage.addChild(myDoge);
		console.log(myDoge);
	}

	DogeGame.getDoge = function (){return myDoge}
})();