// server_task1.js
var http = require('http');

var port = 5000;

var server = http.createServer(function(req, res) {
    console.log(`Request for ${req.url} by method ${req.method}`);

    res.setHeader('Content-Type', 'text/html');

    if (req.url === '/') {
        res.statusCode = 200;
        res.end('<html><body><h1>Welcome to the Home Page!</h1></body></html>');
    } else if (req.url === '/about') {
        res.statusCode = 200;
        res.end('<html><body><h1>About Us</h1></body></html>');
    } else if (req.url === '/contact') {
        res.statusCode = 200;
        res.end('<html><body><h1>Contact Us</h1></body></html>');
    } else {
        res.statusCode = 404;
        res.end('<html><body><h1>Invalid Request!</h1></body></html>');
    }
});

server.listen(port, () => {
    console.log(`The NodeJS server on port ${port} is now running...`);
});
