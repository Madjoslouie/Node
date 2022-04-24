// http module
const http = require('http');

// the createServer method is looking for a callback function
// the callback function has 2 parameter (both object)
// the first param represent the incoming request
// the second param is the respond
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("Welcome to the home page")
    }
    if (req.url === '/about') {
        res.end("Sample about page")
    }
    
})
 
server.listen(5000);

