import express, { Request, Response } from 'express'
import { reviewService } from '../services/reviewService'

const router = express.Router()

router.post('/', (req: Request, res: Response): void => {
  try {
    const review = reviewService.createReview(req.body)
    res.status(201).json(review)
  } catch (error: any) {
    res.status(400).json({ error: error.message })
  }
})

router.get('/', (_req: Request, res: Response): void => {
  try {
    const reviews = reviewService.getReviews()
    const averageRating = reviewService.getAverageRating()
    res.json({ reviews, averageRating })
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
});

export default router
