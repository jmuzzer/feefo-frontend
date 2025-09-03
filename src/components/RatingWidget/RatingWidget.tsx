import feefoLogo from '../../assets/feefoLogo.png';
import styled from 'styled-components';
import type { ProductRatingSummary } from '../../types/WidgetRating';
import { RatingSummary } from './RatingSummary';
import { RatingDistribution } from './RatingDistribution';

const TextStyle = styled.div`
  font-size: clamp(16px, 2vw, 18px);
  color: #717171ff;
  font-weight: 600;
`;

const RatingWidgetWrapper = styled.div`
  border: 2px solid rgba(207, 207, 207, 1);
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  height: clamp(350px, 50vh, 370px);
  width: clamp(280px, 50vh, 300px);
  padding: clamp(16px, 3vw, 32px);
`;

const FeefoBranding = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 15px;
  margin-bottom: 25px;
`;

const Logo = styled.img`
  height: 40px;
  alt: 'Feefo logo';
`;

/**
 *Component to displays the overall rating and distribution of ratings.
 */
export function ProductRatingWidget({
  averageRating,
  totalRatings,
  ratingDistribution,
}: ProductRatingSummary) {
  return (
    <RatingWidgetWrapper>
      <RatingSummary averageRating={averageRating} />
      <FeefoBranding>
        <TextStyle>Product Rating</TextStyle>
        <Logo src={feefoLogo} />
      </FeefoBranding>
      <RatingDistribution
        ratingDistribution={ratingDistribution}
        totalRatings={totalRatings}
      />
    </RatingWidgetWrapper>
  );
}
