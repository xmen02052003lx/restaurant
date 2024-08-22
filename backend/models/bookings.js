const mongoose = require("mongoose")

const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  numberOfGuests: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model("Booking", bookingSchema)
