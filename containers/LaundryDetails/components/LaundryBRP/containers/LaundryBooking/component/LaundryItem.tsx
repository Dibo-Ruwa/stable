import React, { useState, useCallback } from "react";
import styles from "../LaundryBooking.module.css";
import { LaundryItemsGroup } from "./LaundryItemsGroup";
import { LaundryLocation } from "./LaundryLocation";
import { ItemsDescription } from "./ItemsDescription";
import { LaundrySchedule } from "./LaundrySchedule";
import { Button } from "@/component/shared/Button";
import { ConfirmationModal } from "./ConfirmationModal";
import useQuote from "@/hooks/useQuote";
import toast from "react-hot-toast";

type LaundryItemType = {
  name: string;
  quantity: number;
  image?: string | null;
};

type FormState = {
  type: string;
  categories: string[];
  items: LaundryItemType[];
  currentLocation: string;
  pickUpDate: string;
  pickUpTime: string;
  estimatedReturn: string; // Include estimated return
  description: string;
};

export const LaundryItem = () => {
  const { handleQuote, loading } = useQuote();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [formState, setFormState] = useState<FormState>({
    type: "laundry",
    categories: [],
    items: [],
    currentLocation: "",
    pickUpDate: "",
    pickUpTime: "",
    estimatedReturn: "", 
    description: "",
  });

  const handleOpenModal = useCallback((): void => {
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback((): void => {
    setIsModalOpen(false);
  }, []);

  const handleInputChange = useCallback((field: string, value: any) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  }, []);

  const handleConfirm = useCallback(() => {
    handleQuote(formState);
  }, [formState, handleQuote]);

  console.log("FORM STATE", formState);

  return (
    <div className={styles.LaundryBookingContainer}>
      <div className={styles.LaundryItemContainer}>
        <p className={styles.MovingItemTextQuest}>What do you want to clean?</p>

        <div className={styles.LaundryItemChoices}>
          <LaundryItemsGroup
            onItemsChange={useCallback(
              (items) => handleInputChange("items", items),
              [handleInputChange]
            )}
          />
        </div>

        <div className={styles.Moving_AddressContainer}>
          <LaundryLocation
            onChange={useCallback(
              (locationData: { currentLocation: string }) => {
                handleInputChange(
                  "currentLocation",
                  locationData.currentLocation
                );
              },
              [handleInputChange]
            )}
          />
        </div>

        <LaundrySchedule
          pickUpDate={formState.pickUpDate}
          pickUpTime={formState.pickUpTime}
          setPickUpDate={useCallback(
            (date) => handleInputChange("pickUpDate", date),
            [handleInputChange]
          )}
          setPickUpTime={useCallback(
            (time) => handleInputChange("pickUpTime", time),
            [handleInputChange]
          )}
          totalLaundryItems={formState.items.reduce(
            (total, item) => total + item.quantity,
            0
          )}
          onEstimatedReturnChange={useCallback(
            (estimatedReturn) =>
              handleInputChange("estimatedReturn", estimatedReturn),
            [handleInputChange]
          )}
        />

        <div className={styles.Laundry_ItemsDescription}>
          <ItemsDescription
            onChange={useCallback(
              (description: string) =>
                handleInputChange("description", description),
              [handleInputChange]
            )}
          />
        </div>

        <ConfirmationModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          formData={formState}
          items={formState.items}
          deliveryDetails={{
            currentLocation: formState.currentLocation,
            pickUpDate: formState.pickUpDate,
            pickUpTime: formState.pickUpTime,
            returnEstimate: formState.estimatedReturn, // Pass estimated return
          }}
          onConfirm={handleConfirm}
        />

        <Button
          text="Confirm"
          onClick={() => {
            const { items, currentLocation, pickUpDate, pickUpTime } =
              formState;

            if (
              items.length === 0 ||
              !currentLocation ||
              !pickUpDate ||
              !pickUpTime
            ) {
              toast.error(
                "Please fill in all required fields before confirming."
              );
              return;
            }
            if (items.some((item) => item.quantity <= 0)) {
              toast.error("Please select at least one quantity for each item.");
              return;
            }
            handleOpenModal();
          }}
          loading={loading}
          className={styles.LaundryDoneButton}
        />
      </div>
    </div>
  );
};
