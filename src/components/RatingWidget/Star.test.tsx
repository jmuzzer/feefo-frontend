import { render, screen } from '@testing-library/react';
import { Star } from './Star';

describe('Star', () => {
  const cases = [
    { rating: 1, expectedLabel: 'Full Star rating' },
    {
      rating: 0.75,
      expectedLabel: 'Partial Star rating',
    },
    {
      rating: 0.5,
      expectedLabel: 'Partial Star rating',
    },
    {
      rating: 0.25,
      expectedLabel: 'Partial Star rating',
    },
    { rating: 0, expectedLabel: 'Empty Star rating' },
  ];

  it.each(cases)(
    'renders star with the correct aria label for rating $rating',
    ({ rating, expectedLabel }) => {
      render(<Star rating={rating} />);
      expect(
        screen.getByRole('img', { name: expectedLabel }),
      ).toBeInTheDocument();
    },
  );

  test('renders the star icon image', () => {
    render(<Star rating={1} />);
    expect(screen.getByAltText('Star')).toBeInTheDocument();
  });
});
