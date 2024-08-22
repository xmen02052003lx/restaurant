import mongoose from "mongoose"
import bcrypt from "bcryptjs"

const restaurantSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    openTime: String,
    closeTime: String,
    description: String,
    images: [],
    tableCount: Number
  },
  {
    timestamps: true
  }
)

const Restaurant = mongoose.model("Restaurant", restaurantSchema)

export default Restaurant
