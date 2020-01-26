const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/cat_app', {useNewUrlParser: true});
// add a new cat to the db

// Schematic for a cat
let catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
})

// compile catSchema into a cat model
let cat = mongoose.model('cat', catSchema);

// make a new cat
cat.create({
    name: 'poopers',
    age: 15,
    temperament: 'nice'

}, (e, cat) => {
    if (e)
    {
        console.log(e);
    }
    else
    {
        console.log('success!');
        
    }
}
)

// let Frank = new cat({
//     name:'Frank',
//     age: 12,
//     temperament: 'Chill'
// })

// mongoose.method(e, object)

// Frank.save( (e, cat) => {
//     if(e) 
//     {
//         console.log('Error:');
//     }
//     else
//     {
//         console.log('cat upload success');
//         console.log(cat);
        
//     }
// })

// retreive all cats from the db and console.log each one
cat.find({}, (e, cats) => {
    if(e)
    {
        console.log('error:', e);
    }
    else
    {
        console.log(cats);
    }
});