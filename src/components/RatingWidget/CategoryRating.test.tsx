import { render, screen } from '@testing-library/react';
import { CategoryRating } from './CategoryRating';

describe('CategoryRating', () => {
  const cases = [
    { averageRating: 4.5, expected: 'EXCELLENT' },
    { averageRating: 5, expected: 'EXCELLENT' },
    { averageRating: 3.5, expected: 'GOOD' },
    { averageRating: 4.49, expected: 'GOOD' },
    { averageRating: 2.5, expected: 'FAIR' },
    { averageRating: 3.49, expected: 'FAIR' },
    { averageRating: 1.5, expected: 'POOR' },
    { averageRating: 2.49, expected: 'POOR' },
    { averageRating: 1.49, expected: 'BAD' },
    { averageRating: 0, expected: 'BAD' },
  ];

  it.each(cases)(
    'displays $expected for averageRating $averageRating',
    ({ averageRating, expected }) => {
      render(<CategoryRating averageRating={averageRating} />);
      expect(screen.getByText(expected)).toBeInTheDocument();
    },
  );
});
