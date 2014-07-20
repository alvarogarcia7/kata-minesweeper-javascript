Cell = function(contents){
	this.contents = contents
}

Cell.prototype.hasBomb = function() {
	return this.contents === "*"
};

Cell.prototype.toString = function() {
	return this.contents;
};

Cell.prototype.increaseBombs = function() {
	this.contents++;
};