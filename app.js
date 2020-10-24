const express = require('express')
const app = express ()
const exphbs  = require('express-handlebars');

const path = require('path')

app.use(express.static('public'))

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', (req,res) => {
    res.render('site/index');
})

app.get('/blog', (req,res) => {
    res.render('site/blog');
})

app.get('/about', (req,res) => {
    res.render('site/about');
})

app.get('/about', (req,res) => {
    res.sendFile(path.resolve(__dirname,'site/about.html'))
})

app.get('/blog', (req,res) => {
    res.sendFile(path.resolve(__dirname,'site/blog.html'))
})

app.listen(3002)