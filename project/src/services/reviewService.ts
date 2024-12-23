import { storage } from './localStorage';
import type { Review } from '../types';

export const reviewService = {
  getReviews(): { reviews: Review[]; averageRating: number } {
    const reviews = storage.getReviews();
    const averageRating = reviews.length 
      ? Number((reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1))
      : 0;
    
    return { reviews, averageRating };
  },

  createReview(reviewData: Omit<Review, 'id' | 'createdAt'>): Review {
    const review: Review = {
      ...reviewData,
      id: crypto.randomUUID(),
      createdAt: new Date(),
    };
    
    storage.saveReview(review);
    return review;
  }
};