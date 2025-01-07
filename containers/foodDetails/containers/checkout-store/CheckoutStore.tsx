import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { InfoPass } from './component/InfoPass';
import { DeliveryLocation } from './component/DeliveryLocation';
import { SchDeliveryOpl } from './component/SchDeliveryOpl';
import { CheckoutButton } from './component/CheckoutBtn';
import { CartInfo } from './component/CartInfo';
import useCartStore from '@/store/useCart.store';
import { Spinner } from '@nextui-org/react';

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
  const [infoPass, setInfoPass] = useState<string>("");
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [scheduledDelivery, setScheduledDelivery] = useState<{ date: string; time: string }>({
    date: "dd/mm/yyyy",
    time: "8:00 AM",
  });
  const [locationError, setLocationError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const { cartItems, getCart } = useCartStore();

  // Fetch cart data on mount
  useEffect(() => {
    const loadCart = async () => {
      try {
        setIsLoading(true);
        await getCart();
      } catch (error) {
        console.error('Failed to load cart:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadCart();
  }, [getCart]);

  // Get delivery regions from the first cart item
  const deliveryRegions = cartItems[0]?.vendor?.branch?.[0]?.deliveries?.map(
    (delivery: any) => ({
      name: delivery.region.name,
      price: delivery.price,
    })
  ) || [];

  // Calculate delivery fee based on selection
  const baseDeliveryFee = selectedRegion
    ? deliveryRegions.find((region) => region.name === selectedRegion)?.price || 0
    : 0;
  const additionalFee = Math.floor((cartItems.length - 1) / 2) * 100;
  const deliveryFee = baseDeliveryFee + additionalFee;

  const handleCheckout = () => {
    if (!selectedRegion) {
      setLocationError("Please select a delivery location.");
      return;
    }

    const checkoutData = {
      cartItems,
      deliveryFee,
      selectedRegion,
      scheduledDelivery,
      infoPass
    };

    console.log("Checkout Data:", checkoutData);
    // Proceed with checkout...
  };

  if (isLoading) {
    return (
      <StoresContainer className="flex justify-center items-center">
        <Spinner size="lg" />
      </StoresContainer>
    );
  }

  return (
    <StoresContainer>
      <CartInfo
        subtotal={cartItems.reduce((acc, item) => acc + item.total, 0)}
        deliveryFee={deliveryFee}
        total={cartItems.reduce((acc, item) => acc + item.total, 0) + deliveryFee}
      />
      <InfoPass onInfoPassChange={setInfoPass} />
      <DeliveryLocation
        regions={deliveryRegions}
        onRegionSelect={setSelectedRegion}
        error={locationError}
        onErrorClear={() => setLocationError(null)}
      />
      <SchDeliveryOpl onScheduleChange={setScheduledDelivery} />
      <CheckoutButton
        onClick={handleCheckout}
        disabled={!selectedRegion || cartItems.length === 0}
      />
    </StoresContainer>
  );
};