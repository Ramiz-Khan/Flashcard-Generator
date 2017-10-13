function clozeCard(text, cloze) {
	this.text = text;
	this.cloze = cloze;

	this.begining = function() {
		console.log(this.text);
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