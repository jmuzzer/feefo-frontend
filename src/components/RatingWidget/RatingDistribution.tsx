import styled from 'styled-components';
import type { RatingCount } from '../../types/WidgetRating';
import { RatingDistributionBar } from './RatingDistributionBar';
import greyStar from '../../assets/greyStar.svg';

export type RatingSummary = {
  /** The average rating value from 0-5 */
  averageRating: number;
  /** The total number of ratings */
  totalRatings: number;
  /** The distribution of ratings across different stars */
  ratingDistribution: Array<RatingCount>;
};

const RatingDistributionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const RowWrapper = styled.span`
  display: flex;
  flex-direction: row;
  gap: 12px;
  justify-content: space-between;
  align-items: center;
  line-height: 26px;
`;

const StarWrapper = styled.p`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  font-weight: 500;
  color: #717171ff;
  min-width: 35px;
  margin: 0;
  padding: 0;
`;

const StarIcon = styled.img`
  color: #d0d0d0ff;
  font-size: 24px;
  aria-hidden="true"
`;

const RatingBar = styled.div`
  flex: 1;
  min-width: 80px;
  max-width: 400px;
  display: flex;
  align-items: center;
`;

const RatingCount = styled.p`
  min-width: 30px;
  text-align: left;
  color: #717171ff;
  font-weight: 500;
  margin: 0;
  padding: 0;
`;

export function RatingDistribution({
  ratingDistribution,
  totalRatings,
}: {
  ratingDistribution: Array<RatingCount>;
  totalRatings: number;
}) {
  return (
    <RatingDistributionWrapper aria-label="Rating distribution">
      {ratingDistribution.map((rating, index) => (
        <RowWrapper key={index}>
          <StarWrapper aria-label={`${rating.star} star rating`}>
            {rating.star}
            <StarIcon src={greyStar} alt="Star" />
          </StarWrapper>
          <RatingBar aria-label="Rating distribution bar">
            <RatingDistributionBar
              percentage={Math.round((rating.count / totalRatings) * 100)}
            />
          </RatingBar>
          <RatingCount aria-label="Rating count">{rating.count}</RatingCount>
        </RowWrapper>
      ))}
    </RatingDistributionWrapper>
  );
}
