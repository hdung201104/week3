const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');

// Analytics Controller
const analyticsController = {
  getDashboard: (req, res) => {
    res.json({
      success: true,
      message: 'Dashboard analytics',
      data: {
        totalBookings: 1234,
        totalRevenue: 125000000,
        occupancyRate: 85.3,
        totalCustomers: 3456
      }
    });
  },
  getRevenueAnalytics: (req, res) => {
    res.json({
      success: true,
      message: 'Revenue analytics',
    });
  },
  getOccupancyAnalytics: (req, res) => {
    res.json({
      success: true,
      message: 'Occupancy analytics',
    });
  },
  getAgentPerformance: (req, res) => {
    res.json({
      success: true,
      message: 'Agent performance',
    });
  },
};

router.get('/dashboard', authMiddleware, analyticsController.getDashboard);
router.get('/revenue', authMiddleware, analyticsController.getRevenueAnalytics);
router.get('/occupancy', authMiddleware, analyticsController.getOccupancyAnalytics);
router.get('/agent-performance', authMiddleware, analyticsController.getAgentPerformance);

module.exports = router;
