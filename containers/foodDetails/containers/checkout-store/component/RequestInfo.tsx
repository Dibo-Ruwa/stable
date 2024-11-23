import React from "react";
import styled from "styled-components";

const RequestContainer = styled.div`
  /* No specific styles provided for this container */
`;

const StoreOwnerBox = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 9.043px;
`;

const StoreOwnerName = styled.p`
  color: var(--Green1, #27a124);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const RequestCheck = styled.p`
  color: var(--Ash-100, #8f8f8f);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const RequestBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 13.565px;
  margin: 2rem auto;
`;

const RequestLine = styled.hr`
  width: 100%;
  height: 1.13px;
  border-style: dashed;
  color: rgba(143, 143, 143, 0.5);
`;

const RequestedFood = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const RequestedFoodName = styled.p`
  color: var(--Ash-100, #8f8f8f);
  font-family: Poppins;
  font-size: 15.825px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const RequestedFoodQuantity = styled.p`
  color: var(--Soft-black, #565656);
  font-family: Poppins;
  font-size: 15.825px;
  font-style: normal;
  font-weight: 400;
  line-height: 27.129px;
`;

const AccountBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  margin: 0 auto 2rem;
`;

const AccountContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const AccountSubTotalText = styled.p`
  color: var(--Ash-100, #8f8f8f);
  font-family: Poppins;
  font-size: 15.825px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const AccountSubTotalAmount = styled.p`
  color: var(--Soft-black, #565656);
  font-family: Poppins;
  font-size: 15.825px;
  font-style: normal;
  font-weight: 500;
  line-height: 27.129px;
`;

const AccountTotalAmount = styled.p`
  color: var(--Green1, #27a124);
  font-family: Poppins;
  font-size: 15.825px;
  font-style: normal;
  font-weight: 600;
  line-height: 27.129px;
`;

export const RequestInfo = () => {
  return (
    <RequestContainer>
      <StoreOwnerBox>
        <StoreOwnerName>Carolina Stores</StoreOwnerName>
        <RequestCheck>Please confirm your Request</RequestCheck>
      </StoreOwnerBox>
      <RequestBox>
        <RequestLine />
        <RequestedFood>
          <RequestedFoodName>Fried Rice</RequestedFoodName>
          <RequestedFoodQuantity>2Plates</RequestedFoodQuantity>
        </RequestedFood>
        <RequestLine />
        <RequestedFood>
          <RequestedFoodName>Protein</RequestedFoodName>
          <RequestedFoodQuantity>4</RequestedFoodQuantity>
        </RequestedFood>
        <RequestLine />
        <RequestedFood>
          <RequestedFoodName>Drink</RequestedFoodName>
          <RequestedFoodQuantity>5</RequestedFoodQuantity>
        </RequestedFood>
        <RequestLine />
        <RequestedFood>
          <RequestedFoodName>Extras</RequestedFoodName>
          <RequestedFoodQuantity>4</RequestedFoodQuantity>
        </RequestedFood>
        <RequestLine />
      </RequestBox>
      <AccountBox>
        <AccountContent>
          <AccountSubTotalText>Sub Total</AccountSubTotalText>
          <AccountSubTotalAmount>$10,000</AccountSubTotalAmount>
        </AccountContent>
        <AccountContent>
          <AccountSubTotalText>Delivery</AccountSubTotalText>
          <AccountSubTotalAmount>$10,000</AccountSubTotalAmount>
        </AccountContent>
        <AccountContent>
          <AccountSubTotalText>Total</AccountSubTotalText>
          <AccountTotalAmount>$100,000</AccountTotalAmount>
        </AccountContent>
      </AccountBox>
    </RequestContainer>
  );
};
