import { usePaystackPayment } from "react-paystack";
import { toast } from "react-hot-toast";
import { useSession } from "next-auth/react";

import React from "react";
import useAuth from "@/hooks/useAuth";
import Button from "../ui/button/Button";
import useOrder from "@/hooks/useOrder";

interface PaymentButtonProps {
  referenceId: string;
  color: string;
  totalPrice: number;
  planCode?: string;
  buttonText: string; // New prop for button text
  openModal?: (
    errorType: "success" | "error" | "info",
    errorMessage: string
  ) => void;
  onSuccess: () => void;
  onClose: () => void;
}

// const publicKey = 'pk_test_14121288702e553e78036414c7df4b89ad7a720f';

const PaymentButton: React.FC<PaymentButtonProps> = ({
  totalPrice,
  planCode,
  buttonText,
  openModal,
  color,
  onSuccess,
  onClose,
  referenceId,
}) => {
  const { data: session } = useSession();

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
  const handlePayment = () => {
    if (
      session?.user.phone &&
      session?.user.address &&
      session?.user.state &&
      session?.user.lga
    ) {
      paymentFn(onSuccess, onClose);
    } else {
      toast.error("Please complete your profile before making a payment.");
      openModal &&
        openModal(
          "info",
          "Please complete your profile before making a payment."
        );
    }
  };

  return (
    <Button size="small"  color={color} onClick={handlePayment}>
      {buttonText}
    </Button>
  );
};

export default PaymentButton;
