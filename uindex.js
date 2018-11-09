var events = require('events');
var util = require('util');

// Constructor
var Cars = function(model) {
  this.model = model;
};

//
util.inherit(Cars, events.EventEmitter);

// Objects
var bmw = new Cars("ford");
var bmw = new Cars("bmw");
var bmw = new Cars("audio");
