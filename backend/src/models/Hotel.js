const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide hotel name'],
      trim: true,
    },
    description: String,
    city: {
      type: String,
      required: true,
    },
    address: {
      street: String,
      ward: String,
      district: String,
      city: String,
      country: String,
    },
    stars: {
      type: Number,
      min: 1,
      max: 5,
      default: 3,
    },
    phone: String,
    email: String,
    website: String,
    checkInTime: String,
    checkOutTime: String,
    amenities: [String],
    rooms: [{
      roomType: String,
      capacity: Number,
      price: Number,
      quantity: Number,
      description: String,
    }],
    images: [{
      url: String,
      caption: String,
    }],
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Hotel', hotelSchema);
