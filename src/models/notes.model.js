'user strict';
var dbConn = require('./../../config/db.config');

//Employee object create
    var User = function(notes){
        this.notes     = notes.notes;
        this.date          = notes.date;
        this.startTime      = notes.startTime;
        this.endTime      = notes.endTime;
        this.reminder    = notes.reminder;
        this.repeat =      notes.repeat;
       
        this.user_id        = generateNotesId();

    };

    var currentNotesId = 3; // Assuming the initial user ID is 1

function generateNotesId() {
  var notesId = currentNotesId;
  currentUserId++; // Increment the counter for the next user
  return notesId;
}

User.create = function (newNotes, result) {    
    dbConn.query("INSERT INTO notes set ?", newNotes, function (err, res) {
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
    dbConn.query("Select * from notes where notes_id = ? ", id, function (err, res) {             
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
    dbConn.query("Select * from notes", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('notes : ', res);  
            result(null, res);
        }
    });   
};
User.update = function(id, notes, result){
  dbConn.query("UPDATE user SET notes=?,date=?,startTime=?,endTime =?,reminder=?,repeat=? WHERE user_id = ?", [User.name,User.email,User.password, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
User.delete = function(id, result){
     dbConn.query("DELETE FROM notes WHERE notes_id = ?", [id], function (err, res) {
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