const express = require('express')
const app = express ()
const exphbs  = require('express-handlebars');
const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const mongoose = require('mongoose');
const main = require('./routes/main');
const posts = require('./routes/posts');
var bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())



app.use('/',main)
app.use('/posts',posts)

 
 mongoose.connect('mongodb+srv://emre:esmeremre860@cluster0.vz2em.mongodb.net/cluster0?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

const path = require('path')

app.use(express.static('public'))

app.engine("handlebars", expressHandlebars({
    handlebars: allowInsecurePrototypeAccess(Handlebars)
  }), exphbs());
  app.set("view engine", "handlebars");
  





app.listen(3004,()=>{
    console.log("server listening on 3004");
});