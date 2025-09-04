import { render, screen } from '@testing-library/react';
import { RatingDistribution } from './RatingDistribution';

const mockDistribution = [
  { star: 5, count: 80 },
  { star: 4, count: 15 },
  { star: 3, count: 3 },
  { star: 2, count: 1 },
  { star: 1, count: 1 },
];
const totalRatings = 100;

const TestRatingDistribution = () => {
  return render(
    <RatingDistribution
      ratingDistribution={mockDistribution}
      totalRatings={totalRatings}
    />,
  );
};

describe('RatingDistribution', () => {
  beforeEach(() => {
    TestRatingDistribution();
  });

  test('renders all rating rows', () => {
    expect(
      screen.getAllByRole('paragraph', { name: /star rating/i }),
    ).toHaveLength(5);
  });

  test('displays correct star numbers and total counts', () => {
    mockDistribution.forEach((rating, index) => {
      expect(
        screen.getByRole('paragraph', { name: `${rating.star} star rating` }),
      ).toBeInTheDocument();
      expect(
        screen.getAllByRole('paragraph', { name: 'Rating count' })[index],
      ).toHaveTextContent(rating.count);
    });
  });

  test('renders a rating distribution bar for each row', () => {
    const bars = screen.getAllByRole('progressbar', {
      name: /Rating distribution bar/,
    });
    expect(bars).toHaveLength(5);
  });

  test('renders a star icon for each row', () => {
    const starIcons = screen.getAllByAltText('Star');
    expect(starIcons).toHaveLength(5);
  });
});
