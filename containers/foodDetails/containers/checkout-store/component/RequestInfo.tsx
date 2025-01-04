import React from "react";
import styled from "styled-components";
import { useCartItems } from "@/context/CartItems"; // Import the cart context
import { FoodData } from "@/utils/types/types"; // Import the FoodData type

// Styled components
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

const ExtrasContainer = styled.div`
  margin-left: 20px; /* Indent extras */
`;

const ExtraItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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
  const { cartItems } = useCartItems(); // Get cart items from context

  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => {
    const itemQuantity = item.quantity ?? 1; // Default to 1 if quantity is undefined
    const itemTotal = item.price * itemQuantity;
    const extrasTotal = item.extras?.reduce((extraTotal, extra) => {
      return extraTotal + extra.price * extra.quantity;
    }, 0) || 0;
    return total + itemTotal + extrasTotal;
  }, 0);

  // Calculate delivery fee
  const baseDeliveryFee = 600;
  const additionalFee = Math.floor(cartItems.length / 2) * 200;
  const deliveryFee = baseDeliveryFee + additionalFee;

  // Calculate total
  const total = subtotal + deliveryFee;

  return (
    <RequestContainer>
      <StoreOwnerBox>
        <StoreOwnerName>Cart items</StoreOwnerName>
        <RequestCheck>Please confirm your Request</RequestCheck>
      </StoreOwnerBox>
      <RequestBox>
        {cartItems.map((item) => {
          const itemQuantity = item.quantity ?? 1; // Default to 1 if quantity is undefined
          return (
            <React.Fragment key={item._id}>
              <RequestLine />
              <RequestedFood>
                <RequestedFoodName>{item.title}</RequestedFoodName>
                <RequestedFoodQuantity>
                  {itemQuantity} {itemQuantity > 1 ? "items" : "item"} - ₦{item.price * itemQuantity}
                </RequestedFoodQuantity>
              </RequestedFood>
              {item.extras && item.extras.length > 0 && (
                <ExtrasContainer>
                  <RequestedFoodName>Extras:</RequestedFoodName>
                  {item.extras.map((extra) => (
                    <ExtraItem key={extra._id}>
                      <RequestedFoodName>{extra.title}</RequestedFoodName>
                      <RequestedFoodQuantity>
                        {extra.quantity} {extra.quantity > 1 ? "items" : "item"} - ₦{extra.price * extra.quantity}
                      </RequestedFoodQuantity>
                    </ExtraItem>
                  ))}
                </ExtrasContainer>
              )}
            </React.Fragment>
          );
        })}
        <RequestLine />
      </RequestBox>
      <AccountBox>
        <AccountContent>
          <AccountSubTotalText>Sub Total</AccountSubTotalText>
          <AccountSubTotalAmount>₦{subtotal}</AccountSubTotalAmount>
        </AccountContent>
        <AccountContent>
          <AccountSubTotalText>Delivery</AccountSubTotalText>
          <AccountSubTotalAmount>₦{deliveryFee}</AccountSubTotalAmount>
        </AccountContent>
        <AccountContent>
          <AccountSubTotalText>Total</AccountSubTotalText>
          <AccountTotalAmount>₦{total}</AccountTotalAmount>
        </AccountContent>
      </AccountBox>
    </RequestContainer>
  );
};