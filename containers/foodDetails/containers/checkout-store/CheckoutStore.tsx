import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { InfoPass } from "./component/InfoPass";
import { DeliveryLocation } from "./component/DeliveryLocation";
import { SchDeliveryOpl } from "./component/SchDeliveryOpl";
import { CheckoutButton } from "./component/CheckoutBtn";
import { CartInfo } from "./component/CartInfo";
import useCartStore from "@/store/useCart.store";
import { nanoid } from "nanoid";
import { Spinner } from "@nextui-org/react";
import PaymentButton from "@/component/paymentButton/PayButton";
import useOrder from "@/hooks/useOrder";
import Loader from "@/component/ui/loader/Loader";
import { FaTimes } from "react-icons/fa";
import { SuccessModal } from "./SuccessModal";

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

export const CheckoutStore = ({ onClose }: { onClose: () => void }) => {
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

  const { showSuccessModal, setShowSuccessModal, handleCartOrderSubmit } =
    useOrder();
  const { cartItems, getCart } = useCartStore();
  const referenceId = nanoid(8);

  // Fetch cart data on mount
  useEffect(() => {
    const loadCart = async () => {
      try {
        setIsLoading(true);
        await getCart();
      } catch (error) {
        console.error("Failed to load cart:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadCart();
  }, [getCart]);

  // Get delivery regions from the first cart item
  const deliveryRegions =
    cartItems[0]?.vendor?.branch?.[0]?.deliveries?.map((delivery: any) => ({
      name: delivery.region.name,
      price: delivery.price,
    })) || [];

  // Calculate delivery fee based on selection
  const baseDeliveryFee = selectedRegion
    ? deliveryRegions.find((region: any) => region.name === selectedRegion)
        ?.price || 0
    : 0;
  const additionalFee = Math.floor((cartItems.length - 1) / 2) * 100;
  const deliveryFee = baseDeliveryFee + additionalFee;

  // Calculate subtotal and total price including extras
  const subtotal = cartItems.reduce((acc, item) => {
    const itemTotal = item.price * item.quantity;
    const extrasTotal = item.extras.reduce(
      (extraAcc, extra) => extraAcc + extra.price * extra.quantity,
      0
    );
    return acc + itemTotal + extrasTotal;
  }, 0);

  const totalPrice = subtotal + deliveryFee;

  const onSuccess = async () => {
    if (!selectedRegion) {
      setLocationError("Please select a delivery location.");
      return;
    }
    await handleCartOrderSubmit(
      referenceId,
      totalPrice,
      deliveryFee,
      selectedRegion
    );
    setIsLoading(true);
  };

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
      infoPass,
    };

    console.log("Checkout Data:", checkoutData);
    // Proceed with checkout...
  };

  if (isLoading) {
    return (
      <StoresContainer className="flex justify-center items-center">
        <Loader />
      </StoresContainer>
    );
  }

  if (!isLoading && cartItems.length === 0) {
    return (
      <StoresContainer className="flex justify-center items-center">
        <p>No cart orders available.</p>
      </StoresContainer>
    );
  }
  return (
    <StoresContainer>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <CloseButton onClick={onClose} />
      </div>
      <CartInfo
        subtotal={subtotal}
        deliveryFee={deliveryFee}
        total={totalPrice}
      />
      <InfoPass onInfoPassChange={setInfoPass} />
      <DeliveryLocation
        regions={deliveryRegions}
        onRegionSelect={setSelectedRegion}
        error={locationError}
        onErrorClear={() => setLocationError(null)}
      />
      <SchDeliveryOpl onScheduleChange={setScheduledDelivery} />
      <PaymentButton
        totalPrice={totalPrice}
        openModal={(type, message) => console.log(type, message)}
        buttonText="Check Out"
        color="primary"
        onSuccess={onSuccess}
        onClose={() => console.log("Payment closed")}
        referenceId={referenceId}
        className={`checkout-button ${
          !selectedRegion || cartItems.length === 0 ? "disabled" : ""
        }`}
        disabled={!selectedRegion || cartItems.length === 0}
      />

      {/* New Button to Show Success Modal */}
      {/* <button
        type="button"
        onClick={() => setShowSuccessModal(true)}
        className="checkout-button"
        style={{ marginTop: "1rem" }}
      >
        Show Success Modal
      </button> */}

      {showSuccessModal && (
        <SuccessModal
          show={showSuccessModal}
          handleClose={() => setShowSuccessModal(false)}
        />
      )}
    </StoresContainer>
  );
};
