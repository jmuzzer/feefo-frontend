import styled from 'styled-components';

type DistributionBarProps = {
  percentage: number;
};

interface DistributionFillProps {
  percentage: number;
}

const DistributionBarContainer = styled.div`
  width: 100%;
  min-width: 80px;
  max-width: 400px;
  height: 10px;
  background-color: #dfdfdfff;
  border-radius: 2px;
  overflow: hidden;
  position: relative;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const DistributionFill = styled.div<DistributionFillProps>`
  background-color: #ffd700;
  height: 100%;
  width: ${({ percentage }) => percentage}%;
`;

export function RatingDistributionBar({ percentage }: DistributionBarProps) {
  return (
    <DistributionBarContainer
      role="progressbar"
      aria-valuenow={percentage}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`Rating distribution bar: ${percentage}% full`}
    >
      <DistributionFill percentage={percentage} />
    </DistributionBarContainer>
  );
}
