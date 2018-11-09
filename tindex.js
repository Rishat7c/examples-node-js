var fs = require('fs');

// Чтение файла
var fileReader = fs.readFileSync('./text.txt', 'utf8');

// Код ниже не будет вызван, пока объект fs не прочтет весь файл
console.log(fileReader);

// Запись в файл
var message = fileReader + "\nПривет\nВсе круто!"
var writeReader = fs.writeFileSync('./text.txt', message);
