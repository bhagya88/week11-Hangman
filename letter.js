module.exports= function Letter(l){

this.name = l;
this.guessed = false;

this.display = function(){
		if(this.guessed === false){
			return '-';
		}else{
			return l;
		}
	}

}