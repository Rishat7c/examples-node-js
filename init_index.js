console.log("Hi, Rishat!");
console.log(__dirname); // <-- global const
console.log(__filename); // <-- global const

// Переменные
var x = 0;
if(x == 0)
  console.log(true);

// Циклы
for(var i = 0; i < 5; i++)
  console.log(i);

// Таймеры
setTimeout(function() {
    console.log("Hey, dude. Its 2000ml timer");
}, 2000);
