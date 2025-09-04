import './App.css';
import styled from 'styled-components';
import { ProductRatingWidget } from './components/RatingWidget/RatingWidget';
import { Button } from './components/Button';
import { useTestHooks } from './hooks/useAddRating';

const SimpleButtonPanel = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  align-content: center;
`;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  const { useAddRating, useGetData } = useTestHooks();

  const { averageRating, totalRatings, ratingDistribution } = useGetData();

  return (
    <AppWrapper>
      <ProductRatingWidget
        averageRating={averageRating}
        totalRatings={totalRatings}
        ratingDistribution={ratingDistribution}
      />
      <SimpleButtonPanel>
        <Button useStateFn={() => useAddRating({ star: 1 })} name={`Add 1 Star`} />
        <Button useStateFn={() => useAddRating({ star: 2 })} name={`Add 2 Star`} />
        <Button useStateFn={() => useAddRating({ star: 3 })} name={`Add 3 Star`} />
        <Button useStateFn={() => useAddRating({ star: 4 })} name={`Add 4 Star`} />
        <Button useStateFn={() => useAddRating({ star: 5 })} name={`Add 5 Star`} />
      </SimpleButtonPanel>
    </AppWrapper>
  );
}

export default App;
