const express = require('express')
const router = express.Router()
const UserController = require('../controllers/user.controller');

// Retrieve all employees
router.get('/', UserController.findAll);

// Create a new employee
router.post('/', UserController.create);

// Retrieve a single employee with id
router.get('/:id', UserController.findById);

// Update a employee with id
router.put('/:id', UserController.update);

// Delete a employee with id
router.delete('/:id', UserController.delete);

module.exports = router