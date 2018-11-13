var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/pages/index.html');
});

app.get('/contact', function(req, res) {
    res.sendFile(__dirname + '/pages/contact.html');
});

app.get('/contact/:id', function(req, res) {
    res.send(`name = ${req.params.name}, id = ${req.params.id}`);
});

app.listen(3000);