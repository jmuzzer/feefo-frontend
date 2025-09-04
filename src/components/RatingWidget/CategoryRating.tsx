import styled from 'styled-components';
import type { AbsoluteCategoryRating } from '../../types/AbsoluteCategoryRating';

interface CategoryRatingProps {
  /** The average rating value from 0-5 */
  averageRating: number;
}

const StyledDescription = styled.p`
  margin: 0;
  padding: 0;
  font-size: clamp(24px, 2vw, 30px);
  color: #000000ff;
  font-weight: 600;
`;

/**
 * Displays the absolute category rating based on the average rating value.
 */
export function CategoryRating({ averageRating }: CategoryRatingProps) {
  let categoryRating: AbsoluteCategoryRating;

  if (averageRating >= 4.5) {
    categoryRating = 'EXCELLENT';
  } else if (averageRating >= 3.5) {
    categoryRating = 'GOOD';
  } else if (averageRating >= 2.5) {
    categoryRating = 'FAIR';
  } else if (averageRating >= 1.5) {
    categoryRating = 'POOR';
  } else if (averageRating === 0) {
    categoryRating = 'UNRATED';
  } else {
    categoryRating = 'BAD';
  }

  return <StyledDescription aria-label="Category rating">{categoryRating}</StyledDescription>;
}
