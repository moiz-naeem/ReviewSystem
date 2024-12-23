export class Review {
  constructor({ id, userId, bookingId, rating, comment, createdAt }) {
    this.id = id;
    this.userId = userId;
    this.bookingId = bookingId;
    this.rating = rating;
    this.comment = comment;
    this.createdAt = createdAt || new Date();
  }
}