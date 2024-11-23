"use client";
import useOrder from "@/hooks/useOrder";
import { Subscription } from "@/utils/types/types";
import { useSession } from "next-auth/react";
import React from "react";
import { VscClose } from "react-icons/vsc";
import styled from "styled-components";
import { PayButton } from "../Payment/payment.styles";
import { usePaystackPayment } from "react-paystack";
import { v4 as uuidv4 } from "uuid";
import { Card } from "./subscriptionCardCart.styles";
import { toast } from "react-hot-toast";
import { nanoid } from "nanoid";
import PaymentButton from "../paymentButton/PayButton";

interface CartSubscriptionProps {
  subscription: Subscription;
  onDelete?: () => void;
  modal: (
    errorType: "success" | "error" | "info",
    errorMessage: string
  ) => void;
}

const CartSubscription: React.FC<CartSubscriptionProps> = ({
  subscription,
  onDelete,
  modal,
}) => {
  const { data: session } = useSession();
  const { isSubmitting, isError, isSuccess, handleSubscriptionOrderSubmit } =
    useOrder();
  const { type, plan } = subscription;

  const referenceId = nanoid(8);

  const onSuccess = () => {
    handleSubscriptionOrderSubmit(referenceId, { subscription }, "one_off");
  };

  const onClose = () => {
    console.log("closed");
  };

  return (
    <Card>
      <h3>{type}</h3>
      {typeof plan === "string" ? (
        <>
          <p>{plan}</p>
          <p>
            Total: <span>₦{subscription.total}</span>
          </p>
        </>
      ) : (
        <>
          <p>
            Bag Count: <span>{plan.bagCount}</span>
          </p>
          <p>
            Regularity: <span> {plan.regularity}</span>
          </p>
          <p>
            Total: <span>₦{subscription.total}</span>
          </p>
        </>
      )}
      <PaymentButton
        totalPrice={subscription.total}
        openModal={modal}
        buttonText="Pay Now"
        color="color2"
        onSuccess={onSuccess}
        onClose={onClose}
        referenceId={referenceId}
      />
      <button className="delBtn" onClick={onDelete}>
        <VscClose />
      </button>
    </Card>
  );
};

export default CartSubscription;
