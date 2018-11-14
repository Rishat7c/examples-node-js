var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs');

app.use('/public', express.static('public'));

app.get('/', function(req, res) {
    res.render('index');
});

// app.get('/about', function(req, res) {
//     res.render('about');
// });

app.post('/about', urlencodedParser, function(req, res) {
    // if (!req.body) return res.sendStatus(400)
    res.send(req.body)
    res.render('about-succes', {data: req.body});
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