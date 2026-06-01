const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');

// Booking Controller
const bookingController = {
  getAll: (req, res) => {
    res.json({
      success: true,
      message: 'Get all bookings',
      data: []
    });
  },
  getById: (req, res) => {
    res.json({
      success: true,
      message: 'Get booking by ID',
      data: { id: req.params.id }
    });
  },
  create: (req, res) => {
    res.json({
      success: true,
      message: 'Create booking',
      data: { status: 'pending_approval' }
    });
  },
  approve: (req, res) => {
    res.json({
      success: true,
      message: 'Booking approved',
    });
  },
  reject: (req, res) => {
    res.json({
      success: true,
      message: 'Booking rejected',
    });
  },
  cancel: (req, res) => {
    res.json({
      success: true,
      message: 'Booking cancelled',
    });
  },
};

router.get('/', authMiddleware, bookingController.getAll);
router.get('/:id', authMiddleware, bookingController.getById);
router.post('/', authMiddleware, bookingController.create);
router.put('/:id/approve', authMiddleware, bookingController.approve);
router.put('/:id/reject', authMiddleware, bookingController.reject);
router.put('/:id/cancel', authMiddleware, bookingController.cancel);

module.exports = router;
