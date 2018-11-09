// var mymodules = require('./mymodules'); // Подключения модуля без его расширения
// console.log(mymodules.value);
// console.log(mymodules.arResult([0, 7, 14, 21, 28, 35, 42]));
// console.log(mymodules.multiply(5, 3));

var events = require('events');

var myEmit = new events.EventEmitter();

// Create hundler
myEmit.on("jump", function (text) {
    console.log(text);
});

// Call hundler
myEmit.emit("jump", "Hi, Rishat");
