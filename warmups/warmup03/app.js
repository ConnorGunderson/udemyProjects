const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const rp = require('request-promise')

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))
app.set('view engine', 'ejs')

let bears = [
    {name: 'koala', food: 'bamboo'},
    {name: 'black', food: 'animals'},
    {name: 'polar', food: 'coke'},
    {name: 'brown', food: 'honey'}
]

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/bear/new', (req, res) => {
    res.render('new');
})

app.get('/bear', (req, res) => {
    res.render('bears', {bears: bears});
})

app.post('/bear', (req, res) => {
    if (req.body.name != '' && req.body.food != '')
    {
        let name = req.body.name;
        let food = req.body.name;
        let newBear = {name: name, food: food};
        bears.push(newBear)
        res.redirect('/bear')
    }
})

app.listen(3000, process.env.IP, () => {})