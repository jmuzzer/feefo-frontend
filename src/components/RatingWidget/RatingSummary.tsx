import styled from 'styled-components';
import { CategoryRating } from './CategoryRating';
import { FiveStarRating } from './FiveStarRating';

interface RatingSummaryProps {
  /** The average rating value from 0-5 */
  averageRating: number;
}

const HorizontalCenterWrapper = styled.div`
  display: flex;
  gap: 14px;
  flex-direction: column;
  align-items: center;
`;

/**
 * Displays a summary of the rating based on the average rating value.
 */
export function RatingSummary({ averageRating }: RatingSummaryProps) {
  return (
    <HorizontalCenterWrapper>
      <CategoryRating averageRating={averageRating} />
      <FiveStarRating averageRating={averageRating} />
      <div style={{ fontWeight: 500, color: '#717171ff' }}>
        {averageRating} OUT OF 5
      </div>
    </HorizontalCenterWrapper>
  );
}
