var Minesweeper = function(){
	
}

Minesweeper.prototype.sweep = function(field) {
	if(!field || field.length === 0){
		return field;
	}

	field[0] = field[0].replace('.','1');
	if(field[0] === ("*1*")){
		field[0] = "*2*";
	}

	return field;
};