assignment_7
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardThree = "king";

console.log("User flipped " + cardOne);

assignment_8
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[2];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);

if(cardsInPlay.length === 2) {
	if(cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	} else
	{
		alert("Sorry, try again.")
	}
}else
{
}

assignment_9

#cannotWork
// var cards = ["queen", "queen", "king", "king"];
// var cardsInPlay = [];
// var checkForMatch = function(){
// 	if (cardsInPlay[0] === cardsInPlay[1]) {
//       console.log("You found a match!");
//   } else {
//       console.log("Sorry, try again.");
//   }
// };
// var flipcard = function(cardId){
// 	console.log("User flipped " + cards[cardId]);
// 	cardsInPlay.push(cards[cardId]);
// 	if(cardsInPlay.length === 2) {
// 		checkForMatch();
// 	};
// flipcard(0);
// flipcard(2);
#canWork
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
  } else {
      alert("Sorry, try again.");
  }
};
var flipCard = function (cardId){
	cardsInPlay.push(cards[cardId]);
	console.log("User flipped " + cards[cardId]);
	if (cardsInPlay.length === 2) {
	checkForMatch();
	}
	
}

flipCard(0);
flipCard(2);

#assignment_10
