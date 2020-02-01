const
    express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    app = express()

mongoose.set(useNewUrlParser, true);
mongoose.set(useUnifiedTopology, true);
mongoose.connect('mongodb://localhost/prac_02_app');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');

// Schemas and Models
let vegeSchema = new mongoose.Schema({
    name: {type: String, required:true},
    Price: {type: Number, required:true},
    created: {type: Date, default: Date.now}
});

let Vegetable = mongoose.model("Vegetable", vegeSchema);

app.get('/', (req, res) => {
    res.redirect('/veges')
})

// INDEX
app.get('/veges', (req ,res) => {
    Vegetable.find({}, (e, v) => {
        if (e) {
            console.log('INDEX Err: ', e);
        } else {
            res.render('index', {vegetable: v});
        }
    })
})

// NEW
app.get('/veges/new', (req, res) => {
    res.render('new')
})

// CREATE
app.post('/veges', (req, res) => {
    Vegetable.create(req,body.vegetable, (e, v) => {
        if (e) {
            console.log('CREATE Err: ', e);
        } else {
            res.redirect('/');
        }
    })
})

// SHOW
app.get('/veges/:id', (req, res) => {
    Vegetable.findById(req.params.id, (e, v) => {
        if (e) {
            console.log('SHOW Err: ', e);
        } else {
            res.render('show', {vegetable, v});
        }
    })
})

// EDIT
app.get('/veges/:id/edit', (req, res) => {
    Vegetable.findById(req.params.id, (e, v) => {
        if (e) {
            console.log('EDIT Err: ', e);
        } else {
            res.render('edit', {vegetable, v});
        }
    })
})

// UPDATE
app.put('/veges/:id', (req, res) => {
    Vegetable.findByIdAndUpdate(req.params.id, req.body.vegetable, (e, v) => {
        if (e) {
            console.log('UPDATE Err: ', e);
        } else {
            res.redirect('/vegetables/' + req.params.id);
        }
    })
})

app.delete('/veges/:id', (req, res) => {
    Vegetable.findByIdAndDelete(req.params.id, (e) => {
        if (e) {
            console.log('REMOVE Err:', e);
        } else {
            res.redirect('/')
        }
    })
})