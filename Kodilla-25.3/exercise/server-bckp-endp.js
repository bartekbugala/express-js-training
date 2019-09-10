const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
let stringifyFile = '';

// tworzenie kopii zapasowej
let fileBackup = '';
if (fileBackup === '') {
  fs.readFile('./test.json', 'utf8', function(err, data) {
    if (err) throw err;
    fileBackup = data;
  });
}

app.use(bodyParser.json());

app.get('/getNote', function(req, res) {
  fs.readFile('./test.json', 'utf8', function(err, data) {
    if (err) throw err;
    stringifyFile = data;
    res.send(data);
  });
});

app.post('/updateNote/:note', function(req, res) {
  res.send('File will be updated with: ' + req.params.note);
  stringifyFile = req.params.note;
  fs.writeFile('./test.json', stringifyFile, function(err) {
    if (err) throw err;
    console.log('file updated');
  });
});

// endopoint do robienia backupu
let fileToCheck = '';
app.post('/backup', function(req, res) {
  fs.readFile('./test.json', 'utf8', function(err, data) {
    if (err) throw err;
    fileToCheck = data;
    if (fileToCheck != fileBackup) {
      res.send('File backed up!');
      fs.writeFile('./test.json', fileBackup, function(err) {
        if (err) throw err;
        console.log('file backup complete');
      });
    } else {
      res.send('File has original content!');
    }
  });
});

app.use(function(req, res, next) {
  res.status(404).send('Error 404 - resource not found');
});

const server = app.listen(3000, function() {
  console.log('Server nasłuchuje na: http://localhost:3000');
});
