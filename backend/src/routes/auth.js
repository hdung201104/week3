const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');

// Auth Controller
const authController = {
  login: (req, res) => {
    res.json({
      success: true,
      message: 'Login endpoint',
      data: { token: 'sample-token' }
    });
  },
  register: (req, res) => {
    res.json({
      success: true,
      message: 'Register endpoint',
    });
  },
  logout: (req, res) => {
    res.json({
      success: true,
      message: 'Logout successful',
    });
  },
  profile: (req, res) => {
    res.json({
      success: true,
      message: 'User profile',
      user: req.user,
    });
  },
};

router.post('/login', authController.login);
router.post('/register', authController.register);
router.post('/logout', authMiddleware, authController.logout);
router.get('/profile', authMiddleware, authController.profile);

module.exports = router;
