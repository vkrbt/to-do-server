var express = require('express');
var router = express.Router();

var config = require('../config/db');
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

var db;

MongoClient.connect(config.url, function(err, dbase) {
  if (err) {
    throw err;
  }
  db = dbase;
});

router.post('/', function(req, res) {
  console.log(req.body);
  let note;
  if (req.body._id) {
     note = {
      text: req.body.text,
      active: req.body.active,
      _id: ObjectId(req.body._id),
    };
  } else {
    note = { text: req.body.text, active: req.body.active };
  }
  db.collection('notes').insertOne(note).then(function(data) {
    console.log(data.ops);
    res.json(data.ops);
  });
});


module.exports = router;