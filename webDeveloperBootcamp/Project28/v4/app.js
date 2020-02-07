const 
    express =       require('express'),
    rp =            require('request-promise'),
    app =           express();
    bodyParser =    require('body-parser'),
    mongoose =      require('mongoose'),
    Campground =    require('./models/campgrounds'),
    Comment =       require("./models/comments"),
    seedDB =        require('./seeds')       

seedDB();
mongoose.set("useNewUrlParser", true)
mongoose.set('useUnifiedTopology', true)
mongoose.connect('mongodb://localhost:27017/yelpcamp_v4')

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// landing page reroute
app.get('/', (req, res) => {
    res.redirect('/campgrounds');
})

// INDEX Route
app.get('/campgrounds', (req, res) => {
    // campgrounds page that lists all campgrounds
    // get all campgroudns from db then render the campgrounds page
    Campground.find({}, (e, camp) => {
        if(e)
        {
            console.log('Error: ', e);
        }
        else
        {
            res.render('campgrounds/index', {campgrounds: camp})
        }
    });
    // res.render('campgrounds', {campgrounds: campgrounds});
});

// CREATE Route
app.post('/campgrounds', (req, res) => {
        let name = req.body.name;
        let image = req.body.image;
        let desc = req.body.description
        let newCamp = {name: name, image: image, description: desc};
        Campground.create(newCamp), (e, ncamp) => {
            if (e)
            {
                console.log('Error: ', e);
            }
            else
            {
                console.log('POST pass');
            }
        }

        // campgrounds.push(newCamp);
        res.redirect('/campgrounds');
})

// NEW Route
app.get('/campgrounds/new', (req, res) => {
    res.render('campgrounds/new');
});

// SHOW Route explains and shows more information
app.get('/campgrounds/:id', (req, res) => {
    // find campground with the provided id
    try {
        Campground.findById(req.params.id).populate("comments").exec((e, camp) => {
            res.render('campgrounds/show', {campground: camp})
        })
    } catch(e) {
        console.log('error', e);
    }
    // show the information on that id
})

// New Comment
app.get("/campgrounds/:id/comments/new", (req, res) => {
    try {
        Campground.findById(req.params.id, (n, campground) => {
            res.render("comments/new", {campground: campground})
        })
    } catch(e) {
        console.log('error ', e);
    }
})

// Comment POST
app.post("/campgrounds/:id/comments", (req, res) => {
    Campground.findById(req.params.id, (n, campground) => {
        try {
            Comment.create(req.body.comment, (n, comment) => {
                campground.comments.push(comment)
                campground.save()
                res.redirect("/campgrounds/" + req.params.id);
            });
        } catch (e) {
            console.log('error ', e);
            res.redirect('/campgrounds/' + req.params.id);
        }
    })
})

app.listen(3000, process.env.IP, () => {})