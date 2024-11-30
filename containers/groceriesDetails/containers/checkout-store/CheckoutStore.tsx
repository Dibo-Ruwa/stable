import React from 'react';
import styled from 'styled-components';
import { RequestInfo } from './component/RequestInfo';
import { InfoPass } from './component/InfoPass';
import { DeliveryLocation } from './component/DeliveryLocation';
import { SchDeliveryOpl } from './component/SchDeliveryOpl';
import { CheckoutButton } from './component/CheckoutBtn';

const StoresContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding: 1rem;
  z-index: 1;
  flex-shrink: 0;
  border-radius: 10px;
  background: var(--White, #fefefe);
  box-shadow: 0px 184px 51px 0px rgba(158, 158, 158, 0),
    0px 118px 47px 0px rgba(158, 158, 158, 0.01),
    0px 66px 40px 0px rgba(158, 158, 158, 0.05),
    0px 29px 29px 0px rgba(158, 158, 158, 0.05),
    0px 7px 16px 0px rgba(158, 158, 158, 0.05);
  position: relative;
  right: 10px;
  top: 0;
  
   @media (max-width: 900px) {
    max-height: 90dvh;
    overflow: auto;
    padding: 20px 20px;

  }

  @media (max-width: 500px) {
        padding: 15px;
  }
`;

export const CheckoutStore = () => {
  return (
    <StoresContainer>
      <RequestInfo />
      <InfoPass />
      <DeliveryLocation />
      <SchDeliveryOpl />
      <CheckoutButton />
    </StoresContainer>
  );
};
