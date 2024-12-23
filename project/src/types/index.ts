export interface Review {
  id: string;
  userId: string;
  bookingId: string;
  rating: number;
  comment: string;
  createdAt: Date;
}

export interface ReviewFormData {
  rating: number;
  comment: string;
}