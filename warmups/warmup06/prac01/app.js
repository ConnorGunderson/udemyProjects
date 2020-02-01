const 
    express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    app = express()

mongoose.set(useUnifiedTopology, true);
mongoose.set(useNewUrlParser, true);
mongoose.connect('mongodb://localhost:27017/mountain_app');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Mongoose Schema/Model
let mountainSchema = new mongoose.Schema({
    name: {type: String, required: true},
    location: {type: String, required: true},
    created: {type: Date, default: Date.now}
})

let Mountain = mongoose.model("Mountain", mountainSchema);


// INDEX ROUTE AND RE ROUTE
app.get('/', (req, res) => {
    res.redirect('/mountains');
});

// INDEX ROUTE
app.get('/mountains', (req, res) => {
    Mountain.find({}, (e, m) => {
        if (e) {
            console.log('INDEX Error: ', e);
        } else {
            res.render('index', {mountain: m})
        }
    });
});

// NEW
app.get('/mountains/new', (req, res) => {
    res.render('new');
});

// CREATE
app.post('/mountains', (req, res) => {
    Mountain.findById(req,body.mountain, (e, m) => {
        if (e) {
            res.redirect('/mountains/new')
        } else {
            res.redirect('/')
        }
    });
});
// EDIT
app.get('/mountains/:id/edit')
// SHOW
app.get('/mountains/:id', (req, res) => {
    Mountain.findById(req.params.id, (e, m) => {
        if (e) {
            console.log('\nSHOW Error:\n', e);
        } else {
            res.render('show', {mountain: m})
        }
    })
})
// UPDATE
app.put('/mountains/:id', (req, res) => {
    Mountain.findByIdAndUpdate(req.params.id, req.body.mountain, (e, m) => {
        if (e) {
            console.log('PUT Error: ', e);
        } else {
            res.redirect('/mountains')
        }
    })
});
// DESTROY
app.delete('/mountains/:id', (req, res) => {
    Mountain.findByIdAndDelete(req.params.id, (e) => {
        if (e) {
            console.log('DELETE Failed: ', e);
        } else {
            res.redirect('/mountains')
        }
    })
})


// PORT LISTENER
app.listen(3000, process.env.IP, () => {})