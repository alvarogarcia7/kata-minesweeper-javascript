describe("minesweeper", function(){

	var sut;
	beforeEach(function(){
		sut = new Minesweeper();
	});


	it("should create an object", function(){
	});

	it("should process a zero-dimension array", function(){
		expect(sut.sweep([])).toEqual([]);
	});

	it("should process a one-dimensional array with just one bomb", function(){
		expect(sut.sweep(['*'])).toEqual(['*']);
	});

	it("should process a one-dimensional array with bombs and empty spaces", function(){
		expect(sut.sweep(['*.'])).toEqual(['*1']);
	});
});