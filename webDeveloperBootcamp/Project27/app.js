const request = require('request')

request('http://www.google.com', function(err, res, b){
    if(err){
        console.log('Something went wrong');
        console.log(err)
        
    } else {
        if (res.statusCode == 200){
            // Things worked
            console.log(b);
        }
    }
})