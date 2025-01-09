import { usePaystackPayment } from "react-paystack";
import { toast } from "react-hot-toast";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import Button from "../ui/button/Button";
import useOrder from "@/hooks/useOrder";

interface PaymentButtonProps {
  referenceId: string;
  totalPrice: number;
  planCode?: string;
  buttonText: string;
  subscriptionType: string;
  openModal?: (
    errorType: "success" | "error" | "info",
    errorMessage: string
  ) => void;
  onSuccess: () => void;
  onClose: () => void;
  className?: string; // Add className prop
}

const PaymentButton: React.FC<PaymentButtonProps> = ({
  totalPrice,
  planCode,
  buttonText,
  subscriptionType,
  openModal,
  onSuccess,
  onClose,
  referenceId,
  className, // Destructure className prop
}) => {
  const { data: session } = useSession();
  const { checkActiveSubscription } = useOrder();
  const [loading, setLoading] = useState(false); // Add loading state

  const getPaystackConfig = (
    referenceId: string,
    totalPrice: number,
    planCode?: string
  ) => {
    return {
      reference: referenceId,
      amount: totalPrice * 100,
      email: session ? session.user.email : "",
      custom_fields: {
        email: session ? session.user.email : "",
        phone_number: session ? session.user.phone : "",
        name: session
          ? `${session.user.firstName} ${session.user.lastName}`
          : "",
      },
      publicKey: process.env.NEXT_PUBLIC_PAYSTACK_KEY as string,
      plan: planCode ? planCode : undefined,
    };
  };

  const config = getPaystackConfig(referenceId, totalPrice, planCode);
  const paymentFn = usePaystackPayment(config);

  const handlePayment = async () => {
    setLoading(true); // Set loading to true

    // Check for active subscription before payment
    const hasActiveSubscription = await checkActiveSubscription(subscriptionType);

    if (hasActiveSubscription) {
      openModal &&
        openModal(
          "error",
          "You already have an active subscription for this service."
        );
      setLoading(false); // Reset loading state
      return;
    }

    // Proceed with payment if no active subscription is found
    if (
      session?.user.phone &&
      session?.user.address &&
      session?.user.state &&
      session?.user.lga
    ) {
      paymentFn(onSuccess, onClose);
    } else {
      openModal &&
        openModal(
          "info",
          "Please complete your profile before making payment."
        );
    }

    setLoading(false); // Reset loading state after process
  };

  return (
    <>
      <Button size="small" onClick={handlePayment} className={className}>
        {loading ? "Loading..." : buttonText}
      </Button>
    </>
  );
};

export default PaymentButton;
