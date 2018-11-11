var fs = require('fs');

// Чтение потока & файл
var myReadShort = fs.createReadStream('./text.txt');

// Событие data 
myReadShort.on('data', function(chunk) {
    console.log(`Новые данные получены\n${chunk}`);
});