var game = require ('./game.js');
var inquirer = require('inquirer');

// Game header
console.log('**************************************************************************');
console.log('                     Welcome to Classical Hangman                         ')
console.log('**************************************************************************');
console.log('                            Guess the Composer                            ');

console.log('');
console.log('');


//get a random word to guess to start the game
var word = game.getWord();

// console logs word
word.display();

function getUserGuess(){

	inquirer.prompt([{
					 name: "letter",
					 message: "Enter a letter: ",
					 validate : function(input){
					 		return true;
						}
					}])

	.then(function(guess){

		word.letterInWord(guess.letter);
		word.display();

		if( !word.guessed){
			if(word.guessCount <10){
				getUserGuess();
			}else{
				console.log("\n"+"                   Oops ! You ran out of your guesses !");
				return;
			}
			
		}else if(word.guessed){

			console.log("\n"+"                   Congratulations ! You have guessed it !");
		}
	});
}

// get userGuess
getUserGuess();