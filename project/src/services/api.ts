import { reviewService } from './reviewService';
import type { Review } from '../types';

export const api = {
  async getReviews() {
    try {
      return reviewService.getReviews();
    } catch (error) {
      throw new Error('Failed to fetch reviews. Please try again later.');
    }
  },

  async createReview(reviewData: { userId: string; bookingId: string; rating: number; comment: string }) {
    try {
      return reviewService.createReview(reviewData);
    } catch (error) {
      throw new Error('Failed to submit review. Please try again later.');
    }
  },
};