import { render, screen } from '@testing-library/react';
import { FiveStarRating } from './FiveStarRating';

// Mock the Star component
jest.mock('./Star', () => ({
  Star: ({ rating }: { rating: number }) => (
    <span data-testid="star" data-rating={rating} />
  ),
}));

describe('FiveStarRating', () => {
  test('renders 5 stars', () => {
    render(<FiveStarRating averageRating={3} />);
    const stars = screen.getAllByTestId('star');
    expect(stars).toHaveLength(5);
  });

  test('renders all full stars for averageRating=5', () => {
    render(<FiveStarRating averageRating={5} />);
    const stars = screen.getAllByTestId('star');
    stars.forEach((star) => {
      expect(star).toHaveAttribute('data-rating', '1');
    });
  });

  test('renders all empty stars for averageRating=0', () => {
    render(<FiveStarRating averageRating={0} />);
    const stars = screen.getAllByTestId('star');
    stars.forEach((star) => {
      expect(star).toHaveAttribute('data-rating', '0');
    });
  });

  test('renders correct partial star for averageRating=3.5', () => {
    render(<FiveStarRating averageRating={3.5} />);
    const stars = screen.getAllByTestId('star');
    expect(stars[0]).toHaveAttribute('data-rating', '1');
    expect(stars[1]).toHaveAttribute('data-rating', '1');
    expect(stars[2]).toHaveAttribute('data-rating', '1');
    expect(stars[3]).toHaveAttribute('data-rating', '0.5');
    expect(stars[4]).toHaveAttribute('data-rating', '0');
  });
});
