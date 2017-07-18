var express = require('express');
var router = express.Router();

var config = require('../config/db');
var MongoClient = require('mongodb').MongoClient;

var db;

MongoClient.connect(config.url, function (err, dbase) {
  if (err) {
    throw err;
  }
  db = dbase;
});

router.post('/', function (req, res) {
  console.log(req.body);
  const note = {text: req.body.text, active: req.body.active};
  db.collection('notes').save(note).then(function (data) {
    res.json(data.result);
  });
});


module.exports = router;