var express = require('express');
var router = express.Router();
var config = require('../config/db');

var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var db;

MongoClient.connect(config.url, function (err, dbase) {
  if (err) {
    throw err;
  }
  db = dbase;
});

router.delete('/:id', function (req, res) {
  db.collection('notes').deleteOne({_id: ObjectId(req.params.id)}).then(function (data) {
    console.log(data)
    res.json(data.deletedCount);
  });
});

module.exports = router;