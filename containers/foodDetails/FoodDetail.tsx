"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Product, products, restaurants } from "@/constants";
import Image from "next/image";
import ProductCard from "@/component/ProductCard/ProductCard";
import useCartStore from "@/store/useCart.store";
import Modal from "@/component/modals/Modal";
import BackButton from "@/component/ui/BackButton/BackButton";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { DisplayFood } from "./containers/detailed-food-container/display-food/DisplayFood";
import { CheckoutStore } from "./containers/checkout-store/CheckoutStore";
import { SimilarMeal } from "./containers/similar-meal/SimilarMeal";
import { useCartItems } from "@/context/CartItems";
import { AllCartsFood } from "./containers/detailed-food-container/display-food/AllCartsFood";

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

const DFCSCheck = styled.div`
  flex-basis: 30%;

  @media (max-width: 900px) {
  position: fixed;
    width: 400px;
    max-width: 90%;
    height: fit-content;
    top: 100px;
    right: 0;
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

const FoodDetail: React.FC = () => {
  const { isCart, setIsCart } = useCartItems();

  return (
    <FoodDetailsContainer>
      <FoodDetailsFrame>
        <div className="btn">
          <BackButton />
        </div>
        <DFCS>
          <DFCSFood>
            {isCart ?
            (

              <DisplayFood />
            ):(
              <AllCartsFood />
            )}
            {/* <SimilarMeal id={id} /> */}
          </DFCSFood>
          <DFCSCheck>
            <ClearOut />
            <CheckoutStore />
          </DFCSCheck>
        </DFCS>
       
      </FoodDetailsFrame>
    </FoodDetailsContainer>
  );
};

export default FoodDetail;
