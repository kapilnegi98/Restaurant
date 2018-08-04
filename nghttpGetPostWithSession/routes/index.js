var express = require('express');
var router = express.Router();
var config = require('./config');

// home page
router.get(['/', '/index.html'], function (req, res, next) {
  res.render('frontend/index', {siteConfig:config.siteConfig});
});
// about us page
router.get('/about.html', function (req, res, next) {
  res.render('frontend/about', {siteConfig:config.siteConfig});
});
// contact us page
router.get('/contact.html', function (req, res, next) {
  res.render('frontend/contact', {siteConfig:config.siteConfig});
});
router.get('/my-profile.html', function (req, res, next) {
  res.render('frontend/my-profile', {siteConfig:config.siteConfig});
});
module.exports = router;
    