let express = require('express');
let app = express();



const posts = require('./posts');
const rateLimit = require('express-rate-limit');

let PORT = 8000;


const limiter = rateLimit({
    max : 10,
    windowMs : 60000
})

app.get('/posts', limiter, ( req, res) => {

    res.send({
        status : "success",
        posts : posts
    })
});

app.listen(PORT, function(err) {
    if(err) {
        console.log(err)

    }
    console.log('listening on Port', PORT)
});