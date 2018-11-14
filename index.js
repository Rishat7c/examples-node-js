var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/about', function(req, res) {
    res.render('about');
});

app.get('/news/:id/:name', function(req, res) {
    var obj = {
        id: 0,
        title: 'Новость',
        paragraph: ['Ford', 'Bmw', 'Audi', 'Vaz']
    };
    res.render('news', {newsId: req.params.id, obj: obj});
});

app.listen(3000);