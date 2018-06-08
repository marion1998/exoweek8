var express = require('express');
var bodyparser = require('body-parser');
// var ejs = require('ejs');

var app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
  res.render('index');
});

// app.post('/try', function(req, res) {
//   console.log(req.body.number_try);
// });

app.listen(3000, function () {
  console.log("ca marche");
})