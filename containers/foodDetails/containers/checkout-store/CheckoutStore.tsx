import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { InfoPass } from "./component/InfoPass";
import { DeliveryLocation } from "./component/DeliveryLocation";
import { SchDeliveryOpl } from "./component/SchDeliveryOpl";
import { CheckoutButton } from "./component/CheckoutBtn";
import { CartInfo } from "./component/CartInfo";
import useCartStore from "@/store/useCart.store";
import useOrder from "@/hooks/useOrder";
import { nanoid } from "nanoid";
import { Spinner } from "@nextui-org/react";
import PaymentButton from "@/component/paymentButton/PayButton";
import Loader from "@/component/ui/loader/Loader";
import { FaTimes } from "react-icons/fa";
import { DeliveryMethod } from './component/DeliveryMethod';
import { CouponInput } from "./component/CouponInput";
import { useRouter } from 'next/navigation';

const StoresContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding: 1rem;
  z-index: 1;
  flex-shrink: 0;
  border-radius: 10px;
  background: var(--White, #fefefe);
  box-shadow: 0px 184px 51px 0px rgba(17, 7, 7, 0),
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

  .checkout-button {
    display: flex;
    width: 100%;
    height: 51px;
    cursor: pointer;
    margin: 2rem auto;
    padding: 7.913px 47.476px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 11.304px;
    color: rgba(53, 51, 51, 0.8);
    border-radius: 4.522px;
    border: 1.13px solid var(--green2, #4bb149);
    background: rgba(183, 224, 182, 0.2);
    transition: background 0.3s, color 0.3s;

    &.disabled {
      cursor: not-allowed;
      background: rgba(183, 224, 182, 0.5);
      color: rgba(53, 51, 51, 0.5);
    }

    &:hover {
      background: rgba(183, 224, 182, 0.3);
    }

    &.disabled:hover {
      background: rgba(183, 224, 182, 0.5);
      color: rgba(53, 51, 51, 0.5);
    }
  }
`;

const CloseButton = styled(FaTimes)`
  display: none;
  @media (max-width: 900px) {
    display: block;
    cursor: pointer;
    color: red;
  }
`;

const OrderTypeSelector = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`;

const OrderTypeButton = styled.button<{ isSelected: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: 1px solid #4bb149;
  background: ${props => props.isSelected ? 'rgba(183, 224, 182, 0.2)' : 'transparent'};
  color: ${props => props.isSelected ? '#4bb149' : '#666'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(183, 224, 182, 0.1);
  }
`;

export const CheckoutStore = ({ onClose }: { onClose: () => void }) => {
  const router = useRouter();
  // Add isRedirecting state
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [infoPass, setInfoPass] = useState<string>("");
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [scheduledDelivery, setScheduledDelivery] = useState<{
    date: string;
    time: string;
  }>({
    date: "dd/mm/yyyy",
    time: "8:00 AM",
  });

  const [locationError, setLocationError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [deliveryMethod, setDeliveryMethod] = useState<'delivery' | 'pickup'>('delivery');
  const [orderType, setOrderType] = useState<'instant' | 'pre-order'>('instant');
  const { cartItems, getCart, coupon } = useCartStore();
const { handleCartOrderSubmit } = useOrder();

  const referenceId = nanoid(8);
  const [showSuccessModal, setShowSuccessModal] = useState(false); // Add this state

  // Fetch cart data on mount
  useEffect(() => {
    const loadCart = async () => {
      try {
        setIsLoading(true);
        await getCart();
        // Add debug logs
        const currentCart = {
          items: cartItems,
          orderType,
          scheduledDelivery,
          deliveryMethod,
          selectedRegion,
          coupon,
          subtotal,
          deliveryFee: baseDeliveryFee,
          deliveryDiscount,
          itemDiscount,
          finalTotal
        };
        console.log('Current Cart State:', currentCart);
      } catch (error) {
        console.error("Failed to load cart:", error);
      } finally {
        // setIsLoading(false);
      }
      setIsLoading(false);

    };

    loadCart();
  }, [getCart]);

  // Get delivery regions from the first cart item
  const deliveryRegions =
    cartItems[0]?.vendor?.branch?.[0]?.deliveries?.map((delivery: any) => ({
      name: delivery.region.name,
      price: delivery.price,
    })) || [];

  // Get pickup allowed status and log it for debugging
  const isPickupAllowed = (() => {
    const allowPickup = cartItems[0]?.vendor?.allowPickup;
    console.log('Vendor allowPickup status:', allowPickup);
    return allowPickup || false;
  })();

  // Add debug logging for cart items
  useEffect(() => {
    console.log('Current cart items:', cartItems);
    console.log('First item vendor:', cartItems[0]?.vendor);
  }, [cartItems]);

  // Calculate subtotal without delivery fee
  const subtotal = cartItems.reduce((acc, item) => {
    const itemTotal = item.price * item.quantity;
    const extrasTotal = item.extras.reduce((extraAcc, extra) => 
      extraAcc + (extra.price * extra.quantity), 0);
    return acc + itemTotal + extrasTotal;
  }, 0);

  // Calculate delivery discount if coupon is delivery mode
  const deliveryDiscount = coupon?.mode === 'delivery' ? coupon.discount : 0;

  // Calculate item discount if coupon is not delivery mode
  const itemDiscount = coupon && coupon.mode !== 'delivery' ? coupon.discount : 0;

  // Calculate final totals
  const baseDeliveryFee = deliveryMethod === 'delivery' ? (
    selectedRegion ? 
    deliveryRegions.find(r => r.name === selectedRegion)?.price || 0 : 0
  ) : 0;

  // Apply delivery discount if applicable
  const finalDeliveryFee = baseDeliveryFee - deliveryDiscount;
  
  // Calculate final total
  const finalTotal = subtotal - itemDiscount + Math.max(0, finalDeliveryFee);

  const onSuccess = async () => {
    try {
      setIsRedirecting(true);

      const orderSubmitData = {
        orderType,
        scheduledDelivery: orderType === 'pre-order' ? scheduledDelivery : null,
        deliveryMethod,
        infoPass,
        couponInfo: coupon && coupon.code ? {
          code: coupon.code,
          discount: coupon.discount,
          couponId: coupon.couponId,
          mode: coupon.mode
        } : null
      };

      const data = await handleCartOrderSubmit(
        referenceId, 
        finalTotal, 
        finalDeliveryFee, 
        deliveryMethod === 'delivery' ? selectedRegion : 'Vendor Location',
        orderSubmitData
      );

      // Let handleCartOrderSubmit handle the success flow, just redirect here
      router.push(`/profile/orders/${data.order._id}?type=${data.order.type}`);
    } catch (error) {
      console.error('Payment error:', error);
    } finally {
      setIsRedirecting(false);
    }
  };

  const handleCheckout = () => {
    if (deliveryMethod === 'delivery' && !selectedRegion) {
      setLocationError("Please select a delivery location.");
      return;
    }

    const checkoutData = {
      cartItems,
      deliveryMethod,
      deliveryFee: finalDeliveryFee,
      selectedRegion: deliveryMethod === 'pickup' ? null : selectedRegion,
      scheduledDelivery: orderType === 'pre-order' ? scheduledDelivery : null,
      orderType,
      infoPass,
      coupon // Make sure coupon data is included
    };

    console.log("Checkout Data:", checkoutData);
    // Proceed with checkout...
  };

  const handleRegionSelect = (region: string) => {
    setSelectedRegion(region);
    setLocationError(null);
  };

  const handleMethodChange = (method: 'delivery' | 'pickup') => {
    setDeliveryMethod(method);
    if (method === 'pickup') {
      setSelectedRegion(null);
      setLocationError(null);
      // Reset delivery info in cart store
      useCartStore.setState(state => ({
        ...state,
        deliveryInfo: {
          region: null,
          fee: 0
        }
      }));
    }
  };

  // Add validation for scheduled delivery
  const isScheduledDeliveryValid = () => {
    if (orderType !== 'pre-order') return true;
    return (
      scheduledDelivery.date !== "dd/mm/yyyy" && 
      scheduledDelivery.time !== "8:00 AM" && 
      scheduledDelivery.date && 
      scheduledDelivery.time
    );
  };

  // Update validation logic to include scheduled delivery check
  const isFormValid = 
    (deliveryMethod === 'pickup' || (deliveryMethod === 'delivery' && selectedRegion)) &&
    (orderType === 'instant' || (orderType === 'pre-order' && isScheduledDeliveryValid()));

  if (isLoading || isRedirecting) {
    return (
      <StoresContainer className="flex justify-center items-center">
        <Loader />
      </StoresContainer>
    );
  }

  // if (!isLoading && cartItems.length === 0) {
  //   return (
  //     <StoresContainer className="flex justify-center items-center">
  //       <p>No cart orders available.</p>
  //     </StoresContainer>
  //   );
  // }
  return (
    <StoresContainer>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <CloseButton onClick={onClose} />
      </div>
      <CartInfo
        subtotal={subtotal}
        deliveryFee={baseDeliveryFee}
        deliveryDiscount={deliveryDiscount}
        itemDiscount={itemDiscount}
        total={finalTotal}
        couponDiscount={coupon?.discount || 0}
        orderType={orderType} // Add this prop
        scheduledDelivery={orderType === 'pre-order' ? scheduledDelivery : undefined} // Add this prop
      />
      <InfoPass onInfoPassChange={setInfoPass} />
      <OrderTypeSelector>
        <OrderTypeButton
          isSelected={orderType === 'instant'}
          onClick={() => setOrderType('instant')}
        >
          Instant Order
        </OrderTypeButton>
        <OrderTypeButton
          isSelected={orderType === 'pre-order'}
          onClick={() => setOrderType('pre-order')}
        >
          Pre-Order
        </OrderTypeButton>
      </OrderTypeSelector>
      <DeliveryMethod 
        isPickupAllowed={isPickupAllowed}
        selectedMethod={deliveryMethod}
        onMethodSelect={handleMethodChange}  // Use the new handler
      />
      {deliveryMethod === 'delivery' && (
        <DeliveryLocation
          regions={deliveryRegions}
          onRegionSelect={handleRegionSelect}
          error={locationError}
          onErrorClear={() => setLocationError(null)}
          deliveryMethod={deliveryMethod}  // Pass the delivery method
        />
      )}
      <CouponInput />
      {orderType === 'pre-order' && (
        <SchDeliveryOpl onScheduleChange={setScheduledDelivery} />
      )}
      <PaymentButton
        totalPrice={finalTotal}
        openModal={(type, message) => console.log(type, message)}
        buttonText="Check Out"
        color="primary"
        onSuccess={onSuccess}
        onClose={() => console.log("Payment closed")}
        referenceId={referenceId}
        className={`checkout-button ${
          !isFormValid || cartItems.length === 0 ? 'disabled' : ''
        }`}
        disabled={!isFormValid || cartItems.length === 0}
        setShowSuccessModal={setShowSuccessModal} // Add this prop
      />
      {/* Add success modal if needed */}
      {showSuccessModal && (
        <div>Payment Successful!</div>
      )}
    </StoresContainer>
  );
};
