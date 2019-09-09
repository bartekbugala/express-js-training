var express = require('express');

var app = express();

var myRequests = [
  {
    method: 'get',
    path: '/'
  },
  {
    method: 'post',
    path: '/'
  },
  {
    method: 'put',
    path: '/jedna_porcja_danych'
  },
  {
    method: 'delete',
    path: '/del_user'
  },
  {
    method: 'get',
    path: '/list_user'
  },
  {
    method: 'get',
    path: '/ab*cd'
  }
];

myRequests.forEach(element => {
  appRequest(element.method, element.path);
});

var server = app.listen(3000, function() {
  console.log('Przykładowa aplikacja nasłuchuje na: http://localhost:3000');
});

function resSend(res, methodString, addressString) {
  res.send(`Hello ${methodString}`);
}

function logMsg(methodString, addressString = 'głównej'){
  if(addressString==='/'){
    addressString='głównej';
}
console.log(`Otrzymałem żądanie ${methodString} do strony ${addressString}`);
}

function appRequest(method,target){
  app[method](target, function(req,res){
    logMsg(method, target)
    resSend(res,method,target);
  })
}
