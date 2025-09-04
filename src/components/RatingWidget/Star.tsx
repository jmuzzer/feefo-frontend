import styled from 'styled-components';
import star from '../../assets/star.svg';

interface StarProps {
  /** The rating value for the star from 0-1 which determines the fill level */
  rating: number;
}

const StarIcon = styled.img`
  z-index: 2;
  pointer-events: none;
  width: 30px;
  height: 30px;
`;

const BackgroundFill = styled.div<{ percentage: number }>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    to right,
    #ffd700 ${({ percentage }) => percentage}%,
    #ccc ${({ percentage }) => percentage}%
  );
  z-index: 1;
`;

const StyledStarWrapper = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/**
 * Component for displaying a star rating.
 * Displays a partially filled star based on the rating value.
 */
export function Star({ rating }: StarProps) {
  const percentage: number = parseFloat((rating * 100).toFixed(1));

  const starLabel =
    percentage === 100
      ? 'Full Star rating'
      : percentage === 0
        ? 'Empty Star rating'
        : 'Partial Star rating';

  return (
    <>
      <StyledStarWrapper
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <BackgroundFill percentage={percentage} />
        <StarIcon src={star} alt="Star" aria-label={starLabel} />
      </StyledStarWrapper>
    </>
  );
}
