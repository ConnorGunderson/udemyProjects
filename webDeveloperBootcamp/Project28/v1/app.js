const express = require('express')
const rp = require('request-promise')
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// landing page
app.get('/', (req, res) => {
    res.render('landing');
})

let campgrounds = [
    {name: 'Saint Clair River', image: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80'},
    {name: 'Granite Hill', image: 'https://images.unsplash.com/photo-1532339142463-fd0a8979791a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'},
    {name: 'Hutch Book Lake', image: 'https://images.unsplash.com/photo-1505735754789-3404132203ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'},
    {name: 'Saint Clair River', image: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80'},
    {name: 'Granite Hill', image: 'https://images.unsplash.com/photo-1532339142463-fd0a8979791a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'},
    {name: 'Hutch Book Lake', image: 'https://images.unsplash.com/photo-1505735754789-3404132203ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'},
    {name: 'Saint Clair River', image: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80'},
    {name: 'Granite Hill', image: 'https://images.unsplash.com/photo-1532339142463-fd0a8979791a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'},
    {name: 'Hutch Book Lake', image: 'https://images.unsplash.com/photo-1505735754789-3404132203ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'}
];

app.get('/campgrounds', (req, res) => {
    // campgrounds page that lists all campgrounds
    res.render('campgrounds', {campgrounds: campgrounds});
});

app.post('/campgrounds', (req, res) => {
    if (req.body.name != '' && req.body.image != '')
    {
        let name = req.body.name;
        let image = req.body.image;
        let newCamp = {name: name, image: image};
        campgrounds.push(newCamp);
        res.redirect('/campgrounds');
    }
})
app.get('/campgrounds/new', (req, res) => {
    res.render('new');
});

app.listen(3000, process.env.IP, () => {})
