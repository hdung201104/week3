const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');

// Tour Controller
const tourController = {
  getAll: (req, res) => {
    res.json({
      success: true,
      message: 'Get all tours',
      data: []
    });
  },
  getById: (req, res) => {
    res.json({
      success: true,
      message: 'Get tour by ID',
      data: { id: req.params.id }
    });
  },
  create: (req, res) => {
    res.json({
      success: true,
      message: 'Create tour',
    });
  },
  update: (req, res) => {
    res.json({
      success: true,
      message: 'Update tour',
    });
  },
  delete: (req, res) => {
    res.json({
      success: true,
      message: 'Delete tour',
    });
  },
  search: (req, res) => {
    res.json({
      success: true,
      message: 'Search tours',
      filters: req.query,
    });
  },
};

router.get('/', tourController.getAll);
router.get('/search', tourController.search);
router.get('/:id', tourController.getById);
router.post('/', authMiddleware, tourController.create);
router.put('/:id', authMiddleware, tourController.update);
router.delete('/:id', authMiddleware, tourController.delete);

module.exports = router;
