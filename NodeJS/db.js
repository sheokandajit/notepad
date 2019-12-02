const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/notepaddb', (err) => {
    if(!err)
        console.log('connection succeeded');
    else
        console.log('error in db connection:' + JSON.stringify(err, undefined, 2))
});

module.exports =  mongoose;
