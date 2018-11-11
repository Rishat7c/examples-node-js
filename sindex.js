var http = require('http');

var server = http.createServer(function(req, res) {
    // res.writeHead(200, {'Content-Type:': 'text/plain'});
    res.end('Hi, Rishat');
});

server.listen(3000, 'localhost');
console.log(' *:3000');