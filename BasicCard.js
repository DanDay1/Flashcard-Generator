var fs = require("fs");

// fs.appendFile('log.txt', ' This is my text.', function (err) {
//   if (err) throw err;
//   console.log('Updated!');
// });

module.exports = BasicCard;

// constructor for BasicFlashcard
function BasicCard(front, back) {
    console.log("BasicFlashcard");
    console.log("front" + front);
    console.log("back" + back);
    this.front = front;
    this.back = back;
    // this.create = function() {
    console.log("works");
    // // flashcard object to be appended to file
    var data = {
        front: this.front,
        back: this.back,
        // type: "basic"
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