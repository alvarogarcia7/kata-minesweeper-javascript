var Minesweeper = function(){
	
}

Minesweeper.prototype.sweep = function(field) {
	var i;
	for(i = 0; i < field.length; i++){
		field[i] = field[i].replace('.','1');
		if(field[i] === ("*1*")){
			field[i] = "*2*";
		}
	}

	return field;
};