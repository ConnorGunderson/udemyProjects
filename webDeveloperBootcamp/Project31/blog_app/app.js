const   
    express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    methodOverride = require('method-override'),
    expressSan = require('express-sanitizer'),
    app = express();

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost:27017/blog_app');

app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSan());
app.use(express.static('public'));
app.use(methodOverride('_method'))
app.set('view engine', 'ejs');


// title, image, body, created
let blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
})

let Blog = mongoose.model("Blog", blogSchema);

// ROUTES


app.get('/', (req, res) => {
    res.redirect('/blog')
})
// INDEX
app.get('/blog', (req, res) => {
    Blog.find({}, (e, blog) => {
        if (e)
        {
            console.log('Error: ', e);
        }
        else
        {
            res.render('index', {blog: blog});
        }
    });
    
});
// NEW
app.get('/blog/new', (req, res) => {
    res.render('new')
});

// CREATE
app.post('/blog', (req, res) => {
    // sanitize contents of the body
    req.body.blog.body = req.sanitize(req.body.blog.body)
    Blog.create(req.body.blog, (e, post) => {
        if (e)
        {
            res.render('new');
        }
        else
        {
            res.redirect('/blog')
        }
    });
});

// SHOW
app.get('/blog/:id', (req, res) => {
    Blog.findById(req.params.id, (e, foundBlog) => {
        if (e)
        {
            res.redirect('/blog')
        }
        else
        {
            res.render('show', {blog: foundBlog})
        }
    })
})

// EDIT
app.get('/blog/:id/edit', (req, res) => {
    Blog.findById(req.params.id, (e, foundBlog) => {
        if (e)
        {
            res.redirect('/blog')
        }
        else
        {
            res.render('edit', {blog: foundBlog});
        }
    })
})

// UPDATE ROUTE
app.put('/blog/:id', (req, res)=> {
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, (e, updateBlog) => {
        if (e)
        {
            res.redirect('/blog')
        }
        else
        {
            res.redirect('/blog/' + req.params.id)
        }
    } 
})

// DELETE ROUTE
app.delete('/blog/:id', (req, res) => {
    Blog.findByIdAndRemove(req.params.id, (e) => {
        if (e)
        {
            res.redirect('/blog')
        }
        else
        {
            res.redirect('/blog')
        }
    }) 
})

app.listen(3000, process.env.IP, () => {})

