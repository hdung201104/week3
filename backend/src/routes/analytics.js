const express = require('express');
const Booking = require('../models/Booking');
const Tour = require('../models/Tour');
const User = require('../models/User');
const auth = require('../middleware/auth');
const router = express.Router();

// Get analytics dashboard data
router.get('/dashboard', auth, async (req, res) => {
  try {
    const totalBookings = await Booking.countDocuments();
    const totalRevenue = await Booking.aggregate([
      { $match: { status: { $in: ['approved', 'completed'] } } },
      { $group: { _id: null, total: { $sum: '$totalPrice' } } }
    ]);
    const totalCustomers = await User.countDocuments({ role: 'customer' });
    const totalTours = await Tour.countDocuments({ status: 'active' });
    
    const bookingsByStatus = await Booking.aggregate([
      { $group: { _id: '$status', count: { $sum: 1 } } }
    ]);
    
    res.json({
      totalBookings,
      totalRevenue: totalRevenue[0]?.total || 0,
      totalCustomers,
      totalTours,
      bookingsByStatus
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get revenue analytics
router.get('/revenue', auth, async (req, res) => {
  try {
    const revenueByTour = await Booking.aggregate([
      { $match: { status: { $in: ['approved', 'completed'] } } },
      { $group: { _id: '$tour', total: { $sum: '$totalPrice' }, count: { $sum: 1 } } },
      { $lookup: { from: 'tours', localField: '_id', foreignField: '_id', as: 'tourInfo' } },
      { $sort: { total: -1 } }
    ]);
    
    res.json(revenueByTour);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get occupancy analytics
router.get('/occupancy', auth, async (req, res) => {
  try {
    const tours = await Tour.find();
    const occupancy = tours.map(tour => ({
      tourId: tour._id,
      tourName: tour.title,
      maxParticipants: tour.maxParticipants,
      currentParticipants: tour.currentParticipants,
      occupancyRate: ((tour.currentParticipants / tour.maxParticipants) * 100).toFixed(2) + '%'
    }));
    
    res.json(occupancy);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
