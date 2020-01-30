const express =     require('express'),
      rp =          require('request-promise'),
      app =         express();
      bodyParser =  require('body-parser'),
      mongoose =    require('mongoose')

mongoose.set("useNewUrlParser", true)
mongoose.set('useUnifiedTopology', true)
mongoose.connect('mongodb://localhost:27017/yelpcamp')

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

let campSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

let Campground = mongoose.model('Campground', campSchema);

// Campground.create({
//     name: 'Saint Clair River',
//     image: 'https://images.unsplash.com/photo-1475483768296-6163e08872a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
//     description: 'dummy text foo foo foo foo'
// }, (e, camp) => {
//     if(e)
//     {
//         console.log(e);
//     }
//     else
//     {
//         console.log(camp);
//     }
// })

// landing page
app.get('/', (req, res) => {
    res.render('landing');
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
            res.render('index', {campgrounds: camp})
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
    res.render('new');
});

// SHOW Route explains and shows more information
app.get('/campgrounds/:id', (req, res) => {
    // find campground with the provided id
    Campground.findById(req.params.id, (e, campFound) => {
        if (e) {
            console.log('Error: ', e);
        }
        else
        {
            res.render('show', {campground: campFound})
        }
    })
    // show the information on that id
})


app.listen(3000, process.env.IP, () => {})
