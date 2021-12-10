const mongoose = require('mongoose');

let campSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

module.exports = mongoose.model('Campground', campSchema);