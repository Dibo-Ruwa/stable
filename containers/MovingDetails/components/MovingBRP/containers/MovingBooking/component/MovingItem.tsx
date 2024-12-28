"use client";
import React, { useCallback, useEffect, useState } from "react";
import styles from "../MovingBooking.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { CheckboxGroup } from "./CheckboxGroup";
import { AddItem } from "./AddItems";
import { MovingBookingLocation } from "./MovingDeliveryLocation";
import { ItemsDescription } from "./ItemsDescription";
import { MovingSchedule } from "./MovingSchedule";
import { Button } from "@/component/shared/Button";
import { ConfirmationModel } from "./ConfirmationModel";
import useQuote from "@/hooks/useQuote";
import { MovingItemType } from "@/utils/types/types";

type FormState = {
  type: string; // Type of booking
  categories: string[]; // List of selected categories
  items: MovingItemType[]; // List of added items with details
  currentLocation: string;
  deliveryLocation: string;
  pickUpDate: string;
  pickUpTime: string;
  description: string;
};

interface Item {
  id: number;
  name: string;
  quantity: number; // Unified to use 'quantity'
  image: string | null;
}

export const MovingItem = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { handleQuote, showModal, modalErrorType, modalMessage } = useQuote();
  const { data: session } = useSession();
  const router = useRouter();

  const [formState, setFormState] = useState({
    type: "moving",
    categories: [] as string[], // Selected categories
    items: [] as MovingItemType[], // Items array
    currentLocation: "",
    deliveryLocation: "",
    pickUpDate: "",
    pickUpTime: "",
    description: "",
  });

  const handleOpenModal = useCallback((): void => {
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback((): void => {
    setIsModalOpen(false);
  }, []);

  const handleInputChange = useCallback((field: string, value: any) => {
    setFormState((prevState) => {
      if (prevState[field as keyof typeof prevState] !== value) {
        return {
          ...prevState,
          [field]: value,
        };
      }
      return prevState;
    });
  }, []);

  const handleSubmit = useCallback(() => {
    console.log("Form Data:", formState);
    // Call the API with the formState
  }, [formState]);

  console.log("Form State:", formState);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const handleConfirm = (confirmedItems: MovingItemType[]) => {
    // Update the state with the confirmed items
    setFormState((prevState) => ({
      ...prevState,
      items: confirmedItems,
    }));
  };

  return (
    <div className={styles.MovingBookingContainer}>
      <div className={styles.MovingItemContainer}>
        <p className={styles.MovingItemTextQuest}>
          What do you want to move or deliver?
        </p>

        {/* Checkbox Group */}
        <div className={styles.MovingItemChoices}>
          <CheckboxGroup
            onChange={useCallback(
              (categories: string[]) =>
                handleInputChange("categories", categories),
              [handleInputChange]
            )}
          />
        </div>

        {/* Add Item */}
        <div className={styles.MovingPropertyContainer}>
          <AddItem
            onItemsChange={useCallback(
              (items: MovingItemType[]) => handleInputChange("items", items),
              [handleInputChange]
            )}
          />
        </div>

        {/* Address Section */}
        <div className={styles.Moving_AddressContainer}>
          <MovingBookingLocation
            onChange={useCallback(
              (locationData: {
                currentLocation: string;
                deliveryLocation: string;
              }) => {
                handleInputChange(
                  "currentLocation",
                  locationData.currentLocation
                );
                handleInputChange(
                  "deliveryLocation",
                  locationData.deliveryLocation
                );
              },
              [handleInputChange]
            )}
          />
        </div>

        {/* Items Description */}
        <div className={styles.Moving_ItemsDescription}>
          <ItemsDescription
            onChange={useCallback(
              (description: string) =>
                handleInputChange("description", description),
              [handleInputChange]
            )}
          />
        </div>

        {/* Schedule */}
        <MovingSchedule
          onDateChange={useCallback(
            (date: string) => handleInputChange("pickUpDate", date),
            [handleInputChange]
          )}
          onTimeChange={useCallback(
            (time: string) => handleInputChange("pickUpTime", time),
            [handleInputChange]
          )}
        />

        {/* Confirmation Modal */}
        <ConfirmationModel
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          formData={formState}
          items={formState.items}
          deliveryDetails={{
            currentLocation: formState.currentLocation,
            deliveryLocation: formState.deliveryLocation,
            pickUpDate: formState.pickUpDate,
            pickUpTime: formState.pickUpTime,
          }}
          onConfirm={(updatedFormState) =>
            setFormState((prevState) => ({ ...prevState, ...updatedFormState }))
          }
        />

        {/* Submit Button */}
        <Button
          text="Done"
          onClick={() => {
            if (
              formState.categories.length === 0 ||
              formState.items.length === 0 ||
              !formState.currentLocation ||
              !formState.deliveryLocation ||
              !formState.pickUpDate ||
              !formState.pickUpTime
            ) {
              alert("Please fill in all required fields before confirming.");
              return;
            }
            handleOpenModal();
          }}
          className={styles.MovingDoneButton}
        />
      </div>
    </div>
  );
};
