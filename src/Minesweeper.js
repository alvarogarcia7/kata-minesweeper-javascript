var Minesweeper = function(){
	
}

Minesweeper.prototype.sweep = function(field) {
	if(!field || field.length === 0){
		return field;
	}

	var currentRow,
		column,
		row,
		sweptField = [];

	for(row = 0; row < field.length; row++){
		field[row] = field[row].replace(/\./g, 0).split('');
	}

	for(row = 0; row < field.length; row++){
		currentRow = field[row];

		for(column = 0; column < currentRow.length; column++){
			if(currentRow[column] === "*"){
				this.getAdjacentIndices(field, row, column)
					.filter(function(pair){
						return field[pair[0]][pair[1]] !== '*'
					})
					.forEach(function(pair){
						field[pair[0]][pair[1]] ++;
					});
			}
		}

	}

	for(row = 0; row < field.length; row++){
		sweptField.push(field[row].join(''));
	}

	return sweptField;
};

Minesweeper.prototype.getAdjacentIndices = function(field, row, column) {
	var adjacentIndices = [];
	if (column+1 < field[row].length){
		adjacentIndices.push([row, column + 1]);
	}
	if (column-1 >= 0){
		adjacentIndices.push([row, column - 1]);
	}
	if (row + 1 < field.length){
		adjacentIndices.push([row + 1, column]);
	}
	if (row - 1 >= 0){
		adjacentIndices.push([row - 1, column])
	}
	return adjacentIndices;
};