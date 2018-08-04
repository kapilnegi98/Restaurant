exports.siteConfig = {
    siteName:'Site Name',
    base_url:'http://localhost:3000/' 
};

// auth user table should have username and password field to validate
exports.db = {
    dbURL: 'mongodb://127.0.0.1:27017',
    dbName: 'crudDB',
    AuthUserTable:'users' 
};

exports.isLoggedIn = function(req,res){
    if(typeof req.session.isLoggedIn == "undefined"){
        return false;
    }else{
        return true;
    }
}
 
