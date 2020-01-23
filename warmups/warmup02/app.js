const express = require('express')
const rp = require('request-promise')
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/catFacts', (req, res) => {    
    rp('https://cat-fact.herokuapp.com/facts')
        .then((b) => {
            let data = JSON.parse(b);
            res.render('catFacts', {data: data})
        })
        .catch((err) => {
            console.log('Error: ' + err);
            let error = res.statusCode
            res.render('error', {error: error})
        })
})

// Request('https://cat-fact.herokuapp.com', (err, res, b) => {
// } )

app.listen(3000, () => {})