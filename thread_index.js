var fs = require('fs');

// Чтение data 
// myReadShort.on('data', function(chunk) {
//     console.log(`Новые данные получены\n${chunk}`);
//     myWriteShort.write(chunk);
// });

var http = require('http');

var server = http.createServer(function(req, res) {
    if(req.url != "/favicon.ico")
        console.log(req.url);

    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    // Чтение потока & файл
    var myReadShort = fs.createReadStream('./text.txt', 'utf8');
    myReadShort.pipe(res);

});

server.listen(3000, 'localhost');
console.log('*:3000');