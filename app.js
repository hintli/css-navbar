const path = require('path');
const express = require('express')
const app = express()


app.use(express.static('public'))

// app.use('/test',(req,res,next) => {
//     console.log('Middleware')
//     next();
// })
 
app.get('/', function (req, res) {
    res.sendFile(path.resolve('./index.html'));
})

app.get('/about', function (req, res) {
    res.sendFile(path.resolve('./about.html'));
})

app.get('/contact', function (req, res) {
    res.sendFile(path.resolve('./contact.html'));
})

app.get('/users/:userID/movies/:movieID', (req,res) => {
    res.send(`<h1>${req.params.userID} </h1>
        <h1>${req.params.movieID} </h1>`)
})
 
app.listen(3001)