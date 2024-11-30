import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import { HiMinus } from "react-icons/hi2";
import styled from "styled-components";

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

export const CTADelivery = () => {
  const [count, setCount] = useState(0);
  const [selectedOption, setSelectedOption] = useState<"pickup" | "delivery">(
    "pickup"
  );

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));

  const handleOptionSelect = (option: "pickup" | "delivery") => {
    setSelectedOption(option);
  };

  return (
    <CTADeliveryContainer>
      <IncDec>
        <CTADeliveryIcon onClick={decrement} disabled={count === 0}>
          <HiMinus />
        </CTADeliveryIcon>
        <CTADeliveryNum>{count}</CTADeliveryNum>
        <CTADeliveryIcon onClick={increment}>
          <MdAdd />
        </CTADeliveryIcon>
      </IncDec>
      <CTADeliveryBtns>
        <CTADeliveryButton
          isActive={selectedOption === "pickup"}
          onClick={() => handleOptionSelect("pickup")}
        >
          Pick up
        </CTADeliveryButton>
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
