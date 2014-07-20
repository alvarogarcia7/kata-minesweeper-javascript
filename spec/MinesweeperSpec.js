describe("minesweeper", function(){
	it("should create an object", function(){
		var sut = new Minesweeper();
	});

	it("should process a zero-dimension array", function(){
		var sut = new Minesweeper();
		expect(sut.sweep([])).toEqual([]);
	});
});