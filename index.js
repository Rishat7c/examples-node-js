var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('This is home');
});

app.get('/contact', function(req, res) {
    res.send('hello');
});

app.get('/contact/:name/:id', function(req, res) {
    res.send(`name = ${req.params.name}, id = ${req.params.id}`);
});

app.listen(3000);