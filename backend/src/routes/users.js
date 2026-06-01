const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');

// User Controller
const userController = {
  getAll: (req, res) => {
    res.json({
      success: true,
      message: 'Get all users',
      data: []
    });
  },
  getById: (req, res) => {
    res.json({
      success: true,
      message: 'Get user by ID',
      data: { id: req.params.id }
    });
  },
  update: (req, res) => {
    res.json({
      success: true,
      message: 'Update user',
    });
  },
  delete: (req, res) => {
    res.json({
      success: true,
      message: 'Delete user',
    });
  },
  updateRole: (req, res) => {
    res.json({
      success: true,
      message: 'Update user role',
    });
  },
};

router.get('/', authMiddleware, userController.getAll);
router.get('/:id', authMiddleware, userController.getById);
router.put('/:id', authMiddleware, userController.update);
router.delete('/:id', authMiddleware, userController.delete);
router.put('/:id/role', authMiddleware, userController.updateRole);

module.exports = router;
