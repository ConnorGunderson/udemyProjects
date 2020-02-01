const
    mongoose = require('mongoose'),
    Post = require('./models/post'),
    User = require('./models/user')

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost:27017/blog_demo_embed_2');

// Post.create({
//     title: "how toasasdfasdfasdfasdf asdf asdf a cook a burger part 2",
//     content: "foo foo foo foo foo fk sdjf ksjd fks part 2"
// }, (e, p) => {
//     if (e) {
//         console.log('', e);
//     } else {
//         User.findOne({email: "heyitsme23@foo.net"}, (e, u) => {
//             if (e) {
//                 console.log('error:', e);
//             } else {
//                 u.posts.push(p)
//                 u.save((e, uData) => {
//                     if (e) {
//                         console.log('error ', e);
//                     } else {
//                         console.log('', uData);
//                     }
//                 })
//             }
//         })
//     }
// });

// find user and then find all posts for that user
User.findOne({name: "Frank Tank"}).populate("posts").exec((e, u) => {
    if (e) {
        console.log('', e);
    } else {
        console.log('User: ', u);
    }
});

// User.create({
//     name: "Frank Tank",
//     email: "heyitsme23@foo.net"
// })












//  LESSON 1 Embedded Data





// let newUser = new User({
//     name: 'Bob Dougley',
//     email: 'blah@foo.edu'
// });

// newUser.save((e, u) => {
//     if (e) {
//         console.log('error', e);
//     } else {
//         console.log('PASS', );
//     }
// })

// newUser.posts.push({
//     title: 'momgay',
//     content: 'very gay'
// })

// newUser.save((e, u) => {
//     if (e) {
//         console.log('Error: ', e);
//     } else {
//         console.log('PASS', u);
//     }
// })

// User.findOne({name: "Bob Dougley"}, (e, user) => {
    // if (e) {
        // console.log('Error: ', e);  
    // } else {
        // user.posts.push({
            // title: "why are you like this",
            // content: "I cant really say"
        // });
        // user.save((e2, u2) => {
            // if (e2) {
                // console.log('Error_2: ', e2);
            // } else {
                // console.log('User: ', u2);
            // }
        // })
    // }
// })



// let newPost = new Post({
    // title: 'Apples are big',
    // content: 'Yes they are'
// })
// 
// newPost.save((e, p) => {
    // if (e) {
        // console.log('Error: ', e);
    // } else {
        // console.log('PASS', p);
    // }
// })
