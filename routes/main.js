const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

router.get('/', (req,res) => {
    res.render('site/index');
})

router.get('/blog', (req,res) => {
    Post.find({}).then(posts => {
        console.log(posts)
        res.render('site/blog',{posts:posts})
    })
    
})

router.get('/about', (req,res) => {
    res.render('site/about');
})

router.get('/contact', (req,res) => {
    res.render('site/contact')
})







module.exports = router;