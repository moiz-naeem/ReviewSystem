export interface ReviewProps {
  id?: string;
  userId: string;
  bookingId: string;
  rating: number;
  comment: string;
  createdAt?: Date;
}

export class Review {
  id: string;
  userId: string;
  bookingId: string;
  rating: number;
  comment: string;
  createdAt: Date;

  constructor({ id, userId, bookingId, rating, comment, createdAt }: ReviewProps) {
    this.id = id || crypto.randomUUID();
    this.userId = userId;
    this.bookingId = bookingId;
    this.rating = rating;
    this.comment = comment;
    this.createdAt = createdAt || new Date();
  }
}
