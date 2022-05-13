const createError = require('http-errors');
const mongoose = require('mongoose');

const Event = require('../Models/Event.model');

module.exports = {
  getAllEvents: async (req, res, next) => {
    try {
      //const results = await Event.find({}, { __v: 0 });
      // const results = await Product.find({}, { name: 1, price: 1, _id: 0 });
      const results = await Event.find(req.query);
      res.send(results);
    } catch (error) {
      console.log(error.message);
    }
  },

  createNewEvent: async (req, res, next) => {
    try {
      const event = new Event(req.body);
      const result = await event.save();
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error.name === 'ValidationError') {
        next(createError(422, error.message));
        return;
      }
      next(error);
    }
  },

  findEventById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const event = await Event.findById(id);
      if (!event) {
        throw createError(404, 'Event does not exist.');
      }
      res.send(event);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Event id'));
        return;
      }
      next(error);
    }
  },

  updateEvent: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await Event.findByIdAndUpdate(id, updates, options);
      if (!result) {
        throw createError(404, 'Event does not exist');
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'Invalid Event Id'));
      }
      next(error);
    }
  },

  deleteAEvent: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await Event.findByIdAndDelete(id);
      // console.log(result);
      if (!result) {
        throw createError(404, 'Event does not exist.');
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Event id'));
        return;
      }
      next(error);
    }
  }
};
