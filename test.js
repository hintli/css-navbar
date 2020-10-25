const mongoose = require('mongoose');
const Post = require('./models/Post')
 
// Connection URL

 
 mongoose.connect('mongodb+srv://emre:esmeremre860@cluster0.vz2em.mongodb.net/test_db?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

Post.create({
    title : 'My First Title',
    content : 'My First Content',

},(error,post) => {
    console.log(error,post);
})