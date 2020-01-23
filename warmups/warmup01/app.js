const request = require("request")
const express = require("express")
const bodyParser = require("body-parser")
const rp = require("request-promise")
const app = express()

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine", "ejs")

// calling API's
// request("http://www.google.com", function(err, res, b){
    // if (!err && res.statusCode == "200"){
        // console.log("nice")
    // } else {
        // console.log("error", err)
        // 
    // }
// })

rp('http://www.google.com')
    .then((b) => {
        let data = JSON.parse(b)
        console.log(b);
    })
    .catch((err) => {
        console.log("Error: ", err);
    })

let animals = [
    {animal: "cow", sound: "moo!"},
    {animal: "cat", sound: "meow!"},
    {animal: "falcon", sound: "punch!"} 
]
let animalList = ['cow', 'dog', 'cat']
// list all animals within the array
app.get("/", function(req, res){
    res.render("home", {animalList: animalList, 
        animals: animals});
})

// render speech
app.get("/x/:speak", function(req, res){
    let speak = req.params.speak
    res.render("speak", {speak: speak})
})

// push new animal with POST to
app.post("/newAnimal", (req, res) => {
    let nAnimal = req.body.newAnimal
    animalList.push(nAnimal)
    res.redirect("/")
})

// listening port
app.listen(3000, process.env.IP, function(){
    console.log("init")
})