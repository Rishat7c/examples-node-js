var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('This is home');
});

app.listen(3000)