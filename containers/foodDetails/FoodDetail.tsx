"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Product, products, restaurants } from "@/constants";
import Image from "next/image";
import ProductCard from "@/component/ProductCard/ProductCard";
import useCartStore from "@/store/useCart.store";
import Modal from "@/component/modals/Modal";
import { BackButton } from "@/component/ui/BackButton/BackButton";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { DisplayFood } from "./containers/detailed-food-container/display-food/DisplayFood";
import { CheckoutStore } from "./containers/checkout-store/CheckoutStore";
import { SimilarMeal } from "./containers/similar-meal/SimilarMeal";

export type IFoodDetailProps = {
  id: string;
};

// Styled components
const FoodDetailsContainer = styled.section`
  background: var(--Background-color, #f8f8f8);
`;

const FoodDetailsFrame = styled.div`
  margin: auto;
  margin-top: 6rem;
  width: min(95%, 1440px);


   @media (max-width: 900px) {
        width: min(95%, 1440px);
  }
`;

const DFCS = styled.div`
  
  display: flex;
  gap: 3%;
  justify-content: space-between;
  position: relative;

   @media (max-width: 900px) {
      gap: 0%;
  }
`;

const DFCSFood = styled.div`
  flex-basis: 67%;

  @media (max-width: 900px) {
    /* Adjust styling for screens smaller than 900px */
    flex-basis: 100%;
  }
`;

const DFCSCheck = styled.div<{ isVisible: boolean }>`
  flex-basis: 30%;

  @media (max-width: 900px) {
  position: fixed;
    width: 400px;
    max-width: 90%;
    height: fit-content;
    top: 100px;
    right: 0;
    display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  }
`;

const ToggleButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ClearOut = styled.div`
  position: fixed;
  width: 100dvw;
  height: 100dvh;
  background: transparent; 
  left: 0;
  top: 0;
  display: none;

  @media (max-width: 900px) {
    display: block;
  }
 
`;

const FoodDetail: React.FC<IFoodDetailProps> = ({ id }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => {
    setIsVisible(prev => !prev);
  };

  useEffect(() => {
    
  }, []);

  return (
    <FoodDetailsContainer>
      <FoodDetailsFrame>
        <div className="btn">
          <BackButton />
        </div>
        <ToggleButton onClick={toggleVisibility}>
          {isVisible ? 'Hide Checkout' : 'Show Checkout'}
        </ToggleButton>
        <DFCS>
          <DFCSFood>
            <DisplayFood />
            <SimilarMeal id={id} />
          </DFCSFood>
          <DFCSCheck isVisible={isVisible}>
            <ClearOut onClick={toggleVisibility} />
            <CheckoutStore />
          </DFCSCheck>
        </DFCS>
       
      </FoodDetailsFrame>
    </FoodDetailsContainer>
  );
};

export default FoodDetail;
