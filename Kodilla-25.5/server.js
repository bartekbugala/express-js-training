const express = require('express');
const app = express();

app.use('/store', function(req, res, next) {
  console.log('Jestem pośrednikiem przy żądaniu do /store');
  next();
});

app.use(express.static('assets'));

app.get('/', function(req, res) {
  res.sendFile('/index.html');
});

app.get('/userform', function(req, res) {
  const response = {
    first_name: req.query.first_name,
    last_name: req.query.last_name
  };
  res.json(response);
});

app.get('/store', function(req, res) {
  res.send('To jest sklep');
});

const server = app.listen(3000, 'localhost', function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Server serwujący statyczne pliki na http://' + host + ':' + port);
});

app.use(function(req, res, next) {
  res.status(404).send('Niestety, nie odnaleziono zasobu skontaktuj się z administratorem');
});
