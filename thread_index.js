var fs = require('fs');

// Чтение data 
// myReadShort.on('data', function(chunk) {
//     console.log(`Новые данные получены\n${chunk}`);
//     myWriteShort.write(chunk);
// });

var http = require('http');

var server = http.createServer(function(req, res) {
    if(req.url != "/favicon.ico") {
        // console.log(req.url);
        if(req.url === '/index' || req.url === '/') {
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8;'});
            fs.createReadStream('./pages/index.html').pipe(res);
        } else if(req.url === '/about') {
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8;'});
            fs.createReadStream('./pages/about.html').pipe(res);
        } else if(req.url === '/contact') {
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8;'});
            fs.createReadStream('./pages/contact.html').pipe(res);
        }
    }
});

server.listen(3000, 'localhost');
console.log('*:3000');