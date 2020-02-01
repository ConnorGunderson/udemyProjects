const
    express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    app = express()

// Server Config
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose.connect("mongodb://localhost:27017/book_app");
// App Config 
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Schema and Modeling
let bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    description: String,
    image: String,
    created: {type: Date, default: Date.now}
});

let Book = mongoose.model("Book", bookSchema);

// ROOT REROUTE
app.get('/', (req, res) => {
    res.redirect('/books')
})

// INDEX
app.get('/books', (req, res) => {
    Book.find({}, (e, foundIndex) => {
        if (e) {
            res.redirect('/error')
        } else [
            res.render('index', {book: foundIndex})
        ]
    })
})

// CREATE
app.post('/books', (req, res) => {
    Book.create(req.body.book, (e, newBook) => {
        if (e) {
            res.redirect('/books/new')
        } else {
            res.redirect('/books');
        }
    })
})

// NEW
app.get('/books/new', (req, res) => {
    res.render('new');
})

// SHOW
app.get('/books/:id', (req, res) => {
    Book.findById(req.params.id, (e, foundBook) => {
        if (e) {
            res.redirect('/books')
        } else {
            res.render('show', {book: foundBook})
        }
    })
})

// EDIT
app.get('/books/:id/edit', (req, res) => {
    Book.findById(req.params.id, (e, foundBook) => {
        if (e) {
            res.redirect('/books');
        } else {
            res.render('edit', {book: foundBook});
        }
    })
})

// UPDATE
app.put('/books/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body.book, (e) => {
        if (e) {
            res.redirect('/books/:id/edit')
        } else {
            res.redirect('/books/:id')
        }
    })
})

// DESTROY
app.delete('/books/:id', (req, res) => {
    Book.findByIdAndRemove(req.params.id, (e) => {
        if (e) {
            res.redirect('/books/:id');
        } else {
            res.redirect('/books');
        }
    })
})



// Listening Port
app.listen(3000, process.env.IP, () => {})