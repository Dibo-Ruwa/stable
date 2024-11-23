import React from 'react';
import { MdAdd } from "react-icons/md";
import { HiMinus } from "react-icons/hi2";
import styled from 'styled-components';

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

const CTADeliveryIcon = styled.div`
  width: 28px;
  height: 28px;
  flex-shrink: 0;
`;

const CTADeliveryNum = styled.span`
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

const CTADeliveryPickUp = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  outline: none;
  color: var(--White, #fefefe);
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const CTADeliveryDelivery = styled.button`
  display: flex;
  height: 45px;
  padding: 8px 60px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: none;
  background: var(--Green1, #27a124);
  color: var(--White, #fefefe);
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

   @media (max-width: 900px) {
       height: 45px;
      padding: 8px 35px;
  }
`;

export const CTADelivery = () => {
  return (
    <CTADeliveryContainer>
      <IncDec>
        <CTADeliveryIcon as={HiMinus} />
        <CTADeliveryNum>0</CTADeliveryNum>
        <CTADeliveryIcon as={MdAdd} />
      </IncDec>
      <CTADeliveryBtns>
        <CTADeliveryPickUp>Pick up</CTADeliveryPickUp>
        <CTADeliveryDelivery>Delivery</CTADeliveryDelivery>
      </CTADeliveryBtns>
    </CTADeliveryContainer>
  );
};
