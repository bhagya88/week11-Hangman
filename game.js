var Word = require('./word.js');

module.exports.getWord= function (){

	var deck = ["beethoven","mozart","haydn","handel","brahms"];

	var randomWord = deck[Math.floor(Math.random() * deck.length)];

	var randomWordArray = randomWord.split('');




		// creates Word object
		var word = new Word();


		// pushing Letter Objects into Word Object's letter array.

		randomWordArray.forEach(function(l){
			word.addLetter(l);
		});

		
}