var fs = require('fs');
var BasicCard = require('./BasicCard.js');
var ClozeCard = require('./ClozeCard.js'); 

// var front = (process.argv[2]);
// var back = (process.argv[3]);

console.log("hello world");
// console.log(process);

// console.log(front);
// console.log(back);

// BasicCard(front, back);

var firstQ = new BasicCard("What day did Mercury-Redstone 3 launch", "May 5, 1961");
// firstQ.generateCard();

var secondQ = new ClozeCard("Alan Shepard was the first American in space", "Alan Shepard");

