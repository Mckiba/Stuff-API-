const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventsSchema = new Schema({
    eventName: {
    type: String,
    required: true
  },
  eventDetails: {
    type: String,
    required: true
  },
  eventDate: {
    type: String,
    required: true
  },
  eventTime: {
    type: String,
    required: true
  },
  eventCost: {
    type: String,
    required: true
  },
  eventCountry: {
    type: String,
    required: true
  }, 
  eventLocation: {
    type: String,
    required: true
  },
   checkoutLink: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
   image: {
    type: String,
    required: false
  },
  organiserName: {
      type: String,
      required: true
    }, 
    organiserEmail: {
      type: String,
      required: true
    },
    organiserPhone: {
      type: String,
      required: true
    },
    organiserCountry: {
      type: String,
      required: false
    },
    organiserAddress: {
      type: String,
      required: false
    }, 
    organiserParish: {
      type: String,
      required: false
    }, 
    dateUploaded: {
      type: String,
      required: false
    }, 
    dateReviewed: {
      type: String,
      required: false
    }
});

EventsSchema.set('toJSON', {
  virtuals: true,
  versionKey:false,
  transform: function (doc, ret) {   delete ret._id  }
});

const Event = mongoose.model('event', EventsSchema);
module.exports = Event;

