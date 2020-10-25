const express = require('express')
const router = express.Router()
const Post = require('../models/Post')



router.get('/new', (req,res) => {
    res.render('site/addpost')
})



router.post('/test', (req,res) => {
    // console.log(req.body)
    Post.create(req.body);
    res.redirect('/')
})

router.get('/:id', (req,res) => {
    console.log(req.params.id)
     Post.findById(req.params.id).then(
         post => {
             res.render('site/post',{post:post})
         }
     )
})


module.exports = router;