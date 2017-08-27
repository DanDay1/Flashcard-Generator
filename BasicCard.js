var fs = require("fs");
module.exports = BasicCard;

function BasicCard(front, back) {

    console.log("Basic Flashcard");
    console.log("front: " + front);
    console.log("back: " + back);

    this.front = front;
    this.back = back;

    var data = {
        front: this.front,
        back: this.back,
        // newLine: "\n"

    };

    fs.appendFile('log.txt', JSON.stringify(data) + '\n', 'utf8', function(err) {

        if (err) {
            console.log("error");
            console.log(err);

        };
    });

};