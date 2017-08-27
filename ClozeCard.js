var fs = require("fs");
module.exports = ClozeCard;

function ClozeCard(text, cloze) {

    this.text = text;
    this.cloze = cloze;

    console.log("Cloze Card");
    console.log("text: " + text);
    console.log("cloze: " + cloze);
    var partial = text.replace(cloze, "...");
    console.log("partial: " + partial);

    var data = {
        text: this.text,
        cloze: this.cloze,
        partial: partial

    };

    fs.appendFile('log.txt', JSON.stringify(data) + '\n', 'utf8', function(err) {

        if (err) {
            console.log("error");
            console.log(err);

        };
    });

};