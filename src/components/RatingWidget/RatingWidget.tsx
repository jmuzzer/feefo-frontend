import feefoLogo from '../../assets/feefoLogo.png';
import styled from 'styled-components';
import type { ProductRatingSummary } from '../../types/ProductRatingSummary#';
import { RatingSummary } from './RatingSummary';
import { RatingDistribution } from './RatingDistribution';

const TextStyle = styled.p`
  font-size: clamp(16px, 2vw, 18px);
  color: #717171ff;
  font-weight: 600;
  margin: 0;
  padding: 0;
`;

const RatingWidgetWrapper = styled.div`
  border: 2px solid rgba(207, 207, 207, 1);
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  height: clamp(360px, 50vh, 370px);
  width: clamp(280px, 50vh, 300px);
  padding: 30px 20px 10px 20px;
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
`;

/**
 *Component to displays the overall rating and distribution of ratings for a product.
 */
export function ProductRatingWidget({
  averageRating,
  totalRatings,
  ratingDistribution,
}: ProductRatingSummary) {
  return (
    <RatingWidgetWrapper aria-label="Product rating widget">
      <RatingSummary averageRating={averageRating} />
      <FeefoBranding>
        <TextStyle aria-label="Product Rating">Product Rating</TextStyle>
        <Logo src={feefoLogo} alt="Feefo logo" />
      </FeefoBranding>
      <RatingDistribution ratingDistribution={ratingDistribution} totalRatings={totalRatings} />
    </RatingWidgetWrapper>
  );
}
