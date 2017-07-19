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
  console.log(req.body)
  db.collection('notes').updateOne({_id: ObjectId(req.params.id)},
    {
      $set:{
        active: req.body.active
      }
    }
  ).then(function (data) {
    res.json(data.ops);
  });
});

module.exports = router;