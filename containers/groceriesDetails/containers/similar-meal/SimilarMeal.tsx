import React from 'react';
import styled from 'styled-components';
import { FirstSimilarMeal } from './FirstSimilarMeal';
import { SecondSimilarMeal } from './SecondSimilarMeal';

interface SimilarMealProps {
  id: string;
}

// Styled component for the section element
const MostSoldContainer = styled.section`
  padding: 0;
`;

export const SimilarMeal: React.FC<SimilarMealProps> = ({ id }) => {
  return (
    <MostSoldContainer>
      <FirstSimilarMeal id={id} />
      <SecondSimilarMeal id={id} />
    </MostSoldContainer>
  );
};
