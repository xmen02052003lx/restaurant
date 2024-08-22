const mongoose = require("mongoose")

const checkinSchema = new mongoose.Schema({
  order_id: {
    type: String
  },
  table_id: {
    type: String
  }
})

module.exports = mongoose.model("checkin", checkinSchema)
