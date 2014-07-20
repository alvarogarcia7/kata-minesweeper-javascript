var Minesweeper = function(){
	
}

Minesweeper.prototype.sweep = function(/*Array<String>*/ field) {
	field = new Minefield(field);
	if(!field || field.rows() === 0){
		return field.toString();
	}

	var currentRow,
		column,
		row;

	for(row = 0; row < field.rows(); row++){
		currentRow = field.rowAt(row);

		for(column = 0; column < currentRow.columns(); column++){
			if(currentRow.hasBombAt(column)){
				field.getAdjacentIndices(row, column)
					.filter(function(pair){
						return field.rowAt(pair[0]).hasBombAt(pair[1]) === false
					})
					.forEach(function(pair){
						field.rowAt(pair[0]).increaseBombsAt(pair[1]);
					});
			}
		}

	}

	return field.toString();
};