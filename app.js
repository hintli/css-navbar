const http = require('http');
const fs = require('fs');

const port = 3005;
const hostname = '127.0.0.1';

const IndexPage = fs.readFileSync('index.html');
const ContactPage = fs.readFileSync('contact.html');
const AboutPage = fs.readFileSync('about.html');


const server = http.createServer((req,res) => {
    if(req.url === '/') {
        return res.end(IndexPage)
    }
    else if(req.url === '/contact') {
        return res.end(ContactPage);
    }
    else if(req.url === '/about') {
        return res.end(AboutPage);
    }
    else {
        res.statusCode = 404
        res.end('Error')
    }
    
});


server.listen(port,hostname,() => {
    console.log(`Server Listening || htttp://${hostname}:${port}`);
});