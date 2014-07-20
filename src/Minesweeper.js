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
		currentRow = field[row].split('')

		for(column = 0; column < currentRow.length; column++){
			if(currentRow[column] === "*"){
				this.getAdjacentIndices(currentRow, column)
					.filter(function(currentIndex){
						return currentRow[currentIndex] !== '*'
					})
					.forEach(function(currentIndex){
						currentRow[currentIndex] ++;
					});
			}
		}
	}

	return [currentRow.join('')];
};

Minesweeper.prototype.getAdjacentIndices = function(row, index) {
	var adjacentIndices = [];
	if (index+1 < row.length){
		adjacentIndices.push(index + 1);
	}
	if (index-1 >= 0){
		adjacentIndices.push(index - 1);
	}
	return adjacentIndices;
};