import { usePaystackPayment } from "react-paystack";
import { toast } from "react-hot-toast";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
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
  onSuccess: () => Promise<void>;
  onClose: () => void;
  disabled: boolean;
  setShowSuccessModal: (value: boolean) => void; // Updated type
  className?: string; // New prop for custom styling
}

const PaymentButton: React.FC<PaymentButtonProps> = ({
  totalPrice,
  planCode,
  buttonText,
  openModal,
  color,
  onSuccess,
  setShowSuccessModal,
  onClose,
  referenceId,
  disabled,
  className, // New prop for custom styling
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
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
    if (isProcessing || disabled) return;

    try {
      setIsProcessing(true);
      if (!session?.user.phone || !session?.user.address || !session?.user.state || !session?.user.lga) {
        toast.error("Please complete your profile before making a payment.");
        openModal?.("info", "Please complete your profile before making a payment.");
        return;
      }

      paymentFn(
        () => {
          // onSuccess();
          onSuccess().then(() => {
            setShowSuccessModal(true); // Call setShowSuccessModal to show the success modal
          });
          setIsProcessing(false);
        },
        () => {
          onClose();
          setIsProcessing(false);
        }
      );
    } catch (error) {
      setIsProcessing(false);
      toast.error("Payment failed to initialize");
    }
  };

  return (
    <Button 
      size="small" 
      color={color} 
      onClick={handlePayment}
      disabled={isProcessing || disabled}
      className={className} // Apply custom className
    >
      {isProcessing ? "Processing..." : buttonText}
    </Button>
  );
};

export default PaymentButton;
