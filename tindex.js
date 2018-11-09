var fs = require('fs');

/**
* Синхронное чтение и запись
*/
// Чтение файла
// var fileReader = fs.readFileSync('./text.txt', 'utf8');
// Код ниже не будет вызван, пока объект fs не прочтет весь файл
// console.log(fileReader);
// Запись в файл
// var message = fileReader + "\nПривет\nВсе круто!"
// var writeReader = fs.writeFileSync('./text.txt', message);

/**
* Асинхронное чтение и запись
*/
// Чтение файла
fs.readFile('./text.txt', 'utf8', function(err, data) {
  if(err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
// Код ниже не будет вызван, пока объект fs не прочтет весь файл
// console.log(fileReader);
// Запись в файл
fs.writeFile('./text.txt', "Re-write text.txt", function(err, data) {
  if(err) {
    console.log(err);
  }
});
