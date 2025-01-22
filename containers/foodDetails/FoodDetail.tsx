"use client";
import React, { useEffect, useState, useMemo } from "react";
import styled from "styled-components";
import BackButton from "@/component/ui/BackButton/BackButton";
import { DisplayFood } from "./containers/detailed-food-container/display-food/DisplayFood";
import { CheckoutStore } from "./containers/checkout-store/CheckoutStore";
import { AllCartsFood } from "./containers/detailed-food-container/display-food/AllCartsFood";
import { useSession } from "next-auth/react";
import useCartStore from "@/store/useCart.store";
import { useFoodItem } from "@/context/FooItemProvider";
import { FaShoppingCart, FaTimes } from "react-icons/fa";

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
    flex-direction: column;
  }
`;

const DFCSFood = styled.div`
  flex-basis: 67%;

  @media (max-width: 900px) {
    flex-basis: 100%;
  }
`;

const DFCSCheck = styled.div<{ showCart: boolean }>`
  flex-basis: 30%;

  @media (max-width: 900px) {
    position: fixed;
    width: 400px;
    max-width: 90%;
    height: fit-content;
    top: 100px;
    right: 0;
    display: ${({ showCart }) => (showCart ? "block" : "none")};
  }
`;

const ClearOut = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: transparent;
  left: 0;
  top: 0;
  display: none;

  @media (max-width: 900px) {
    display: block;
  }
`;

const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 1.5rem;
  color: #888;
`;

const ToggleCartButton = styled.button`
  display: none;
  @media (max-width: 900px) {
    display: block;
    margin: 1rem auto;
    padding: 0.5rem 1rem;
    background-color: #4bb149;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const FoodDetail: React.FC = () => {
  const [isCheckingCart, setIsCheckingCart] = useState(true);
  const [showCart, setShowCart] = useState(false); // Set to false by default
  const { data: session } = useSession();
  const { cartItems, getCart } = useCartStore();
  const { selectedItem } = useFoodItem();

  // Add state to track if selected item is in cart
  const isSelectedItemInCart = useMemo(() => {
    if (!selectedItem || !cartItems.length) return false;
    return cartItems.some(item => 
      item._id === selectedItem._id || 
      item.id === selectedItem._id
    );
  }, [cartItems, selectedItem]);

  // Add cart checking effect
  useEffect(() => {
    const checkCart = async () => {
      if (!session) {
        setIsCheckingCart(false);
        return;
      }

      try {
        await getCart();
        // Open checkout by default on mobile if there are items in the cart
        if (cartItems.length > 0) {
          setShowCart(true);
        }
      } catch (error) {
        console.error('Error checking cart:', error);
      } finally {
        setIsCheckingCart(false);
      }
    };

    checkCart();
  }, [session, getCart, cartItems.length]);

  // Close checkout when cart is empty
  useEffect(() => {
    if (cartItems.length === 0) {
      setShowCart(false);
    }
  }, [cartItems.length]);

  if (isCheckingCart) {
    return (
      <FoodDetailsContainer>
        <FoodDetailsFrame>
          <div className="btn">
            <BackButton />
          </div>
          <Loader>Checking cart...</Loader>
        </FoodDetailsFrame>
      </FoodDetailsContainer>
    );
  }

  return (
    <FoodDetailsContainer>
      <FoodDetailsFrame>
        <div className="btn">
          <BackButton />
        </div>
        {cartItems.length > 0 && (
          <ToggleCartButton onClick={() => setShowCart(!showCart)}>
            {showCart ? <FaTimes /> : <FaShoppingCart />}
          </ToggleCartButton>
        )}
        <DFCS>
          <DFCSFood>
            {cartItems.length > 0 && isSelectedItemInCart ? (
              <AllCartsFood />
            ) : (
              <DisplayFood />
            )}
          </DFCSFood>
          <DFCSCheck showCart={showCart}>
            <ClearOut />
            <CheckoutStore onClose={() => setShowCart(false)} />
          </DFCSCheck>
        </DFCS>
      </FoodDetailsFrame>
    </FoodDetailsContainer>
  );
};

export default FoodDetail;
