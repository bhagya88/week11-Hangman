// Constructor for letter objects
function Letter(l){

// name is a string containing any one single alphabet 
this.name = l;
// when the user guesses a letter correctly, it turns the guessed should be set to true.
this.guessed = false;

}

// this method is used to controls display mode of name property, whether it should show or stay hidden
Letter.prototype.display = function(){
		if(this.guessed === false){
			// hide the name
			return '-';
		}else{
			return this.name;
		}
	}

module.exports = Letter;