const 
    mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    name: String,
    email: String,
    // posts: [postSchema]
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
})

module.exports = mongoose.model('User', userSchema);