const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.use('/store', function(req, res, next){
    console.log('Jestem pośrednikiem przy żądaniu do /store');
    next();
});

app.get('/', function (req, res) {
    res.send('Hello world!');
    console.log('Hello world was sent')
});

app.get('/store', function (req, res) {
    res.send('To jest sklep');
});

app.get('/vendor/bootstrap.min.css', function (req, res) {
    res.sendFile('./vendor/bootstrap.min.css', { root: __dirname });
});

app.get('/dynamic-view', function(req, res){
    res.render('dynamic', {
        name: "Moja dynamiczna strona",
        url: "http://www.google.com"
    });
});

app.get('first-template', function (req, res) {
    res.render('first-template');
})

app.get('/first-template', function(req, res){
    res.render('first-template');
});

app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});