const express = require("express");
const rp = require('request-promise')
const app = express()

app.use(express.static("public"));
app.set("view engine", "ejs");

// ES6 
rp('https://jsonplaceholder.typicode.com/users/1')
    .then((b) =>  {
        const pData = JSON.parse(b)
        console.log(`${pData.name} live in ${pData.address.city}`);
    })
    .catch((err) => {
        console.log("ERROR", err);
    });
        // if (!err && res.statusCode == 200)
        // {
        //     const pData = JSON.parse(b)
        //     console.log(`${pData.name} lives in ${pData.address.city}`);
        // }

app.get('/', (req, res) =>{
    res.render('home')
})


app.listen(3000, () => {})