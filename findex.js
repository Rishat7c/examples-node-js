// Функции
function sayHey() {
  console.log("Hey");
}

// Каллирование функции
sayHey();

// Функция перменная
var printSomething = function() {
  console.log("text...");
}

// Калирование функции
printSomething();

// Функция
function call(func) {
    func();
}

// Каллирование функции с параметрами
call(sayHey);
