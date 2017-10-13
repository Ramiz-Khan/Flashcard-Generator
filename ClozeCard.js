var clozeCard = function (text, cloze) {
	this.text = text;
	this.cloze = cloze;

	this.begining = function() {
		
		$("#card-content").html("<h1>" + this.text + "</h1>");

	}

	this.clozed = function() {
		console.log("..." + this.cloze);
	}

	this.fullText = function() {
		console.log(this.text + " " + this.cloze);
	}

}

var One = new clozeCard("George Washington", "was the first president of the United States.");

One.begining();

One.clozed();

One.fullText();

module.exports = clozeCard;

module.exports = One;