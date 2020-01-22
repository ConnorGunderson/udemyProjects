const express = require('express');
const app = express();
const rp = require("request-promise");
// const request = require('request')

app.use(express.static('public'));
app.set("view engine", "ejs");

// doing a search route
app.get('/', ())

app.get('/results', (req, res) => {
    rp('http://www.omdbapi.com/?s=iowa&apikey=thewdb')
        .then((b) => {
            let parseData = JSON.parse(b)
            res.render('results', {parseData: parseData});
        })
        .catch((err) => {
            console.log('Error:', err)
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

app.listen(3000, process.env.IP, () => {})