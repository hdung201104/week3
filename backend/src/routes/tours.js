const express = require('express');
const Tour = require('../models/Tour');
const auth = require('../middleware/auth');
const router = express.Router();

// Get all tours
router.get('/', async (req, res) => {
  try {
    const { destination, season, budget } = req.query;
    let filter = { status: 'active' };
    
    if (destination) filter.destination = { $regex: destination, $options: 'i' };
    if (season) filter.season = season;
    if (budget) {
      const [min, max] = budget.split('-').map(Number);
      filter.price = { $gte: min, $lte: max };
    }
    
    const tours = await Tour.find(filter).populate('accommodations');
    res.json(tours);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get tour by ID
router.get('/:id', async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id).populate('accommodations');
    if (!tour) return res.status(404).json({ error: 'Tour not found' });
    res.json(tour);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create tour (Admin only)
router.post('/', auth, async (req, res) => {
  try {
    const tourData = { ...req.body, createdBy: req.userId };
    const tour = new Tour(tourData);
    await tour.save();
    res.status(201).json(tour);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update tour
router.put('/:id', auth, async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!tour) return res.status(404).json({ error: 'Tour not found' });
    res.json(tour);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete tour
router.delete('/:id', auth, async (req, res) => {
  try {
    const tour = await Tour.findByIdAndDelete(req.params.id);
    if (!tour) return res.status(404).json({ error: 'Tour not found' });
    res.json({ message: 'Tour deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
