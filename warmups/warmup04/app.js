const express = require('express'),
      mongoose  = require('mongoose'),
      bodyParser = require('body-parser'),
      app = express()

mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);
mongoose.connect('mongodb://localhost:27017/warmup04');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

let Schema = mongoose.Schema;
let Model = mongoose.model;

let homeSchema = new Schema({
    name: String,
    price: String,
    location: String  
});

let Home = Model('Home', homeSchema);


// INDEX ROUTE
app.get('/', (req, res) => {
    res.render('landing');
})

app.get('/homes', (req, res) => {
    Home.find({}, (e, house) => {
        if (e)
        {
            console.log('Error: ', e);
        }
        else
        {
            res.render('index', {house: house});
        }
    })
})

app.post('/homes', (req, res) => {
    let name = req.body.name;
    let price = req.body.price;
    let location = req.body.location;
    let newHome = {name: name, price: price, location: location};
    Home.create(newHome), (e, home) => {
        // catching and handling error
        if (e)
        {
            console.log('Error: ', e);
        }
        // successful creation of home into the db
        else
        {
            console.log('pass');
        }
    }

    res.redirect('/homes')
})

app.get('/homes/new', (req, res) => {
    res.render('new')
})

app.listen(3000, process.env.IP, () => {})



