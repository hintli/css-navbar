const mongoose = require('mongoose');
const Post = require('./models/Post')
 
// Connection URL

 
 mongoose.connect('mongodb+srv://emre:esmeremre860@cluster0.vz2em.mongodb.net/test_db?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

// Post.create({
//     title : 'My Second Title',
//     content : 'My Second Content'
// },(error,data) => {
//     console.log(error,data)
// })



// Post.find({
//     title : "My First Title",
// },(error,data) => {
//     console.log(error, data)
// })

// Post.findById('5f95540ee122e5174ff5337f',
// (error,data) => {
//     console.log(error, data)
// })

// Post.findByIdAndUpdate('5f95540ee122e5174ff5337f',
// { title : "Güncellenmiş Title"},
// (error,data) => {
//     console.log(error, data)
// })

Post.findByIdAndDelete('5f9559859f09e31a884a04d1',(
error,data) => {
    console.log(error, data)
})