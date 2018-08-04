var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient
var dbURL = "mongodb://127.0.0.1:27017";
var config = require('./config');

//to see url go in /bin and press command -> mongo.exe

/* GET home page. */
router.get(['/', '/index.html'], function (req, res, next) {
  if (!config.isLoggedIn(req, res)) {
    res.redirect(config.siteConfig.base_url + "auth/login.html");
  }
  res.render('admin_panel/manage_users/index', {
    title: 'Manage Users',
    subTitle: 'Create User',
    siteConfig: config.siteConfig,
    actionURL: config.siteConfig.base_url + "manage_users/insert",
    extraMessage: typeof req.query.insertSuccess != "undefined" ? req.query.insertSuccess == 1 ? "User Added Successfully" : "Error while adding users" : ""
  });
});
// doing insert
router.post('/insert', function (req, res, next) {
  if (!config.isLoggedIn(req, res)) {
    res.redirect(config.siteConfig.base_url + "auth/login.html");    
  }
  MongoClient.connect(dbURL, (err, client) => {
    if (err) return console.log(err);
    db = client.db('crudDB'); // use crudDB
    db.collection('users').save(req.body, function (err, result) {
      if (err) return console.log(err);
      res.redirect(config.siteConfig.base_url + "manage_users/?insertSuccess=1");
    });
  });
});



router.get('/delete', function (req, res, next) {
  if (!config.isLoggedIn(req, res)) {
    res.redirect(config.siteConfig.base_url + "auth/login.html");    
  }
  // console.log(req.query);
  MongoClient.connect(dbURL, (err, client) => {
    if (err) return console.log(err)
    db = client.db('crudDB'); // use crudDB
    db.collection('users').remove({ "_id": new mongodb.ObjectId(req.query.objectID) }, function (err, result) {
      if (err) return console.log(err);
      console.log(result);
      res.redirect(config.siteConfig.base_url + "manage_users/all_users.html?delSucc=1");
    });
  });
});

// list of all users
router.get('/all_users.html', function (req, res, next) {
  if (!config.isLoggedIn(req, res)) {
    res.redirect(config.siteConfig.base_url + "auth/login.html");    
  }
  MongoClient.connect(dbURL, (err, client) => {
    if (err) return console.log(err)
    db = client.db('crudDB'); // use crudDB
    db.collection('users').find().toArray(function (err, result) {
      if (err) return console.log(err);
      res.render('admin_panel/manage_users/userslist', {
        title: 'Manage Users',
        subTitle: 'All Users',
        'users': result,
        siteConfig: config.siteConfig,
        extraMessage: typeof req.query.delSucc != "undefined" ? req.query.delSucc == 1 ? "User Deleted Successfully" : "Error while deleting users" : ""
      });
    });
  });
});


// list of all users
router.get('/updateUser', function (req, res, next) {
  if (!config.isLoggedIn(req, res)) {
    res.redirect(config.siteConfig.base_url + "auth/login.html");    
  }
  MongoClient.connect(dbURL, (err, client) => {
    if (err) return console.log(err)
    db = client.db('crudDB'); // use crudDB
    db.collection('users').find({ "_id": new mongodb.ObjectId(req.query.objectID) }).toArray(function (err, result) {
      if (err) return console.log(err);
      // console.log("value coming for userid "+req.query.objectID);
      // console.log(result[0]);
      res.render('admin_panel/manage_users/updateuserForm', {
        title: 'Manage Users',
        subTitle: 'Update User',
        usersDetails: result[0],
        actionURL: config.siteConfig.base_url + "manage_users/updateuserindb",
        siteConfig: config.siteConfig,
        extraMessage: typeof req.query.insertSuccess != "undefined" ? req.query.insertSuccess == 1 ? "User updated Successfully" : "Error while updating users" : ""
      });
    });
  });

});

// doing insert
router.post('/updateuserindb', function (req, res, next) {
  if (!config.isLoggedIn(req, res)) {
    res.redirect(config.siteConfig.base_url + "auth/login.html");    
  }
  MongoClient.connect(dbURL, (err, client) => {
    if (err) return console.log(err);
    db = client.db('crudDB'); // use crudDB
    db.collection('users').update({ 'username': req.body.username }, req.body, { upsert: false }, function (err, result) {
      if (err) return console.log(err);
      res.redirect(config.siteConfig.base_url + "manage_users/updateUser?objectID=" + req.body.objectID + "&insertSuccess=1");
    });
  });
});




module.exports = router;
