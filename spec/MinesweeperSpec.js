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

	describe("acceptance tests", function(){
		it("acceptance number one", function(){
			expect(sut.sweep(
				['**...',
				 '.....',
				 '.*...']
			)).toEqual(
				['**100',
				 '33200',
				 '1*100']
				);
		});

		it("acceptance number two", function(){
			expect(sut.sweep(
				['*...',
				 '....',
				 '.*..',
				 '....']
			)).toEqual(
				['*100',
				 '2210',
				 '1*10',
				 '1110']
				);
		});
	});
});