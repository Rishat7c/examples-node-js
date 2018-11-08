// Func
var arResult = function (array) {
    return "В массиве находится " + array.length + " элементов"
};

// Param
var multiply = function (x, y) {
  return `$(x) умножить $(y) равно $(x * y)`;
}


var value = 6;
// Print
// console.log(arResult([0, 7, 14, 21, 28, 35]));

// Export
module.exports.arResult = arResult;
module.exports.multiply = multiply;
module.exports.value = value;
