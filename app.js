const express = require('express')
const app = express ()
const exphbs  = require('express-handlebars');
const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const mongoose = require('mongoose');
const path = require('path')
var bodyParser = require('body-parser')
const fileUpload=require('express-fileupload');
//const generateDate = require('./helpers/generateDate').generateDate

mongoose.connect('mongodb+srv://emre:esmeremre860@cluster0.vz2em.mongodb.net/cluster0?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});
//veritabanı bağlantısı altında ver herhangi bir request vermeden
app.use(fileUpload())


app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


// const myMiddleware = (req,res,next) => {
//   console.log("Mıddleware çalıştı")
//   next()
// }
// app.use('/',myMiddleware)



const main = require('./routes/main');
const posts = require('./routes/posts');
const users = require('./routes/users');



app.use('/',main)
app.use('/posts',posts)
app.use('/users',users)


 



//{helpers:{generateDate:generateDate}}

app.use(express.static('public'))

app.engine("handlebars", expressHandlebars({
    handlebars: allowInsecurePrototypeAccess(Handlebars)
  }), exphbs());
  app.set("view engine", "handlebars");
  






app.listen(3003,()=>{
    console.log("server listening on 3003");
});

