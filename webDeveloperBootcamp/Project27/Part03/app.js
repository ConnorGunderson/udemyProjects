const express = require('express');
const app = express();
const rp = require("request-promise");
// const request = require('request')

app.use(express.static('public'));
app.set("view engine", "ejs");

// doing a search route
app.get('/', (req, res) => {
    res.render('search')
})

app.get('/results', (req, res) => {
    let query = req.query.search
    // console.log(query);
    let url = `http://www.omdbapi.com/?s=${query}&apikey=thewdb`
    rp(url)
        .then((b) => {
            let parseData = JSON.parse(b)
            res.render('results', {parseData: parseData});
        })
        .catch((err) => {
            console.log('Error:')
        })
})

// request('http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb', (err, res, b) => {
//     eval(require('locus'))
//     if (!err && res.statusCode == 200) {
//         console.log('nice');
        
//     } else {
//         console.log('Errer', err);
        
//     }
// });

app.listen(3000, process.env.IP, function(){
    console.log('init');
    
})