const 
    mongoose = require('mongoose'),
    Post = require('./models/fooPost'),
    Comment = require("./models/fooComment")

let seeds = [
    {
        title: "foo",
        image: "https://images.unsplash.com/photo-1514315153150-cd7d8d716178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        content: "Vero cum nulla accusamus quasi sunt."
    },
    {
        title: "bar",
        image: "http://lorempixel.com/640/480/cats",
        content: "Iusto sapiente dignissimos ipsum quo ut quaerat vitae. Temporibus quam dolore id qui molestias. Consequatur voluptatem id voluptate repellat fugit quae voluptatem. Ea quas veniam rem impedit et. Sunt ut velit quia tempore perspiciatis eaque aut eum. Provident provident quis incidunt magni nam natus."
    },
    {
        title: "foobar",
        image: "http://lorempixel.com/640/480/technics",
        content: "Qui fugiat blanditiis. Amet in eligendi. Iusto est error autem sed dolorem vero esse optio. Temporibus quo commodi dignissimos. Eveniet ea minima voluptatem rerum voluptates. Debitis facere quia labore itaque nihil fugiat qui occaecati tempore."
    },
    {
        title: "barfood",
        image: "http://lorempixel.com/640/480/abstract",
        content: "Ut enim culpa sint velit voluptatem est. Voluptatem architecto eaque officiis dolor libero sint labore. Ad dolorem reiciendis earum eum commodi tempora iusto. Porro aut quia dolorum et corrupti qui ex sit. Perspiciatis dolorem velit consequuntur vel. Aut consequatur inventore nemo nesciunt voluptatem et explicabo."
    },
]

async function seedDB(){
    try {
        await Post.deleteMany({});
        console.log('Post Deleted', );
        await Comment.deleteMany({});
        console.log('Comments deleted', );
        for (const seed of seeds){
            let post = await Post.create(seed);
            console.log('Post Created', );
            let comment = await Comment.create(
                {
                    text: 'Fugit vero aliquam.',
                    author: "Rebekah Ebert"
                }
            )
            console.log('Comment created', );
            post.comments.push(comment);
            post.save()
            console.log('Finish', );
        }
    } catch (e) {
        console.log('error ', e);
    }
}

module.exports = seedDB;