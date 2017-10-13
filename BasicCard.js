function basicCard (front, back) {
	this.front = front;
	this.back = back;


	this.printFrontCard = function() {
	console.log(this.front);
}

	this.printBackCard = function() {
	console.log(this.back);
}

}

var first = new basicCard("Who was the first president of the united states?","George Washington");

first.printFrontCard();

first.printBackCard();

module.exports = basicCard;
module.exports = first;