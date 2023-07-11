'user strict';
var dbConn = require('./../../config/db.config');

//Employee object create
    var Notes = function(notes){
        this.notes     = notes.notes;
        this.date          = notes.date;
        this.start     = notes.start;
        this.end     = notes.end;
        this.reminder    = notes.reminder;
        this.repeat =      notes.repeat;
        this.email =      notes.email;
    };


    Notes.create = function (newNotes, result) {    
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
Notes.findById = function (id, result) {
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
Notes.findAll = function (result) {
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

Notes.update = function(id, notes, result){
  dbConn.query("UPDATE notes SET notes=?,email=?,date=?,startTime=?,endTime =?,reminder=?,repeat=? WHERE notes_id = ?", [User.notes,User.email,User.date, User.startTime,User.endTime,User.reminder,User.repeat], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Notes.delete = function(id, result){
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

module.exports= Notes;