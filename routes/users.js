const express = require('express')
const Users = require('../models/Users')
const router = express.Router()

router.get('/register', (req,res) => {
    res.render('site/register')
})

router.post('/register', (req,res) => {
    Users.create(req.body)
    res.render('site/login')
})

router.get('/login', (req,res) => {
    res.render('site/login')
})

router.post('/login',(req,res) => {
    const {email,password} = req.body;
    Users.findOne({email},(error,user) => {
        if(user) {
            //session
            req.session.userId = user._id;
            console.log(req.session)

            if(user.password === password) {
                res.redirect('/')
            }else {
                res.redirect('/users/login')
            }
        }else {
            res.redirect('/register')
        }
    })
})

module.exports = router;