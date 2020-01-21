const express = require("express")
const app = express();

app.get("/", function(req, res){
    res.send("welcome to the home dir")
})

// ejs Embedded Javascript
app.get("/pupper/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love.ejs", {thingVar: thing});
    // pass value to the ejs thing value

});

app.listen(3000, process.env.IP, function(){
    console.log("console init");
})