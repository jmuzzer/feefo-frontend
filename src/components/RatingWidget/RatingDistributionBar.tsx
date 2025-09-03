import styled from 'styled-components';

type DistributionBarProps = {
  percentage: number;
};

interface DistributionFillProps {
  percentage: number;
}

const ProgressContainer = styled.div`
  width: 200px;
  height: 10px;
  background-color: #dfdfdfff;
  border-radius: 2px;
  overflow: hidden;
  position: relative;
  margin: 0;
  padding: 0;
`;

const ProgressFill = styled.div<DistributionFillProps>`
  background-color: #ffd700;
  height: 100%;
  width: ${({ percentage }) => percentage}%;
`;

export function RatingDistributionBar({ percentage }: DistributionBarProps) {
  return (
    <ProgressContainer>
      <ProgressFill percentage={percentage} />
    </ProgressContainer>
  );
}
