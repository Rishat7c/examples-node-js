var events = require('events');
var util = require('util');

// Constructor
var Cars = function(model) {
  this.model = model;
};

//
util.inherits(Cars, events.EventEmitter);

// Objects
var ford = new Cars("ford");
var bmw = new Cars("bmw");
var audi = new Cars("audi");

// Circle
var cars = [ford, bmw, audi];
cars.forEach(function(car) {
    car.on('speed', function(text) {
      console.log(`${car.model} speed is - ${text}`);
    });
});

// Call Objects
bmw.emit("speed", "254.5");
