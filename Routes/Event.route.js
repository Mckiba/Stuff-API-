const express = require('express');
const router = express.Router();

const EventController = require('../Controllers/Event.Controller');

//Get a list of all events
router.get('/', EventController.getAllEvents);

//Create a new event
router.post('/', EventController.createNewEvent);

//Get a event by id
router.get('/:id', EventController.findEventById);

//Update a event by id
router.patch('/:id', EventController.updateEvent);

//Delete a event by id
router.delete('/:id', EventController.deleteAEvent);

module.exports = router;
