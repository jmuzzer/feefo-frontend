import { render, screen } from '@testing-library/react';
import { RatingDistributionBar } from './RatingDistributionBar';

describe('RatingDistributionBar', () => {
  test('check that aria min and max values are set correctly', () => {
    render(<RatingDistributionBar percentage={50} />);
    const bar = screen.getByRole('progressbar', { name: /50% full/i });
    expect(bar).toBeInTheDocument();
    expect(bar).toHaveAttribute('aria-valuemin', '0');
    expect(bar).toHaveAttribute('aria-valuemax', '100');
  });

  test('renders the progressbar with correct label for 50%', () => {
    render(<RatingDistributionBar percentage={50} />);
    const bar = screen.getByRole('progressbar', { name: /50% full/i });
    expect(bar).toBeInTheDocument();
    expect(bar).toHaveAttribute('aria-valuenow', '50');
    expect(bar).toHaveAttribute(
      'aria-label',
      'Rating distribution bar: 50% full',
    );
  });

  test('renders the progressbar with correct label for 100%', () => {
    render(<RatingDistributionBar percentage={100} />);
    const bar = screen.getByRole('progressbar', { name: /100% full/i });
    expect(bar).toBeInTheDocument();
    expect(bar).toHaveAttribute('aria-valuenow', '100');
    expect(bar).toHaveAttribute(
      'aria-label',
      'Rating distribution bar: 100% full',
    );
  });

  test('renders the progressbar with correct label for 0%', () => {
    render(<RatingDistributionBar percentage={0} />);
    const bar = screen.getByRole('progressbar', { name: /0% full/i });
    expect(bar).toBeInTheDocument();
    expect(bar).toHaveAttribute('aria-valuenow', '0');
    expect(bar).toHaveAttribute(
      'aria-label',
      'Rating distribution bar: 0% full',
    );
  });
});
