var repeatRemover = function (sentence) {
  var splitWords = sentence.split(" ");
  for (var i = 0; i < splitWords.length -1; i++) {
    var currentWord = splitWords[i].toLowerCase();
    var nextWord = splitWords[(i+1)].toLowerCase();
    var nextWordNoPunctuation = nextWord.replace(/\W/,"");

    if (currentWord === nextWord ||
        currentWord === nextWordNoPunctuation) {
      if (i > 0) {
        splitWords.splice(i,1);
      } else {
        splitWords.splice(i+1,1);
      }
    }
  }

  return splitWords.join(" ");
};

$(document).ready(function(){
  $("form#sentence").submit(function(event){
    $("#outputArea").css({"font-size": "0"});
    var boxInput = $("input#wordBox").val();
    var output = repeatRemover(boxInput);
    $("#outputArea").text(output);
    event.preventDefault();
    $("#outputArea").animate({"font-size": "60px"}, 500);
  });
});
