const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a tour title'],
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: [true, 'Please provide a price'],
    },
    currency: {
      type: String,
      default: 'VND',
      enum: ['VND', 'USD', 'EUR'],
    },
    duration: {
      type: Number,
      required: true, // in days
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    maxParticipants: {
      type: Number,
      required: true,
    },
    currentParticipants: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ['draft', 'published', 'cancelled', 'completed'],
      default: 'draft',
    },
    images: [{
      url: String,
      caption: String,
    }],
    highlights: [String],
    itinerary: [{
      day: Number,
      title: String,
      description: String,
      meals: String,
      accommodation: String,
    }],
    inclusions: [String],
    exclusions: [String],
    hotelIds: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hotel',
    }],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    reviews: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Review',
    }],
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

module.exports = mongoose.model('Tour', tourSchema);
