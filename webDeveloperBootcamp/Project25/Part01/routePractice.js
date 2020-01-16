let express = require('express');
let app = express();

// Practicing routes

app.get("/", function(req, res){
    res.send("hey");
})

app.get("/bye", function(req,res){
    res.send("later");
});

app.get("/bye/dog", function(req, res){
    res.send("meow");
})

app.get("/:name", function(req, res){
    res.send("welcome sir");
})

app.get("/r/:subRedditName/comments/:id/:title", function(req, res){
    var subreddit = req.params.subRedditName;
    res.send("welcome to the " + subreddit.toLowerCase() + " subreddit");
});

app.get("/*", function(req, res){
    res.send("you are a star")
})

app.listen(3000, process.env.IP, function() {
    console.log("hey");
});
