'use strict';

const Notes = require('../models/notes.model');

exports.findAll = function(req, res) {
  Notes.findAll(function(err, notes) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', notes);
    res.send(notes);
  });
};


exports.create = function(req, res) {
    const new_notes = new Notes(req.body);

    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Notes.create(new_notes, function(err, notes) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Notes added successfully!",data:notes});
        });
    }
};


exports.findById = function(req, res) {
    Notes.findById(req.params.id, function(err, notes) {
        if (err)
        res.send(err);
        res.json(notes);
    });
};


exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        User.update(req.params.id, new Notes(req.body), function(err, notes) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'Notes successfully updated' });
        });
    }
  
};


exports.delete = function(req, res) {
    Notes.delete( req.params.id, function(err, notes) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'notes successfully deleted' });
  });
};