var http = require('http');

var server = http.createServer(function(req, res) {
    if(req.url != '/favicon.ico')
        console.log("URL страницы: " + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end('Hi, Rishat\nПривет, Ришат');
});

server.listen(3000, 'localhost');
console.log(' *:3000');