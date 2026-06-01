const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema(
  {
    bookingCode: {
      type: String,
      unique: true,
      required: true,
      default: () => 'BK-' + Date.now(),
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    tour: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tour',
      required: true,
    },
    agent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    numberOfParticipants: {
      type: Number,
      required: [true, 'Please provide number of participants'],
      min: 1,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ['pending_approval', 'approved', 'rejected', 'cancelled', 'completed'],
      default: 'pending_approval',
    },
    paymentStatus: {
      type: String,
      enum: ['unpaid', 'partially_paid', 'paid'],
      default: 'unpaid',
    },
    amountPaid: {
      type: Number,
      default: 0,
    },
    departureDate: Date,
    returnDate: Date,
    specialRequests: String,
    approvedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    approvalDate: Date,
    rejectionReason: String,
    participants: [
      {
        firstName: String,
        lastName: String,
        email: String,
        phone: String,
        dateOfBirth: Date,
        nationality: String,
        passportNumber: String,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Booking', bookingSchema);
