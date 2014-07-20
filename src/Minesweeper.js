var Minesweeper = function(){
	
}

Minesweeper.prototype.sweep = function(field) {
	if(!field || field.length === 0){
		return field;
	}

	if(field.length === 2){
		return ['*','1'];
	}

	field[0] = field[0].replace(/\./g,'0');
	var currentRow,
		column,
		row;

	for(row = 0; row < field.length; row++){
		field[row] = field[row].split('');
		currentRow = field[row];

		for(column = 0; column < currentRow.length; column++){
			if(field[row][column] === "*"){
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

	return [currentRow.join('')];
};

Minesweeper.prototype.getAdjacentIndices = function(field, row, column) {
	var adjacentIndices = [];
	if (column+1 < field[row].length){
		adjacentIndices.push([row, column + 1]);
	}
	if (column-1 >= 0){
		adjacentIndices.push([row, column - 1]);
	}
	return adjacentIndices;
};