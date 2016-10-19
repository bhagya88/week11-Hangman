var Letter = require('./letter.js');

module.exports= function Word(word){

	var letters = [];

	this.guessCount = 0;
	this.guessed = false;
	
	
	this.addLetter = function(l){
		var newLetter = new Letter(l);
		letters.push(newLetter);
	}

	this.letterInWord = function(l){
		this.guessCount ++;

		// checks if the letter is in the word. If it is in the word, then sets guessed property to true.
		letters.forEach(function(letter){
			if(l === letter.name){
				letter.guessed = true;
			}
		});

		this.guessed = letters.every(function(letter){
				return letter.guessed;
				});


	}


	this.display = function(){
		var str = '';
		letters.forEach(function(letter){
			str += letter.display();
		});
		console.log('                                 '+str+'       Guesses remaining:'+(10-this.guessCount));
	}
}