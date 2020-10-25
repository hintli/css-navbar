const express = require('express')
const app = express ()
const exphbs  = require('express-handlebars');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
// Connection URL
const url = 'mongodb+srv://emre:esmeremre860@cluster0.vz2em.mongodb.net/cluster0?retryWrites=true&w=majority';
 
// Database Name
const dbName = 'myproject';
 
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  //assert.equal(null, err);

  if(err){
      console.log("vtye bağlanırken hata oluştu");
  }

  console.log("Connected successfully to server");
 
  const dblabilir = client.dob(dbName);
 
  client.close();//
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


app.listen(1453,()=>{
    console.log("server listening on 5000");
});