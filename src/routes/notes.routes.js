const express = require('express')
const router = express.Router()
const NotesController = require('../controllers/notes.controller');

// Retrieve all employees
router.get('/', NotesController.findAll);

// Create a new employee
router.post('/', NotesController.create);

// Retrieve a single employee with id
router.get('/:id', NotesController.findById);

// Update a employee with id
router.put('/:id', NotesController.update);

// Delete a employee with id
router.delete('/:id', NotesController.delete);

module.exports = router