"use client";
import React, { useState, useEffect } from "react";
import styles from "../MovingBooking.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import {
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";
import useQuote from "@/hooks/useQuote";
import { MovingItemType } from "@/utils/types/types";

type FormState = {
  categories: string[];
  items: MovingItemType[];
  currentLocation: string;
  deliveryLocation: string;
  pickUpDate: string;
  pickUpTime: string;
  description: string;
};

interface DeliveryDetails {
  currentLocation: string;
  deliveryLocation: string;
  pickUpDate: string;
  pickUpTime: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  formData: FormState;
  items: MovingItemType[];
  deliveryDetails: DeliveryDetails;
  onConfirm: (updatedFormState: FormState) => void;
}

export const ConfirmationModel: React.FC<Props> = ({
  isOpen,
  onClose,
  items,
  deliveryDetails,
  onConfirm,
  formData,
}) => {
  const [updatedFormState, setUpdatedFormState] = useState<FormState>(formData);
  const { handleQuote, loading } = useQuote();
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    setUpdatedFormState(formData);
  }, [formData]);

  const handleQuantityChange = (index: number, change: number) => {
    setUpdatedFormState((prevState) => ({
      ...prevState,
      items: prevState.items.map((item, i) =>
        i === index
          ? { ...item, quantity: Math.max(item.quantity + change, 0) }
          : item
      ),
    }));
  };

  console.log(session, "SESSION");
  const handleSubmission = async () => {
    if (!session) {
      toast.error("Please sign in to submit your request.");
      router.push("/sign-in");
      return;
    }

    try {
      await handleQuote(updatedFormState);
      console.log("Calling handleQuote with data:", updatedFormState); 
      // toast.success("Request submitted successfully, please go ahead and pay.");
      // onClose();
    } catch (error) {
      console.error("Submission failed", error);
      toast.error("Failed to submit the request.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.modalContentTextContainer}>
          <h2 className={styles.modalContentTitle}>Delivery Confirmation</h2>
          <p className={styles.modalContentCRText}>
            Please confirm your request.
          </p>
        </div>
        <hr className={styles.modalContentLine} />

        {/* Items Section */}
        <div className={styles.modalContentItems}>
          {updatedFormState.items.map((item, index) => (
            <div key={index} className={styles.modalContentItem}>
              <p className={styles.modalContentItemName}>{item.name}</p>
              <div
                className={styles.modalContentItemQuantityContainer}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                }}
              >
                <button
                  className={styles.quantityButton}
                  onClick={() => handleQuantityChange(index, -1)}
                  disabled={item.quantity <= 0}
                >
                  <AiOutlineMinus />
                </button>
                <p className={styles.modalContentItemQuantity}>
                  {item.quantity}
                </p>
                <button
                  className={styles.quantityButton}
                  onClick={() => handleQuantityChange(index, 1)}
                >
                  <AiOutlinePlus />
                </button>
              </div>
            </div>
          ))}
        </div>
        <hr className={styles.modalContentLine} />

        {/* Locations */}
        <div className={styles.modalContent_Locations}>
          <div className={styles.modalContent_CAndDLocation}>
            <p className={styles.modalContent_CAndDLocationType}>
              Current Location
            </p>
            <p className={styles.modalContent_CAndDLocationName}>
              {deliveryDetails.currentLocation}
            </p>
          </div>
          <div className={styles.modalContent_CAndDLocation}>
            <p className={styles.modalContent_CAndDLocationType}>
              Delivery Location
            </p>
            <p className={styles.modalContent_CAndDLocationName}>
              {deliveryDetails.deliveryLocation}
            </p>
          </div>
        </div>
        <hr className={styles.modalContentLine} />

        {/* Pick-up Details */}
        <div className={styles.modalContent_PickUpDT}>
          <div className={styles.modalContent_PickupDay}>
            <p className={styles.modalContent_PickupDayText}>Pick Up Day</p>
            <p className={styles.modalContent_PickupDayDate}>
              {deliveryDetails.pickUpDate}
            </p>
          </div>
          <div className={styles.modalContent_PickUPTime}>
            <p className={styles.modalContent_PickUPTimeType}>Time</p>
            <p className={styles.modalContent_PickUPTimeNum}>
              {deliveryDetails.pickUpTime}
            </p>
          </div>
        </div>
        <hr className={styles.modalContentLine} />

        {/* Actions */}
        <div className={styles.modalContent_CancelAndConfirmBtn}>
          <button onClick={onClose} className={styles.closeButton}>
            Go back
          </button>
          <button
            onClick={() => {
              handleSubmission();
            } }
            className={styles.confirmButton}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};
