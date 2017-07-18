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
router.put('/:id', function (req, res){
  db.collection('notes').update({_id: ObjectId(req.params.id)},
    {
      text: req.body.text,
      active: req.body.active
    }
  ).then(function (data) {
    res.json(data.result);
  });
});

module.exports = router;