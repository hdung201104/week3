const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide hotel name'],
      trim: true,
    },
    description: String,
    location: {
      address: String,
      city: String,
      country: String,
      coordinates: {
        latitude: Number,
        longitude: Number,
      },
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    rooms: [
      {
        roomType: {
          type: String,
          enum: ['single', 'double', 'twin', 'suite'],
        },
        totalRooms: Number,
        availableRooms: Number,
        pricePerNight: Number,
        amenities: [String],
      },
    ],
    amenities: [String],
    images: [String],
    contactInfo: {
      email: String,
      phone: String,
      website: String,
    },
    policies: {
      checkInTime: String,
      checkOutTime: String,
      cancellationPolicy: String,
    },
    status: {
      type: String,
      enum: ['active', 'inactive', 'maintenance'],
      default: 'active',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Hotel', hotelSchema);
