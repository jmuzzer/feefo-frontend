import { render, screen } from '@testing-library/react';
import { RatingSummary } from './RatingSummary';

describe('RatingSummary', () => {
  const testRatings = [
    { averageRating: 0, category: 'UNRATED' },
    { averageRating: 1, category: 'BAD' },
    { averageRating: 1.5, category: 'POOR' },
    { averageRating: 2.7, category: 'FAIR' },
    { averageRating: 3.9, category: 'GOOD' },
    { averageRating: 5, category: 'EXCELLENT' },
  ];

  test.each(testRatings)(
    'renders summary based on averageRating=%s',
    ({ averageRating, category }) => {
      render(<RatingSummary averageRating={averageRating} />);
      expect(screen.getByRole('paragraph', { name: 'Category rating' })).toHaveTextContent(
        category,
      );

      const averageRatingElement = screen.getByRole('paragraph', {
        name: 'Average rating',
      });

      expect(averageRatingElement).toBeInTheDocument();
      expect(averageRatingElement).toHaveTextContent(`${averageRating} OUT OF 5`);
    },
  );

  test('renders all summary elements', () => {
    render(<RatingSummary averageRating={4.2} />);
    expect(screen.getByRole('paragraph', { name: 'Category rating' })).toBeInTheDocument();
    expect(screen.getByLabelText('Rating out of 5 stars')).toBeInTheDocument();
    expect(screen.getByRole('paragraph', { name: 'Average rating' })).toHaveTextContent(
      '4.2 OUT OF 5',
    );
  });
});
