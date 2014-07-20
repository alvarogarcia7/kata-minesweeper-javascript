var Minesweeper = function(){
	
}

Minesweeper.prototype.sweep = function(field) {
	if(!field || field.length === 0){
		return field;
	}

	field[0] = field[0].replace('.','0');
	var current = field[0].split(''),
		i;

	for(i = 0; i < current.length; i++){
		if(current[i] === "*"){
			if(i+1 < current.length && current[i+1] !== '*'){
				current[i+1]++;
			}
			if(i-1 >= 0 && current[i-1] !== '*'){
				current[i-1]++;
			}
		}
	}

	return [current.join('')];
};