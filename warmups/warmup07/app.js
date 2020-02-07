const
    express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    expressSanitizer = require('express-sanitizer'),
    Post = require("./models/fooPost"),
    Comment = require("./models/fooComment"),
    methodOverride = require('method-override'),
    seedDB = require('./seeds'),
    app = express()

seedDB();
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose.connect("mongodb://localhost:27017/warmup_07");

app.use(bodyParser.urlencoded({extended:true}));
app.use(expressSanitizer())
app.use(express.static('public'));
app.use(methodOverride("_method"))
app.set("view engine", "ejs");

// INDEX
app.get('/', (req, res) => {
    try {
        res.redirect('/foo');
    } catch (e) {
        console.log('error: ', e);
    }
})
app.get("/foo", (req, res) => {
    try {
        Post.find({}, (e, posts) => {
            res.render("fooPosts/index", {posts: posts});
        })
    } catch (e) {
        console.log('error ', e);
    }
})

// NEW
app.get("/foo/new", (req, res) => {
    try {
        res.render("fooPosts/new")
    } catch (e) {
        console.log('error ', e);
    }
});

// CREATE
app.post("/foo/:id", (req, res) => {
    try {
        req.body.post.body = req.sanitize(req.body.post.body)
        Post.create(req.body.blog, (e, newPost) => {
             res.redirect('/foo');
        })
    } catch(e) {
        console.log('error ', e);
        res.redirect('/foo/new')
    }
});

// SHOW
app.get('/foo/:id', (req, res) => {
    try {
        Post.findById(req.params.id), (e, bar) => {
            res.render('fooPosts/show', {fooContent: bar})
        }
    } catch (e) {
        console.log('error: ', e);
        res.redirect('/foo');
    }
});

// EDIT
app.get('/foo/:id/edit', (req, res) => {
    try {
        Post.findById(req.params.id, (e, fooPost) => {
            res.render("edit", {fooPost: fooPost});
        })
    } catch (e) {
        console.log('error ', e);
        res.redirect('/foo/' + req.params.id);
    }
});

// UPDATE
app.put("/foo/:id", (req, res) => {
    try {
        Post.findByIdAndUpdate(req.params.id, req.body.post, () => {
             res.redirect('/foo/'+ req.params.id);
        })
    } catch (e) {
        console.log('error: ', e);
        res.redirect('/foo/' + req.params.id);
    }
})

// REMOVE
app.delete('/foo/:id', (req, res) => {
    try {
        Post.findByIdAndDelete(req.params.id), () => {
            res.redirect('/foo');
        }
    } catch (e) {
        console.log('error: ', e);
        res.redirect('/foo/' + req.params.id);
    }
})

// Listening Port
app.listen(3000, process.env.IP, () => {})