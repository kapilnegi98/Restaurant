var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient
var dbURL = "mongodb://127.0.0.1:27017";


/* GET users listing. */
router.get('/get', function (req, res, next) {
  // console.log(req.session.views);
  if(req.session.views){
    console.log("page view ",req.session.views++);
  }else{
    req.session.views = 1;
  }
  MongoClient.connect(dbURL, (err, client) => {
    if (err) return console.log(err)
    db = client.db('crudDB'); // use crudDB
    db.collection('users').find().toArray(function (err, result) {
      if (err) return console.log(err);
      // res.writeHead(200,{"content-type":"application/json"});
      res.json(result);
    });
  });
});
router.post('/insert', function (req, res, next) {
  MongoClient.connect(dbURL, (err, client) => {
    if (err) return console.log(err);
    db = client.db('crudDB'); // use crudDB
    db.collection('users').save(req.body, function (err, result) {
      if (err) return console.log(err);
      res.json(result);      
    });
  });
});

module.exports = router;
