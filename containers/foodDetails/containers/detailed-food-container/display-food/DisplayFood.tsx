import React from "react";
import styled from "styled-components";
import { AboutFood } from "../about-food/AboutFood";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import { FaAngleRight } from "react-icons/fa";
import { useFoodItem } from "@/context/FooItemProvider";
import { FoodData } from "@/utils/types/types";

interface DisplayFoodProps {
  food: FoodData;
}

// Styled components
const Container = styled.section`
  width: 100%;
`;

const DisplayImg = styled.div`
  /* additional styles can be added here if needed */
`;

const OnDisplayImg = styled.img`
  height: 329px;
  border-radius: 20px;
  width: 100%;
  flex-shrink: 0;
  object-fit: cover;
`;

const SelectedImg = styled.div`
  display: flex;
  gap: 16px;
  justify-content: start;
  margin-top: 1rem;
  overflow-x: auto;
`;

const OnSelectedImg = styled.img`
  width: 27%;
  height: 120px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    height: 100px;
  }
`;

const PrevBtn = styled(TfiAngleLeft)`
  display: flex;
  width: 2rem;
  height: 2rem;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 100px;
  background: #eaebee;
`;

const NextBtn = styled(TfiAngleRight)`
  display: flex;
  width: 2rem;
  height: 2rem;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 100px;
  background: #eaebee;
`;

export const DisplayFood = () => {
  const { selectedItem } = useFoodItem();

  return (
    <Container>
      <DisplayImg>
        <OnDisplayImg src={selectedItem?.imageUrl} alt="on display" />
      </DisplayImg>

      {/* Only AboutFood is needed here now */}
      <AboutFood selectedItem={selectedItem} />
    </Container>
  );
};