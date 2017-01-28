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
	///*///preferences later have a key value parirs

var Pantry = function(shelves){
	this.shelves = shelves;
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

var Drink = function(){
}

var custZach = new Customer();
/////potentially use the drink object versus the drink variable with the createDrink scope


var shelves = {
	fruity: new Shelf(["Plum Brandy from Serbia shores", "Kruskovac from Croatian shores", "Limoncello from Italian Shores"]),
	salty: new Shelf(["barnacles", "fish scales", "dried ocean water"]),
	sweet: new Shelf(["peach seed", "rat tail", "pineapple"]),
	vitaminC: new Shelf(["lemon plank", "Orange Juice", "rotten limes"]),
	darkLiquors: new Shelf(["Maker's Mark", "Almond Disaronno", "St. John's Wort"]),
	lightLiquors: new Shelf(["wormwood", "cinnamon water", "vodka"])
}

var piratePantry = new Pantry(shelves);

var barT = new Bartender(piratePantry);




//******/pantry method to find the pantry.shelves[salty], then get random ingredient from this shelf

// Pantry.shelves[preference]


////list or array of ingredients
//////shelves which have inherited ingredients:
////potentially create these shelves in an pantry object with the shelf as the key and the array as the ingredients


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

	///when the submit answer button is selecte
function menuSubmissionListener(){
	$('#submit').on('click', function collectAnswer(event){
		event.preventDefault();
		console.log('answer submitted');
		console.log(this);
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

function setCustomerPreference(preference, Customer, Pantry, shelves){
	///find/map the var preference to the customer preference with the same name (object's property)
	Customer.preferences[preference]= true;
	console.log('will it be set? '+Customer.preferences[preference]);
	finddShelfOfPreference(preference);
}

function finddShelfOfPreference(preference){
	console.log(preference);
	console.log(piratePantry.shelves[preference]);
	var preferredShelf = piratePantry.shelves[preference];
	console.log(preferredShelf);
	piratePantry.grabIngredient(preferredShelf);
}

Pantry.prototype.grabIngredient = function(Shelf){
	///get random ingredient
	console.log(Shelf);
	Shelf.getRandom(Shelf.ingredients);
	console.log('get random ingredient will be called');
}


////find a random ingredient from the shelf that matches the preference
///get random ingredient from the shelf = preference
///pantry 


Shelf.prototype.getRandom = function(ingredients){
	console.log('get random shelf called ' + ingredients);
	console.log(this.ingredients[Math.floor(Math.random() * this.ingredients.length)]);
	var selectedIngredient = this.ingredients[Math.floor(Math.random() * this.ingredients.length)];
	console.log('selected ingredient = '+ selectedIngredient);
	barT.createDrink();
}


////create a drink based on the customer's preferences which are set to true
///the bartender creates a drink based on the customer's preferences which are true
Bartender.prototype.createDrink = function(selectedIngredient){
	var drink = [];
	var preferences= Customer.preferences;
	//*/loop through only the preferences which are true
	var drinkIngredients =[selectedIngredient];
	console.log('drinkIngredients'+ drinkIngredients);
	////this needs to be refactored
	for(var question in preferences){
		console.log('this is the question value '+ question);
		$('.questionSpace').text(value);
	}
		//for each preference which is true, add a random item from the shelf to the drink
		////sdrink.push(Shelf.getRandomShelfItem())
}


////if all the preferences are still 0, give the customer a glass fo salt water;


$(document).ready(function(){
	console.log('customer is enumerable '+ Customer.propertyIsEnumerable(preferences));
	console.log('questions are enumerable '+ questions.propertyIsEnumerable(questions) );
	menuSubmissionListener();
});