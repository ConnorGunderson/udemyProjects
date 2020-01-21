let express = require("express")
let app = express()

// IMPORTANT NOTE
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/x/:foo", function(req, res){
    let foo = req.params.foo;
    res.render("foo", {foo: foo});
})

app.get("/posts", function(req, res){
    let posts = [
        {title: "Post 1", author: "Debby"},
        {title: "Post 2", author: "Connor"},
        {title: "Post 3", author: "Chad"},
    ];
    res.render("posts", {posts: posts});
})

app.listen(3000, process.env.IP, function(){
    console.log("init");
});
