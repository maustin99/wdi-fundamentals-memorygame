console.log("Up and running!");


var cardOne = "king";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "queen";

console.log("User flipped " + cardOne);


var cards = ["queen", "queen", "king","king"];
var cardsInPlay = [];

var cardOne = cards[0];
var cardTwo = cards[2];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
//var c = cardsInPlay.length;
console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);
alert(cardsInPlay);


if (cardsInPlay.length === 2){


		if (cardsInPlay[0] === cardsInPlay[1]){
			alert("You found a match!");

		} else {

			alert("Sorry, try again.");
		}

} 