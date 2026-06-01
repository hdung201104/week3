const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide tour title'],
      trim: true,
    },
    description: String,
    destination: {
      type: String,
      required: [true, 'Please provide destination'],
    },
    startDate: {
      type: Date,
      required: [true, 'Please provide start date'],
    },
    endDate: {
      type: Date,
      required: [true, 'Please provide end date'],
    },
    duration: {
      type: Number,
      required: true, // in days
    },
    price: {
      type: Number,
      required: [true, 'Please provide price'],
    },
    maxParticipants: {
      type: Number,
      required: [true, 'Please provide max participants'],
    },
    currentParticipants: {
      type: Number,
      default: 0,
    },
    itinerary: [{
      day: Number,
      title: String,
      description: String,
      activities: [String],
      location: String,
    }],
    accommodations: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hotel',
    }],
    season: {
      type: String,
      enum: ['spring', 'summer', 'autumn', 'winter'],
    },
    status: {
      type: String,
      enum: ['active', 'inactive', 'cancelled'],
      default: 'active',
    },
    images: [String],
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    reviews: [
      {
        userId: mongoose.Schema.Types.ObjectId,
        comment: String,
        rating: Number,
        createdAt: { type: Date, default: Date.now },
      },
    ],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Tour', tourSchema);
