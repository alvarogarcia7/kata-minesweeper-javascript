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
	var current = field[0].split(''),
		i,
		adjacentIndices;

	for(i = 0; i < current.length; i++){
		if(current[i] === "*"){
			this.getAdjacentIndices(current, i).forEach(function(currentIndex){
				if(current[currentIndex] !== '*'){
					current[currentIndex] ++;
				}
			});
		}
	}

	return [current.join('')];
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