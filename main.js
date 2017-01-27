/////there are questions; preferences; ingredients; drink
///  bartender has questions, which the customer provides answers/ preferences;  
/////answers show preference;  preferences lead to ingredients; ingregredients create a drink
/////bartender has shelves of ingredients, which are contained in a pantry
////pantry an order and a drink
///drink namer
//map questions to order number


////if a preference is set to true, grab a random ingredient from the shelf

'use strict';

///ingredients are variables, which don't necessarily have properties
var ingredients;

var preferences;
	///*///should there be anything in this preferences object


var Pantry = function(Shelf){
	this.Shelf = Shelf;
}



////Objects for which to work

////a shelf is an object with ingredients
///*/ i do not believe this is necessary, becuase I set the shelves to have an array
var Shelf = function(ingredients){
	this.ingredients = ingredients;
}


///a bartender is an object with shelves
///if only one bartender, may not need to be an object
var Bartender = function(Pantry){
	this.Pantry = Pantry;
}


////a customer is an object with preferences
////*/ should there be a parameter going into the customer object?
////preferences are set to false, untilt he user answers yes to the appropriate question
var Customer = function(preferences){
	this.preferences = {
		fruity: false,
		salty: false,
		sweet: false,
		vitaminC: false,
		darkLiquors: false,
		lightLiquors: false
	}
}


var custZach = new Customer();
/////potentially use the drink object versus the drink variable with the createDrink scope
var Drink = function(){
}

var shelves = new Shelf(ingredients);

var piratePantry = new Pantry(sahelves);

var barT = new Bartender(piratePantry);



////list or array of ingredients
//////shelves which have inherited ingredients:
////potentially create these shelves in an pantry object with the shelf as the key and the array as the ingredients
var salty = new Shelf(["barnacles", "fish scales", "dried ocean water"]);
var sweet = new Shelf(["peach seed", "rat tail", "pineapple"]);
var vitaminC = new Shelf(["lemon plank", "Orange Juice", "rotted limes"]);
var darkLiquors = new Shelf(["Maker's Mark", "Almond Disaronno", "St. John's Wort"]);
var lightLiquors = new Shelf(["wormwood", "cinnamon water", "vodka"]);



//questions are an array of key(preference), value pairs ()
//may not be necessary anymore
var questions = {
	sweet: "Do you like fruity flavours",
	darkLiquors: "Dark as the night?",
	vitaminC: "Are ye teeth falling out?",
	lightLiquors: "Pink spots on ye back?",
	salty: "Will we need a key to unlock that jaw?"
}

//////////////Contruction to give the objects functionality

////create a drink based on the customer's preferences which are set to true
///the bartender creates a drink based on the customer's preferences which are true
Bartender.prototype.createDrink = function(preferences){
	var drink = [];
	var preferences= Customer.preferences;
	//*/loop through only the preferences which are true

	////this needs to be refactored
	for(var question in preferences){
		console.log('this is the question value '+ question);
		$('.questionSpace').text(value);
	}
		//for each preference which is true, add a random item from the shelf to the drink
		drink.push(Shelf.getRandomShelfItem())
}


	///when the submit answer button is selecte
function menuSubmissionLisrtener(){
	$('#submit').on('click', function collectAnswer(event){
		event.preventDefault();
		console.log('answer submitted');
		getCustomerResponse();
		////create drink
		///hide question space
		////push drink to HTML
	});
}


////set the customer's prefernce to true
function getCustomerResponse(){
	$('.question').each(function(){
		console.log('for each called');
		var preference = $('label', this).attr('for');
		console.log($('label', this).attr('for'));
		console.log(preference);
		console.log($('input[name="answer"]:checked', this).val());
		if($('input[name="answer"]:checked', this).val()==='true'){
			setCustomerPreference(preference, custZach);
		}
	});
}

function setCustomerPreference(preference, Customer){
		///find/map the var preference to the customer preference with the same name (object's property)
		Customer.preferences[preference]= true;
		console.log('will it be set? '+Customer.preferences[preference]);
		getRandomIngredient(preference);
}


Shelf.prototype.getRandon = function(){
	return this.ingredients[Math.floor(Math.random() * this.ingredients.length)]
}


Pantry.prototype.getRandomIngredient = function(category){
	return this.allIngredients[category].getRandom();
}


/////find a random ingredient to be added to the drink:
function getRandomIngredient(preference){
	console.log('random ingredient called ' + preference);
	Pantry.prototype.getRandom = function(){
		console.log('ingredient returned '+this.ingredients[Math.floor(Math.random() * this.ingredients.length)])
		return this.ingredients[Math.floor(Math.random() * this.ingredients.length)]
	}
}





$(document).ready(function(){
	console.log('customer is enumerable '+ Customer.propertyIsEnumerable(preferences));
	console.log('questions are enumerable '+ questions.propertyIsEnumerable(questions) );
	menuSubmissionLisrtener();
});