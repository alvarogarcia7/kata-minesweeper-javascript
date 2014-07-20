Row = function(contents){
	this.contents = contents
}

Row.prototype.initialize = function() {
	return this.contents.replace(/\./g, 0).split('');
};