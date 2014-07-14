var repeatRemover = function (sentence) {
	var split_words = sentence.split(" ");
	for (var i = 0; i < split_words.length; i++) {
		if (split_words[i] === split_words[i+1]) {
			split_words.splice(i,1);
		}
	}
	return split_words.join(" ");
};