const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('assets'));

app.get('/auth/google', function(req, res) {
  res.render('dynamic-user', {
    user: { email: 'user@gmail.com', password: 'pass' }
  });
});

app.get('/', function(req, res) {
  res.render('glogin');
});

app.listen(3000);
app.use(function(req, res, next) {
  res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!');
});
