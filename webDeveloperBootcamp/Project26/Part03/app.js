const express = require('express')
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs")

// home dir
app.get("/", function(req, res){
    res.render("home");
})

// form
app.get("/friends", function(req, res){
    let friends = ["Tyler", "Alyssa", "Emily", "Braden", "Eric"]
    res.render("friends", {friends: friends})
})


app.listen(3000, process.env.IP, function(){
    console.log("working clean");
});