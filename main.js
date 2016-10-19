var game = require ('./game.js');
var inquirer = require('inquirer');



//get a random word to guess to start the game
var word = game.getWord();


word.display();

function getUserGuess(){

	inquirer.prompt([{
					 name: "letter",
					 message: "Enter a letter: ",
					 validate : function(input){
					 		
						}
					}])

	.then(function(guess){

		word.letterInWord(guess.letter);
		word.display();

		if( !word.guessed){
			if(word.guessCount <10){
				getUserGuess();
			}else{
				console.log("Oops ! You ran out of your guesses !");
				return;
			}
			
		}else if(word.guessed){
			console.log("Congratulations ! You have guessed it !");
		}
	});
}

// get userGuess
getUserGuess();