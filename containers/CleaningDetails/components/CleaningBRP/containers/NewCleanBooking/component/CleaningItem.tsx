"use client";
import React, { useCallback, useEffect, useState } from "react";
import styles from "../MovingBooking.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { CheckboxGroup } from "./CheckboxGroup";
import { AddItem } from "./AddItems";
import { CleaningLocation } from "./CleaningLocation";
import { ItemsDescription } from "./ItemsDescription";
import { CleaningSchedule } from "./CleaningSchedule";
import { Button } from "@/component/shared/Button";
import { ConfirmationModel } from "./ConfirmationModel";
import useQuote from "@/hooks/useQuote";
import { CleaningItemType } from "@/utils/types/types";
import NotificationModal from "@/component/NotificationModal"; 
import toast from "react-hot-toast";

type FormState = {
  type: string; // Type of booking
  categories: string[]; // List of selected categories
  items: CleaningItemType[]; // List of added items with details
  currentLocation: string;
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

export const CleaningItem = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { handleQuote, getQuotes, loading, showModal, modalErrorType, modalMessage, closeModal, } = useQuote();

  const { data: session } = useSession();
  const router = useRouter();

  const [formState, setFormState] = useState({
    type: "cleaning",
    categories: [] as string[],
    items: [] as CleaningItemType[],
    currentLocation: "",
    pickUpDate: "",
    pickUpTime: "",
    description: "",
  });

  console.log(formState, "Cleaning Form");

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
    handleQuote(formState);
  }, [formState, handleQuote]);

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

  const handleConfirm = (confirmedItems: CleaningItemType[]) => {
    // Update the state with the confirmed items
    setFormState((prevState) => ({
      ...prevState,
      items: confirmedItems,
    }));
  };

  return (
    <>   
    <div className={styles.MovingBookingContainer}>
      <div className={styles.MovingItemContainer}>
        <p className={styles.MovingItemTextQuest}>
          What do you want to clean? Please let your description be specific as possible. The more specific, the better.
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
              (items: CleaningItemType[]) => handleInputChange("items", items),
              [handleInputChange]
            )}
          />
        </div>

        {/* Address Section */}
        <div className={styles.Moving_AddressContainer}>
          <CleaningLocation
            onChange={useCallback(
              (locationData: { currentLocation: string }) => {
                handleInputChange("currentLocation", locationData.currentLocation);
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
        <CleaningSchedule
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
              !formState.pickUpDate ||
              !formState.pickUpTime
            ) {
              toast.error("Please fill in all required fields before confirming.");
              return;
            } else if(
              formState.items.some((item) => item.quantity <= 0)
            ){
              toast.error("Please select atleast one quantity for each item.");
              return;
            }
            handleOpenModal();
          }}
          className={styles.MovingDoneButton}
        />
      </div>

    </div>
   
    </>
  );
};
