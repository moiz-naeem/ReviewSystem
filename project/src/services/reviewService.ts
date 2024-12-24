import { storage } from './localStorage'
import type { Review } from '../types'

export const reviewService = {
  getReviews(): { reviews: Review[], averageRating: number } {
    const reviews = storage.getReviews()
    let sum = 0
  
    for (let i = 0; i < reviews.length; i++) {
      sum += reviews[i].rating
    }
  
    const averageRating = reviews.length 
      ? Number((sum / reviews.length).toFixed(1))
      : 0
  
    return { reviews, averageRating }
  },

  createReview(reviewData: Omit<Review, 'id' | 'createdAt'>): Review {
    const review: Review = {
      ...reviewData,
      id: crypto.randomUUID(),
      createdAt: new Date()
    };
    
    storage.saveReview(review)
    return review
  }
}