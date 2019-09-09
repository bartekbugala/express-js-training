var express = require('express');

var app = express();

app.get('/', function(req, res) {
  resSendLog(res, 'GET');
});

app.post('/', function(req, res) {
  resSendLog(res, 'POST');
});

app.delete('/del_user', function(req, res) {
  resSendLog(res, 'DELETE', '/del_user');
});

app.get('/list_user', function (req, res) {
    resSendLog(res, 'GET', '/list_user');
});

app.get('/ab*cd', function(req, res) {
    resSendLog(res, 'GET', '/ab*cd');
});

var server = app.listen(3000, function() {
  console.log('Przykładowa aplikacja nasłuchuje na: http://localhost:3000');
});

app.use(function (req, res, next) {
  res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!');
});

function resSendLog(res, methodString, addressString) {
  res.send(`Hello ${methodString}`);
  logHTTPMethodMsg(methodString, addressString);
}

function logHTTPMethodMsg(methodString, addressString = 'głównej') {
    if(addressString==='/'){
        addressString='głównej';
    }
  console.log(`Otrzymałem żądanie ${methodString} do strony ${addressString}`);
}
