'use strict';

var ingredients;

var preferences;

	var drinkIngredients = [];

var selectedIngredient;

var Drink = function(selectedIngredients){
	this.selectedIngredients = selectedIngredients;
}

var Pantry = function(shelves){
	this.shelves = shelves;
}

//////////Objects for which to work

var Shelf = function(ingredients){
	this.ingredients = ingredients;
}

var Bartender = function(Pantry){
	this.Pantry = Pantry;
}

////preferences are set to false, until the user answers yes to the appropriate question
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

var shelves = {
	fruity: new Shelf(["Plum Brandy from Serbia shores", "Kruskovac from Croatian shores", "Limoncello from Italian Shores"]),
	salty: new Shelf(["barnacles", "fish scales", "evaporated ocean water"]),
	sweet: new Shelf(["peach seed", "rat tail", "pineapple"]),
	vitaminC: new Shelf(["lemon plank", "Orange Juice", "rotten limes"]),
	darkLiquors: new Shelf(["Maker's Mark", "Almond Disaronno", "St. John's Wort"]),
	lightLiquors: new Shelf(["wormwood", "cinnamon water", "vodka"])
}

var piratePantry = new Pantry(shelves);

var barT = new Bartender(piratePantry);


//////////////Page functionality

	///when the submit the reply button is selected
function menuSubmissionListener(){
	$('#submit').on('click', function collectAnswer(event){
		event.preventDefault();
		console.log(this);
		getCustomerResponse();
	});
}


////set the customer's prefernce to true
function getCustomerResponse(){
	$('.question').each(function(){
		var preference = $('label', this).attr('for');
		if($('input[name="answer"]:checked', this).val()==='true'){
			setCustomerPreference(preference, custZach);
		}else{
			////give the user a glass of salt water you cod fish
		}
	});
}


///find/map the var preference to the customer preference with the same name (object's property)
function setCustomerPreference(preference, Customer, Pantry, shelves){
	Customer.preferences[preference]= true;
	console.log('will it be set? '+Customer.preferences[preference]);
	var preferredShelf = piratePantry.shelves[preference];
	piratePantry.grabIngredient(preferredShelf);

}


function takeMenu(){
	$('#questionSpace').addClass('hide');
}
function placeDrink(drinkIngredients){
	$('#beverageCoaster').text(drinkIngredients);
}

function tellConcoction(){
	$('#bartenderResponse').text('Avast bucko.  This be good for ye. This clap of thunder has: ')
	 
}

	////////////Methods for which Objects will utilize:
Pantry.prototype.grabIngredient = function(Shelf){
	///get random ingredient
	console.log(Shelf);
	Shelf.getRandom(Shelf.ingredients);
}

Shelf.prototype.getRandom = function(ingredients){
	console.log('get random shelf called ' + ingredients);
	console.log(this.ingredients[Math.floor(Math.random() * this.ingredients.length)]);
	selectedIngredient = this.ingredients[Math.floor(Math.random() * this.ingredients.length)];
	console.log('selected ingredient = '+ selectedIngredient);
	barT.createDrink(ingredients, Customer);
	barT.serveDrink(ingredients);
}

Bartender.prototype.createDrink = function(selectedIngredient, Customer){
	console.log('selected ingredient being added to drink '+selectedIngredient);
	var preferences= Customer.preferences;
	drinkIngredients.push(' '+ selectedIngredient );
	console.log('drinkIngredients '+ drinkIngredients);
}

Bartender.prototype.serveDrink = function(drinkIngredients){
	takeMenu();
	placeDrink(drinkIngredients);
	tellConcoction();
}


////if all the preferences are still 0, give the customer a glass fo salt water;


$(document).ready(function(){
	menuSubmissionListener();
});