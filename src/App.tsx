import './App.css';
import { createGlobalStyle } from 'styled-components';
import { ProductRatingWidget } from './components/RatingWidget/RatingWidget';
import { useGenerateTestData } from './hooks/useGenerateTestData';

const GlobalStyle = createGlobalStyle`
html,
.poppins-regular {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
}

`;

function App() {
  // Generate test data
  const { averageRating, totalRatings, ratingDistribution } =
    useGenerateTestData();

  return (
    <>
      <GlobalStyle />
      <ProductRatingWidget
        averageRating={averageRating}
        totalRatings={totalRatings}
        ratingDistribution={ratingDistribution}
      />
    </>
  );
}

export default App;
