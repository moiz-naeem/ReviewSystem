import express from 'express';
import { reviewService } from '../services/reviewService.js';

const router = express.Router();

router.post('/', (req, res) => {
  try {
    const review = reviewService.createReview(req.body);
    res.status(201).json(review);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', (req, res) => {
  const reviews = reviewService.getReviews();
  const averageRating = reviewService.getAverageRating();
  res.json({ reviews, averageRating });
});

export default router;