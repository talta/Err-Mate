


var questions=[
sweet: "Do you like fruity flavours",
darkLiquors: "Dark as the night?",

vitaminC: "Are ye teeth falling out?",
lightLiquors: "Do ye like light liquors?",
lightLiquors: "Pink spots on ye back?",
salty: "Will we need a key to unlock that jaw?"
]

var pantry = function()

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

}

function updateButtonText(){

}

function displayNextQuestion(){
	////push the quesions value to the #questions container

}

function collectAnswer(){
	////if the user answers yes, add question key to preferences
}





$(document).ready(){
	$("navButton").click(navigationSelection(event))
}