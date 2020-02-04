const mongoose = require('mongoose');

let fooCommentSchema = new mongoose.Schema(
    {
        content: String,
        author: String
    }
)

module.exports = mongoose.model("Comment", fooCommentSchema);