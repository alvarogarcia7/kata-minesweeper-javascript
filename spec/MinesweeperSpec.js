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
});