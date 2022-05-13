const express = require('express');
const router = express.Router();

const ProductController = require('../Controllers/Event.Controller');

//Get a list of all events
router.get('/', ProductController.getAllEvents);

//Create a new event
router.post('/', ProductController.createNewEvent);

//Get a product by id
router.get('/:id', ProductController.findEventById);

//Update a product by id
router.patch('/:id', ProductController.updateEvent);

//Delete a product by id
router.delete('/:id', ProductController.deleteAEvent);

module.exports = router;
