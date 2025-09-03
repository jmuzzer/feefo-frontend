import { Star } from './Star';
import styled from 'styled-components';

interface FiveStarRatingProps {
  /** The average rating value from 0-5 */
  averageRating: number;
}

const StarWrapper = styled.span`
  display: flex;
  gap: 6px;
`;

/**
 * Displays a five-star rating based on the average rating value.
 */
export function FiveStarRating({ averageRating }: FiveStarRatingProps) {
  const STAR_COUNT = 5;

  return (
    <StarWrapper>
      {Array.from({ length: STAR_COUNT }).map((_, index) => {
        const remaining = averageRating - index;
        const starValue = remaining >= 1 ? 1 : remaining > 0 ? remaining : 0;

        return <Star key={index} rating={starValue} />;
      })}
    </StarWrapper>
  );
}
