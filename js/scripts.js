var repeatRemover = function (sentence) {
	var split_words = sentence.split(" ");
	for (var i = 0; i < split_words.length; i++) {
		if (split_words[i].toLowerCase() === split_words[i+1]) {
			if (i > 0) {
				split_words.splice(i,1);
			}
			else {
				split_words.splice(i+1,1);
			}
		}
	}
	return split_words.join(" ");
};