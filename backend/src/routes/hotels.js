const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');

// Hotel Controller
const hotelController = {
  getAll: (req, res) => {
    res.json({
      success: true,
      message: 'Get all hotels',
      data: []
    });
  },
  getById: (req, res) => {
    res.json({
      success: true,
      message: 'Get hotel by ID',
      data: { id: req.params.id }
    });
  },
  create: (req, res) => {
    res.json({
      success: true,
      message: 'Create hotel',
    });
  },
  update: (req, res) => {
    res.json({
      success: true,
      message: 'Update hotel',
    });
  },
  delete: (req, res) => {
    res.json({
      success: true,
      message: 'Delete hotel',
    });
  },
};

router.get('/', hotelController.getAll);
router.get('/:id', hotelController.getById);
router.post('/', authMiddleware, hotelController.create);
router.put('/:id', authMiddleware, hotelController.update);
router.delete('/:id', authMiddleware, hotelController.delete);

module.exports = router;
