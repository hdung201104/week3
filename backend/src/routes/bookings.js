const express = require('express');
const Booking = require('../models/Booking');
const Tour = require('../models/Tour');
const auth = require('../middleware/auth');
const router = express.Router();

// Get all bookings
router.get('/', auth, async (req, res) => {
  try {
    const bookings = await Booking.find({ customer: req.userId })
      .populate('tour')
      .populate('customer')
      .populate('agent')
      .populate('approvedBy');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get booking by ID
router.get('/:id', auth, async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id)
      .populate('tour')
      .populate('customer')
      .populate('agent')
      .populate('approvedBy');
    if (!booking) return res.status(404).json({ error: 'Booking not found' });
    res.json(booking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create booking
router.post('/', auth, async (req, res) => {
  try {
    const { tourId, numberOfParticipants, participants, specialRequests } = req.body;
    
    const tour = await Tour.findById(tourId);
    if (!tour) return res.status(404).json({ error: 'Tour not found' });
    
    if (tour.currentParticipants + numberOfParticipants > tour.maxParticipants) {
      return res.status(400).json({ error: 'Not enough available seats' });
    }
    
    const totalPrice = tour.price * numberOfParticipants;
    
    const booking = new Booking({
      customer: req.userId,
      tour: tourId,
      numberOfParticipants,
      totalPrice,
      participants,
      specialRequests,
      departureDate: tour.startDate,
      returnDate: tour.endDate
    });
    
    await booking.save();
    
    // Update tour participants
    tour.currentParticipants += numberOfParticipants;
    await tour.save();
    
    const populatedBooking = await booking.populate('tour');
    res.status(201).json({
      message: 'Booking created and waiting for approval',
      booking: populatedBooking
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Approve booking (Admin)
router.put('/:id/approve', auth, async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status: 'approved', approvedBy: req.userId, approvalDate: new Date() },
      { new: true }
    ).populate('tour');
    
    if (!booking) return res.status(404).json({ error: 'Booking not found' });
    res.json({ message: 'Booking approved', booking });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Reject booking (Admin)
router.put('/:id/reject', auth, async (req, res) => {
  try {
    const { rejectionReason } = req.body;
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status: 'rejected', rejectionReason },
      { new: true }
    ).populate('tour');
    
    if (!booking) return res.status(404).json({ error: 'Booking not found' });
    
    // Decrease tour participants
    const tour = await Tour.findById(booking.tour._id);
    tour.currentParticipants -= booking.numberOfParticipants;
    await tour.save();
    
    res.json({ message: 'Booking rejected', booking });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Cancel booking
router.put('/:id/cancel', auth, async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status: 'cancelled' },
      { new: true }
    ).populate('tour');
    
    if (!booking) return res.status(404).json({ error: 'Booking not found' });
    
    // Decrease tour participants
    const tour = await Tour.findById(booking.tour._id);
    tour.currentParticipants -= booking.numberOfParticipants;
    await tour.save();
    
    res.json({ message: 'Booking cancelled', booking });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
