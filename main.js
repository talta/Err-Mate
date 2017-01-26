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





////Objects for which to work

////a shelf is an object with ingredients
///*/ i do not believe this is necessary, becuase I set the shelves to have an array
var Shelf = function(ingredients){
	this.ingredients = ingredients;
}


///a bartender is an object with shelves
///if only one bartender, may not need to be an object
var Bartender = function(Shelf){
	this.Shelf = Shelf;
}


////a customer is an object with preferences
////*/ should there be a parameter going into the customer object?
////preferences are set to false, untilt he user answers yes to the appropriate question
var Customer = function(){
	this.preferences = {
		salty: false,
		sweet: false,
		vitaminC: false,
		darkLiquors: false,
		lightLiquors: false
	}
}

/////potentially use the drink object versus the drink variable with the createDrink scope
var Drink = function(){

}


////list or array of ingredients
//////shelves which have inherited ingredients:
////potentially create these shelves in an pantry object with the shelf as the key and the array as the ingredients
var salty = new Shelf(["barnacles", "fish scales", "dried ocean water"]);
var sweet = new Shelf(["peach seed", "rat tail", "pineapple"]);
var vitaminC = new Shelf(["lemon plank", "Orange Juice", "rotted limes"]);
var darkLiquors = new Shelf(["Maker's Mark", "Almond Disaronno", "St. John's Wort"]);
var lightLiquors = new Shelf(["wormwood", "cinnamon water", "vodka"]);



////questions are an array of key(preference), value pairs ()
var questions = {
	//*/ can you loop through an object, becuase an object is an array
	///*/ should this be a constructor function? - I dont think so;
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
}

////when a user submits a question's answer, if the user says yes, set that preference (question's key) to true
////the answer true marks the question's key to true within the customer's preferences



/////////////Page Functionality:


////UI as a menu, not as an individual question per view
///get some mock-ups prior to coding


function displayNextQuestion(){
	////push the quesions value to the #questions container
	$('#questionSpace').text(question[questionCounter].value)

}

	///when the submit answer button is selected
	$('#submit').on('click', function collectAnswer(event){
		event.preventDefault();
		console.log('answer submitted');
		setCustomerPreference();
		////create drink
		///hide question space
		////push drink to HTML
	})


////set the customer's prefernce to true
function setCustomerPreference(){
	console.log('customer preference set in');

}


/////find a random ingredient to be added to the drink:
function getRandomIngredient(){
	ingredients.prototype.getRandomShelfItem = function(){
		return this.ingredients[Math.floor(Math.random() * this.ingredients.length)]
	}
}





$(document).ready(function(){
	// $(document).on('click', '#navButton', function(){navigationSelection(event)});
	// pirateBartenderGreeting(); ///taken out until the flow gets normalized
	displayNextQuestion(); ///leave in until the flow is normalized;
	console.log('questions are enumerable '+ questions.propertyIsEnumerable(questions) );
});