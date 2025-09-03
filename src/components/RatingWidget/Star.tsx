import styled from 'styled-components';

interface StarProps {
  /** The rating value for the star from 0-1 which determines the fill level */
  rating: number;
}

const StarIcon = styled.div`
  color: white;
  font-size: 40px;
  z-index: 2;
  pointer-events: none;
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
  const percentage = rating * 100;

  return (
    <>
      <StyledStarWrapper>
        <BackgroundFill percentage={percentage} />
        <StarIcon>★</StarIcon>
      </StyledStarWrapper>
    </>
  );
}
