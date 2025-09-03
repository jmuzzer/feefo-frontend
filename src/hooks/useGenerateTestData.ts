import type { RatingCount, ProductRatingSummary } from '../types/WidgetRating';

export function useGenerateTestData(): ProductRatingSummary {
  const ratingDistribution: Array<RatingCount> = [
    { star: 5, count: 952 },
    { star: 4, count: 171 },
    { star: 3, count: 55 },
    { star: 2, count: 14 },
    { star: 1, count: 40 },
  ];

  const totalRatings: number = ratingDistribution.reduce(
    (total, current) => total + current.count,
    0,
  );

  const totalRatingsValue: number = ratingDistribution.reduce(
    (total, current) => total + current.count * current.star,
    0,
  );

  const averageRating: number =
    Math.round((totalRatingsValue / totalRatings) * 10) / 10;

  return {
    averageRating,
    totalRatings,
    ratingDistribution,
  };
}
