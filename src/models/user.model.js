'user strict';
var dbConn = require('./../../config/db.config');

//Employee object create
    var User = function(user){
        this.name     = user.name;
        this.email          = user.email;
        this.password      = user.password;
        this.created_at     = new Date();
        this.user_id        = generateUserId();

    };

    var currentUserId = 3; // Assuming the initial user ID is 1

function generateUserId() {
  var userId = currentUserId;
  currentUserId++; // Increment the counter for the next user
  return userId;
}

User.create = function (newUser, result) {    
    dbConn.query("INSERT INTO user set ?", newUser, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });           
};
User.findById = function (id, result) {
    dbConn.query("Select * from employees where user_id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
User.findAll = function (result) {
    dbConn.query("Select * from user", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('user : ', res);  
            result(null, res);
        }
    });   
};
User.update = function(id, user, result){
  dbConn.query("UPDATE user SET name=?,email=?,password=? WHERE user_id = ?", [User.name,User.email,User.password, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
User.delete = function(id, result){
     dbConn.query("DELETE FROM user WHERE user_id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= User;