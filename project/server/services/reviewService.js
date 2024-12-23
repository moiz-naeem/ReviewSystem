import { Review } from '../models/review.js';

// In-memory storage for reviews (replace with a database in production)
const reviews = [];

export const reviewService = {
  createReview: (reviewData) => {
    const review = new Review({
      id: Math.random().toString(36).substr(2, 9),
      ...reviewData,
    });
    reviews.unshift(review);
    return review;
  },

  getReviews: () => {
    return reviews;
  },

  getAverageRating: () => {
    if (reviews.length === 0) return 0;
    const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
    return (sum / reviews.length).toFixed(1);
  },
};