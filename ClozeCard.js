// //Constructor for the cloze flashcard mattwhite8
// var ClozeFlashcard = function(cloze, question) {
//     this.cloze = cloze;
//     this.question = question;

//     this.displayQuestion = function() {
//         var display = question.replace(cloze, "...");
//         return display;
//     };

// };

// //Empty array that will house our cloze flashcard objects
// var arr = [];

// //Key Value pairs for the cloze object
// var material = {
//     "1976": "The first Apple computer was released in 1976",
//     "2004": "Facebook was founded in 2004",
//     "Graphical User Interface": "GUI stands for Graphical User Interface",
//     "Structured Query Language": "SQL is an acronym for Structured Query Language",
//     "1990": "CERN launched the first website in the year 1990",
//     "Bill Gates": "Bill Gates, a Harvard dropout, co-founded Microsoft"
// };

// //Loop through material and construct objects
// for (var key in material) {
//     arr.push(new ClozeFlashcard(key, material[key]));
// }

// //Export the array of objects and the constructor out to flashcards.js
// module.exports = { arr, ClozeFlashcard };


// Cloze Card Mwebb
// ____________
// function ClozeCard(text, cloze) {
//     if (this instanceof ClozeCard) {
//         this.cloze = "Cloze: " + cloze;
//         this.text = "Full Text: " + text;
//         this.partial = text.replace(cloze, "Partial: ____________");
//         this.generateCloze = function() {
//             console.log(this.text, this.cloze, this.partial);
//         }
//     } else {
//         return new ClozeCard(this.text, this.cloze);
//     }
// }

// module.exports = ClozeCard;
// ____________

//my attempt
var fs = require("fs");
module.exports = ClozeCard;

// constructor for BasicFlashcard
function ClozeCard(text, cloze) {

    this.text = text;
    this.cloze = cloze;

    console.log("Clozecard");
    console.log("text" + text);
    console.log("cloze" + cloze);
    var partial = text.replace(cloze, "...");
    console.log("partial" + partial);




    // this.generateCloze = function() {
        // console.log(this.text, this.cloze, this.partial);
    // }
// } else {
//     return new ClozeCard(this.text, this.cloze);
// }
// this.create = function() {
console.log("good");
// // flashcard object to be appended to file
var data = {
    text: this.text,
    cloze: this.cloze,
    partial: partial
    // type: "cloze"
};
// add card to log.txt
fs.appendFile('log.txt', JSON.stringify(data) + ';', 'utf8', function(err) {
    // fs.appendFile("log.txt", "test", function(error) {

    // fs.appendFile('log.txt', ' This is my text.', function (err) {
    // if (err) throw err;


    // if there is an error, log the error
    if (err) {
        console.log("error");
        console.log(err);

    };
});
// };
};

// ____________

// Constructor function for the 'Cloze Card'. JediKnightHelios007
// function ClozeCard(text, cloze) {
//     this.text = text.split(cloze);
//     this.cloze = cloze;

// };

// // Constructor that creates a prototype of ClozeCard to return the question missing cloze
// function ClozeCardPrototype() {

//     this.clozeRemoved = function() {
//         return `${this.text[0]} ... ${this.text[1]}`; //Template literal enclosed by the back-tick ` allows embedded expressions wrapped with ${}
//     };
// };

// ClozeCard.prototype = new ClozeCardPrototype();

// module.exports = ClozeCard;