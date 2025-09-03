import styled from 'styled-components';
import type { RatingCount } from '../../types/WidgetRating';
import { RatingDistributionBar } from './RatingDistributionBar';

export type RatingSummary = {
  /** The average rating value from 0-5 */
  averageRating: number;
  /** The total number of ratings */
  totalRatings: number;
  /** The distribution of ratings across different stars */
  ratingDistribution: Array<RatingCount>;
};

const RatingSpreadWrapper = styled.span`
  display: flex;
  flex-direction: row;
  gap: 12px;
  justify-content: space-between;
  align-items: center;
  line-height: 1;
`;

const SpreadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StarIcon = styled.div`
  color: #d0d0d0ff;
  font-size: 24px;
`;

export function RatingDistribution({
  ratingDistribution,
  totalRatings,
}: {
  ratingDistribution: Array<RatingCount>;
  totalRatings: number;
}) {
  return (
    <SpreadWrapper>
      {ratingDistribution.map((rating, index) => (
        <RatingSpreadWrapper key={index}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '4px',
              alignItems: 'center',
            }}
          >
            <div style={{ fontWeight: 500, color: '#717171ff' }}>
              {rating.star}
            </div>
            <StarIcon>★</StarIcon>
          </div>
          <RatingDistributionBar
            percentage={(rating.count / totalRatings) * 100}
          />
          <div
            style={{ minWidth: '24px', textAlign: 'left', color: '#717171ff' }}
          >
            {rating.count}
          </div>
        </RatingSpreadWrapper>
      ))}
    </SpreadWrapper>
  );
}
