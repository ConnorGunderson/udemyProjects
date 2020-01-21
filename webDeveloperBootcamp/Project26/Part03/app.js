const express = require('express')
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs")

let friends = ["Tyler", "Alyssa", "Emily", "Braden", "Eric"]

// form
app.post("/addFriend", function(req, res){
    let newFriend = req.body.newFriend;
    friends.push(newFriend);
    res.redirect("/friends")
});
// home dir
app.get("/", function(req, res){
    res.render("home");
})

app.get("/friends", function(req, res){
    res.render("friends", {friends: friends})
})

app.listen(3000, process.env.IP, function(){
    console.log("working clean");
});

// form requires action and method
// when you put an input, add a variable name.