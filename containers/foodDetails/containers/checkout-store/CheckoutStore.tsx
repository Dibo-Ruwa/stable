import React, { useState } from 'react';
import styled from 'styled-components';
import { RequestInfo } from './component/RequestInfo';
import { InfoPass } from './component/InfoPass';
import { DeliveryLocation } from './component/DeliveryLocation';
import { SchDeliveryOpl } from './component/SchDeliveryOpl';
import { CheckoutButton } from './component/CheckoutBtn';
import { useCartItems } from "@/context/CartItems";
import { CartInfo } from './component/CartInfo';

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
  const { cartItems } = useCartItems(); // Use the new context
  const [infoPass, setInfoPass] = useState<string>(""); // For "Pass an info"
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null); // For region selection
  const [scheduledDelivery, setScheduledDelivery] = useState<{ date: string; time: string }>({
    date: "dd/mm/yyyy",
    time: "8:00 AM",
  });

  // Calculate subtotal, delivery fee, and total
  const subtotal = cartItems.reduce((total, item) => {
    const itemQuantity = item.quantity ?? 1;
    const itemTotal = item.price * itemQuantity;
    const extrasTotal = item.extras?.reduce((extraTotal, extra) => extraTotal + extra.price * extra.quantity, 0) || 0;
    return total + itemTotal + extrasTotal;
  }, 0);

  const baseDeliveryFee = 600;
  const additionalFee = Math.floor((cartItems.length - 1) / 2) * 100;
  const deliveryFee = baseDeliveryFee + additionalFee;
  const total = subtotal + deliveryFee;

  // Handle checkout button click
  const handleCheckout = () => {
    const checkoutData = {
      cartItems: cartItems.map((item) => ({
        title: item.title,
        quantity: item.quantity,
        price: item.price,
        extras: item.extras?.map((extra) => ({
          title: extra.title,
          quantity: extra.quantity,
          price: extra.price,
        })),
      })),
      subtotal: subtotal.toLocaleString(),
      deliveryFee: deliveryFee.toLocaleString(),
      total: total.toLocaleString(),
      infoPass, // Pass an info
      selectedRegion, // Selected region
      scheduledDelivery, // Scheduled delivery date and time
    };

    console.log("Checkout Data:", checkoutData);
  };

  return (
    <StoresContainer>
      <CartInfo />
      <InfoPass onInfoPassChange={setInfoPass} />
      <DeliveryLocation onRegionSelect={setSelectedRegion} />
      <SchDeliveryOpl onScheduleChange={setScheduledDelivery} />
      <CheckoutButton onClick={handleCheckout} />
    </StoresContainer>
  );
};