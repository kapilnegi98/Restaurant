var express = require('express');
var router = express.Router();
var config = require('./config');
/* GET home page. */
router.get(['/','/index.html'], function (req, res, next) {
    if(!config.isLoggedIn(req,res)){
        res.redirect(config.siteConfig.base_url+"auth/login.html");
    }
    res.render("admin_panel/dashboard/dashboard",{siteConfig:config.siteConfig});
});  
module.exports = router;
     