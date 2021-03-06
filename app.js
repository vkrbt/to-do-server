var express =require("express");
var app = express();


var bodyParser = require('body-parser');

var get = require('./routes/get/get');
var getOne = require('./routes/get/getOne');
var getActive = require('./routes/get/getActive');
var getDone = require('./routes/get/getDone');

var add = require('./routes/add');
var del = require('./routes/delete');
var upd = require('./routes/update');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use(get);
app.use(getOne);
app.use(getActive);
app.use(getDone);

app.use(add);
app.use(del);
app.use(upd);

app.listen(3000, function() {
  console.log('listening on 3000')
});

module.exports = app;