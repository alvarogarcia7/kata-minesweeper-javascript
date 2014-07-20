describe("minesweeper", function(){

	var sut;
	beforeEach(function(){
		sut = new Minesweeper();
	});

	describe("object creation", function(){
		it("should create an object", function(){
		});
	});

	describe("corner cases", function(){
		it("should process a zero-dimension array", function(){
			expect(sut.sweep([])).toEqual([]);
		});
	});

	describe("one-dimension", function(){

		it("should process a one-dimensional array with just one bomb", function(){
			expect(sut.sweep(['*'])).toEqual(['*']);
		});

		it("should process a one-dimensional array with bombs and empty spaces", function(){
			expect(sut.sweep(['*.'])).toEqual(['*1']);
		});

		it("should process a one-dimensional array with ovelapping bomb radius", function(){
			expect(sut.sweep(['.*.*...'])).toEqual(['1*2*100']);
		});

		it("should process a one-dimensional array with bombs in contact", function(){
			expect(sut.sweep(['**'])).toEqual(['**']);
		});
	
	});

	describe("two-dimensions", function(){
		it("should detect interaction between different rows", function(){
			expect(sut.sweep(
				['*',
				 '.']
				)).toEqual(
				['*',
				 '1']
				);
		});
	});
});