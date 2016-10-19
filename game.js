var Word = require('./word.js');

module.exports= function Game(){

	var deck = ["beethoven","mozart","haydn","handel","brahms"];

	var randomWord = deck[Math.floor(Math.random() * deck.length)];

	var randomWordArray = randomWord.split('');


	this.getWord = function (){

		// creates Word object
		var word = new Word();


		// pushing Letter Objects into Word Object's letter array.

		randomWordArray.forEach(function(l){
			word.addLetter(l);
		});

		return word;

	}
}