const http = require('http');

const port = 3002;
const hostname = '127.0.0.1';

const server = http.createServer((req,res) => {
    console.log(req.url);
    res.setHeader('Content-Type','text/plain')
    res.statusCode = 200;
    res.end("Server calisiyor");

})


server.listen(port,hostname,() => {
    console.log(`Server Calisiyor, http://${hostname}:${port}/`)
});