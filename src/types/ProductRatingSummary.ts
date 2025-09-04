export type ProductRatingSummary = {
  /** The average rating value from 0-5 */
  averageRating: number;
  /** The total number of ratings */
  totalRatings: number;
  /** The distribution of ratings across different stars */
  ratingDistribution: Array<RatingCount>;
};

export type RatingCount = { star: number; count: number };
