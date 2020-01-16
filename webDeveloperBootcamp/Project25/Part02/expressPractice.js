const express = require("express");
const app = express();

// "/" home dir
app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

// /speak/:animal
app.get("/speak/:animal", function(req, res) {
    let sounds = {
        pig: "Oink!",
        cow: "Moo!",
        dog: "Woof!",
        crow: "Sqraw!"
    }
    let animal = req.params.animal.toLowerCase();
    res.send("The " + req.params.animal + " goes " + "'" +sounds[animal] + "'");
});

// /repeat/:phrase/:n
app.get("/repeat/:phrase/:n", function(req, res){
    let resPhrase = "";
    let phrase = req.params.phrase;
    let n = req.params.n;
    for (let i = 0; i < n; i++)
    {
        resPhrase += phrase + " ";
    }
    res.send(resPhrase);
});

// Catch error if they arrive at undefined dir
app.get("/*", function(req, res){
    res.send("Sorry, page is not found.... Are you lost?");
});

// init server on port 3000
app.listen(3000, process.env.IP, function(){
    console.log("init");
});