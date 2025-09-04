import { useState } from 'react';
import type { ProductRatingSummary, RatingCount } from '../types/ProductRatingSummary';

/** A basic hook to manage and update product rating data for testing purposes.
 */
export function useTestHooks() {
  const [testData, setTestData] = useState<Array<RatingCount>>([
    { star: 5, count: 0 },
    { star: 4, count: 0 },
    { star: 3, count: 0 },
    { star: 2, count: 0 },
    { star: 1, count: 0 },
  ]);

  const useAddRating = ({ star }: { star: number }) => {
    const updatedData = testData.map((item) =>
      item.star === star ? { ...item, count: item.count + 1 } : item,
    );
    setTestData(updatedData);
  };

  const useGetData = (): ProductRatingSummary => {
    const totalRatings: number = testData.reduce((total, current) => total + current.count, 0);
    const averageRating: number =
      totalRatings > 0
        ? testData.reduce((total, current) => total + current.star * current.count, 0) /
          totalRatings
        : 0;

    return {
      averageRating: parseFloat(averageRating.toFixed(1)),
      totalRatings,
      ratingDistribution: testData,
    };
  };

  return { useAddRating, useGetData };

  // export function useAddRating({ star }: { star: number }) {
  //   testData[star].count += 1;
  //   setTestData([...testData]);
  // }

  // export function useGetData(): ProductRatingSummary {
  //   const totalRatings: number = testData.reduce((total, current) => total + current.count, 0);
  //   const averageRating: number =
  //     totalRatings > 0
  //       ? testData.reduce((total, current) => total + current.star * current.count, 0) / totalRatings
  //       : 0;

  //   return {
  //     averageRating: parseFloat(averageRating.toFixed(1)),
  //     totalRatings,
  //     ratingDistribution: testData,
  //   };
}
