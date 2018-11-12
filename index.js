var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('This is home');
});

app.get('/contact', function(req, res) {
    res.send('hello');
});

app.get('/contact/:id', function(req, res) {
    res.send(`id = ${req.params.id}`);
});

app.listen(3000)