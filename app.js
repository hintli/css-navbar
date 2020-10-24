const express = require('express')
const app = express ()
const path = require('path')

app.use(express.static('public'))

app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname,'site/index.html'))
})

app.get('/about', (req,res) => {
    res.sendFile(path.resolve(__dirname,'site/about.html'))
})

app.get('/blog', (req,res) => {
    res.sendFile(path.resolve(__dirname,'site/blog.html'))
})

app.listen(3001)