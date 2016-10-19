function Letter(l){

this.name = l;
this.guessed = false;

}

Letter.prototype.display = function(){
		if(this.guessed === false){
			return '-';
		}else{
			return this.name;
		}
	}

module.exports = Letter;