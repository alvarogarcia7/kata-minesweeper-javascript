var Minesweeper = function(){
	
}

Minesweeper.prototype.sweep = function(field) {
	var i;
	for(i = 0; i < field.length; i++){
		field[i] = field[i].replace('.','1');
	}
	return field;
};