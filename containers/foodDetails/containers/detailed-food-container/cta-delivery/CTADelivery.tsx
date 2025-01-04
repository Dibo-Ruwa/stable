import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import { HiMinus } from "react-icons/hi2";
import styled from "styled-components";
import { useCartItems } from "@/context/CartItems"; // Import the cart context
import { FoodData } from "@/utils/types/types"; // Import the FoodData type

// Styled components
const CTADeliveryContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  background: #3e3e3e;
  margin: 2rem 0 12.375rem;
  padding: 0.5rem 1rem 0.5rem 4rem;

  @media (max-width: 900px) {
    padding: 0.5rem 1rem 0.5rem 1rem;
  }

  @media (max-width: 400px) {
    padding: 1rem 0.3rem;
    flex-direction: column;
    gap: 16px;
  }
`;

const IncDec = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  color: #ffffff;

  @media (max-width: 900px) {
    gap: 1rem;
  }
`;

const CTADeliveryIcon = styled.button`
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
  color: #ffffff;
  cursor: pointer;
  font-size: 24px;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const CTADeliveryNum = styled.div`
  color: var(--White, #fefefe);
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const CTADeliveryBtns = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 80px;

  @media (max-width: 900px) {
    gap: 30px;
  }
`;

const CTADeliveryButton = styled.button<{ isActive: boolean }>`
  border: none;
  background: ${(props) =>
    props.isActive ? "var(--Green1, #27a124)" : "transparent"};
  cursor: pointer;
  outline: none;
  color: var(--White, #fefefe);
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 0.8rem 3rem;
  border-radius: 8px;
  transition: background 0.3s ease;

  &:hover {
    background: ${(props) =>
      props.isActive ? "var(--Green1, #27a124)" : "#555555"};
  }
`;

interface CTADeliveryProps {
  selectedItem: FoodData; // Pass the current item as a prop
}

export const CTADelivery: React.FC<CTADeliveryProps> = ({ selectedItem }) => {
  const [selectedOption, setSelectedOption] = useState<"pickup" | "delivery">(
    "delivery"
  );

  const { addToCart, updateItemQuantity, cartItems } = useCartItems(); // Use the cart context

  // Find the selected item in the cart to get its quantity
  const cartItem = cartItems.find((item) => item._id === selectedItem._id);
  const itemQuantity = cartItem?.quantity ?? 0; // Default to 0 if quantity is undefined

  // Handle increment
  const increment = () => {
    const newQuantity = itemQuantity + 1;

    if (cartItem) {
      // If the item is already in the cart, update its quantity
      updateItemQuantity(selectedItem._id, newQuantity);
    } else {
      // If the item is not in the cart, add it with the new quantity
      addToCart(selectedItem, newQuantity);
    }
  };

  // Handle decrement
  const decrement = () => {
    if (itemQuantity > 0) {
      const newQuantity = itemQuantity - 1;

      if (cartItem) {
        // If the item is in the cart, update its quantity
        updateItemQuantity(selectedItem._id, newQuantity);
      }
    }
  };

  const handleOptionSelect = (option: "pickup" | "delivery") => {
    setSelectedOption(option);
  };

  return (
    <CTADeliveryContainer>
      <IncDec>
        <CTADeliveryIcon onClick={decrement} disabled={itemQuantity === 0}>
          <HiMinus />
        </CTADeliveryIcon>
        <CTADeliveryNum>{itemQuantity}</CTADeliveryNum>
        <CTADeliveryIcon onClick={increment}>
          <MdAdd />
        </CTADeliveryIcon>
      </IncDec>
      <CTADeliveryBtns>
        <CTADeliveryButton
          isActive={selectedOption === "delivery"}
          onClick={() => handleOptionSelect("delivery")}
        >
          Delivery
        </CTADeliveryButton>
      </CTADeliveryBtns>
    </CTADeliveryContainer>
  );
};