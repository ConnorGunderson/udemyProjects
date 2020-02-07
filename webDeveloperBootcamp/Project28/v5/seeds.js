const
    mongoose = require('mongoose'),
    Campground = require('./models/campgrounds')
    Comment = require('./models/comments')

let seeds = [
    {
        name: 'Crystal Lake', 
        image: "https://images.unsplash.com/photo-1520824071669-892f70d8a23d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1297&q=80",
        description: "lorem ipsum foo blah blah boh foh hei"
    },
    {
        name: "Heavens Peak", 
        image: "https://images.unsplash.com/photo-1533873984035-25970ab07461?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
        description: "lorem ipsum foo blah blah boh foh hei" 
    },
    {
        name: "Asgrandia", 
        image: "https://images.unsplash.com/photo-1503377984674-b81eeeedbb3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80",
        description:"lorem ipsum foo blah blah boh foh hei" 
    },
    {
        name: "Stonetails Edge", 
        image: "https://images.unsplash.com/photo-1470805453991-a1b8c719cc70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        description: "lorem ipsum foo blah blah boh foh hei"
    }
]

async function seedDB(){
     try {
        await Comment.deleteMany({});
        console.log('Comments deleted', );
        await Campground.deleteMany({});
        console.log('Campgrounds deleted', );
        for(const seed of seeds) {
            let campground = await Campground.create(seed);
            console.log('Campground Created', );
            let comment = await Comment.create(
                {
                    text: 'Quisquam ut necessitatibus voluptatem iusto amet.',
                    author: "Gerald O'Hara"
                }
            )
            console.log('Comment Created', );
            campground.comments.push(comment);
            campground.save();
            console.log('Finish ', );
        }
    } catch(e) {
        console.log(e);
    }
}

module.exports = seedDB;