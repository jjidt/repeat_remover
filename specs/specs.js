describe("repeatRemover", function(){
	it("takes a sentence that has a word repeated and returns the sentence with the repeat removed", function(){
		repeatRemover("life is is a highway.").should.equal("life is a highway.");
	});
	it("takes a sentence that has a capitalized word repeated in lowercase and returns the sentence with the repeat removed", function(){
		repeatRemover("I i want to ride it all night long").should.equal("I want to ride it all night long");

	});
	it("takes a sentence that has the last word of the sentence repeated and returns the sentence with the repeat removed", function(){
		repeatRemover("If you're going my way way.").should.equal("If you're going my way");
	});
	it("takes a sentence that has multiple repeated words and removes the repeats.", function(){
		repeatRemover("I want want to drive it all night long long.").should.equal("I want to drive it all night long");

	});
});