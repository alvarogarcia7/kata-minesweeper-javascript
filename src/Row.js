Row = function(contents){
	this.contents = contents
}

Row.prototype.initialize = function() {
	var stringCells = this.contents.replace(/\./g, 0).split(''),
		i;

	this.contents = [];

	for (i = 0; i < stringCells.length; i++){
		this.contents.push(new Cell(stringCells[i]));
	}

	return this;
};

Row.prototype.hasBombAt = function(column) {
	return this.contents[column].hasBomb();
};

Row.prototype.toString = function() {
	var representations = [];
	this.contents.forEach(function(current){
		representations.push(current.toString());
	});
	return representations.join('');
};

Row.prototype.increaseBombsAt = function(column) {
	this.contents[column].increaseBombs();
};

Row.prototype.columns = function() {
	return this.contents.length;
};