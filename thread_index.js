var fs = require('fs');

// Чтение потока & файл
var myReadShort = fs.createReadStream('./text.txt', 'utf8');
var myWriteShort = fs.createWriteStream('./news.txt');

// Чтение data 
// myReadShort.on('data', function(chunk) {
//     console.log(`Новые данные получены\n${chunk}`);
//     myWriteShort.write(chunk);
// });

myReadShort.pipe(myWriteShort);