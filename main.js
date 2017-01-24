
var id = this.id;

var questions = {
sweet: "Do you like fruity flavours",
darkLiquors: "Dark as the night?",
vitaminC: "Are ye teeth falling out?",
lightLiquors: "Do ye like light liquors?",
lightLiquors: "Pink spots on ye back?",
salty: "Will we need a key to unlock that jaw?"
}

var pantry = function(shelf){
	this.shelf=shelf;
}

var shelf = function(ingredients){
	this.ingredients = ingredients;
}

var preferences = {};

var salty = new shelf( "barnacles", "fish scales", "dried ocean water");
var sweet = new shelf("peach seed", "rat tail", "pineapple");
var vitaminC = new shelf("lemon plank", "Orange Juice", "rotted limes");
var darkLiquors = new shelf("Maker's Mark", "Almond Disaronno", "St. John's Wort");
var lightLiquors = new shelf("wormwood", "cinnamon water", "vodka");


var answers = ["aye", "no"]

var bartender = function(pantry){
	this.pantry = pantry;
}

bartender.prototype.createDrink = function(preferences){
	for(i=0; i<=preferences.length-1; i++){
		drink += this.shelf[i % this.shelf.length] + " ";
	}
}


function navigationSelection(event){
	console.log('navigation selected');
	pirateBartenderGreeting();
}

function pirateBartenderGreeting(){
	console.log('pirate bartender greeting');
	$('#question').text('Err Matey.  Got any booty for a swashbuckle?');
	displayAnswer();
}

function displayAnswer(){
	$('#answerSpace').show();
}

function hideId(id){

	console.log('answers hidden');
	// $('.hide').addClass('hide')
}

function updateButtonText(){
	//change the button text from begin to next question
}

function displayNextQuestion(){
	////push the quesions value to the #questions container

}

function collectAnswer(){
	////if the user answers yes, add question key to preferences
}





$(document).ready(function(){
	// $(document).on('click', '#navButton', function(){navigationSelection(event)});
	hideId(answerSpace);
	$('#navButton').click(navigationSelection);
});