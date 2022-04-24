const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/home') {
        res.end('welcome to homepage')
    } else if (req.url === '/about') {
        res.end('welcome to about page')
    } else {
        res.end(`
            <p>Invalid url</p>
            <a href="/home">Back</a>
        `)
    }
})

server.listen(5000)