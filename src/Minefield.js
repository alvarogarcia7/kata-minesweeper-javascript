Minefield = function(stringArray){
	this._rows = [];
	this.initialize(stringArray);	

	// return {
	// 	initialize: this.initialize,
	// 	rows: this.rows,
	// 	rowAt: this.rowAt
	// }
}

Minefield.prototype.rows = function() {
	return this._rows.length;
};

Minefield.prototype.initialize = function(stringArray) {
	var row;
	for(row = 0; row < stringArray.length; row++){
		this._rows[row] = new Row(stringArray[row]).initialize();
	}
};

Minefield.prototype.rowAt = function(index) {
	return this._rows[index];
};

Minefield.prototype.toString = function() {
	var representations = [];
	this._rows.forEach(function(current){
		representations.push(current.toString());
	});
	return representations;
};

Minefield.prototype.getAdjacentIndices = function(row, column) {
	var adjacentIndices = [];
	if (column+1 < this.rowAt(row).columns()){
		adjacentIndices.push([row, column + 1]);
	}
	if (column-1 >= 0){
		adjacentIndices.push([row, column - 1]);
	}
	if (row + 1 < this.rows()){
		adjacentIndices.push([row + 1, column]);
	}
	if (row - 1 >= 0){
		adjacentIndices.push([row - 1, column])
	}
	return adjacentIndices;
};