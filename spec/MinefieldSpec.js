describe("Minefield", function(){
	function checkAllAdjacent(result){
		var expected = [
		     [0,0], [0,1], [0,2],
		     [1,0],        [1,2],
		     [2,0], [2,1], [2,2]
		     ];

		expect(result.length).toEqual(expected.length);
		expect(result.sort()).toEqual(expected.sort());
	}
	it("should find all the adjacent cells", function(){
		var sut = new Minefield(["...", "...", "..."]);
		var result = sut.getAdjacentIndices(1,1);
		checkAllAdjacent(result);
	});
});