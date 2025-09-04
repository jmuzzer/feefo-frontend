import { render, screen } from '@testing-library/react';
import { ProductRatingWidget } from './RatingWidget';
import type { ProductRatingSummary } from '../../types/ProductRatingSummary#';

const mockProductRatingSummary: ProductRatingSummary = {
  averageRating: 4.5,
  totalRatings: 100,
  ratingDistribution: [
    { star: 5, count: 80 },
    { star: 4, count: 15 },
    { star: 3, count: 3 },
    { star: 2, count: 1 },
    { star: 1, count: 1 },
  ],
};

const { averageRating, totalRatings, ratingDistribution } = mockProductRatingSummary;

describe('ProductRatingWidget', () => {
  test('renders the widget with expected values', () => {
    render(
      <ProductRatingWidget
        averageRating={averageRating}
        totalRatings={totalRatings}
        ratingDistribution={ratingDistribution}
      />,
    );
    expect(screen.getByRole('paragraph', { name: 'Category rating' })).toHaveTextContent(
      'EXCELLENT',
    );
    expect(screen.getByRole('paragraph', { name: 'Average rating' })).toHaveTextContent(
      '4.5 OUT OF 5',
    );
    expect(screen.getByRole('paragraph', { name: 'Product Rating' })).toBeInTheDocument();

    expect(screen.getByAltText('Feefo logo')).toBeInTheDocument();

    // Check that each star and count is rendered

    const countElements = screen.getAllByRole('paragraph', { name: 'Rating count' });
    expect(countElements).toHaveLength(5);

    ratingDistribution.forEach(({ star, count }, index) => {
      expect(screen.getByRole('paragraph', { name: `${star} star rating` })).toBeInTheDocument();
      expect(countElements[index]).toHaveTextContent(count);
    });
  });
});
