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
});

app.get('/store', function (req, res) {
    res.send('To jest sklep');
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