const mongoose = require('mongoose');

let fooPostSchema = new mongoose.Schema(
    {
        title: String,
        image: String,
        content: String,
        created: {type: Date, default: Date.now},
        comments: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Comment"
            }
        ]            
    }
)

module.exports = mongoose.model("Post", fooPostSchema);