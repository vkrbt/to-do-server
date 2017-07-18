var express = require('express');
var router = express.Router();
var config = require('../../config/db');

var MongoClient = require('mongodb').MongoClient;

var db;

MongoClient.connect(config.url, function (err, dbase) {
  if (err) {
    throw err;
  }
  db = dbase;
});

router.get('/get-active', function (req, res) {
  db.collection('notes').find({active: 'true'}).toArray(function (err, response) {
    res.json(response);
  });
});

module.exports = router;