const express = require('express')
const app = express ()
const exphbs  = require('express-handlebars');
const mongoose = require('mongoose');
 
// Connection URL

 
await mongoose.connect('mongodb+srv://emre:esmeremre860@cluster0.vz2em.mongodb.net/cluster0?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

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

app.get('/contact', (req,res) => {
    res.render('site/contact')
})

app.get('/login', (req,res) => {
    res.render('site/login')
})

app.get('/register', (req,res) => {
    res.render('site/register')
})


app.listen(3000,()=>{
    console.log("server listening on 3000");
});