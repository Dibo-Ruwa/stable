"use client";
import React, { useState } from "react";
import styles from "../MovingBooking.module.css";

interface Item {
  name: string;
  quantity: number;
}

interface DeliveryDetails {
  currentLocation: string;
  deliveryLocation: string;
  pickUpDate: string;
  pickUpTime: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  items: Item[];
  deliveryDetails: DeliveryDetails;
  onConfirm: (updatedItems: Item[]) => void; // Callback for the confirm action
}

export const ConfirmationModel: React.FC<Props> = ({
  isOpen,
  onClose,
  items,
  deliveryDetails,
  onConfirm,
}) => {
  // Local state to manage quantities of items
  const [updatedItems, setUpdatedItems] = useState<Item[]>(items);

  // Handler to adjust the quantity of items
  const handleQuantityChange = (index: number, change: number) => {
    setUpdatedItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, quantity: item.quantity + change } : item
      )
    );
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.modalContentTextContainer}>
          <h2 className={styles.modalContentTitle}>Delivery confirmation</h2>
          <p className={styles.modalContentCRText}>
            Please confirm your Request
          </p>
        </div>
        <hr className={styles.modalContentLine} />

        {/* Map through items to display dynamically with adjustable quantities */}
        <div className={styles.modalContentItems}>
          {updatedItems.map((item, index) => (
            <div key={index} className={styles.modalContentItem}>
              <p className={styles.modalContentItemName}>{item.name}</p>
              <div className={styles.modalContentItemQuantityContainer}>
                <button
                  className={styles.quantityButton}
                  onClick={() => handleQuantityChange(index, -1)}
                  disabled={item.quantity <= 0}
                >
                  -
                </button>
                <p className={styles.modalContentItemQuantity}>
                  {item.quantity}
                </p>
                <button
                  className={styles.quantityButton}
                  onClick={() => handleQuantityChange(index, 1)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        <hr className={styles.modalContentLine} />

        {/* Dynamic locations */}
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

        {/* Dynamic pick-up details */}
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

        {/* Cancel and Confirm buttons */}
        <div className={styles.modalContent_CancelAndConfirmBtn}>
          <button onClick={onClose} className={styles.closeButton}>
            Cancel
          </button>
          <button
            onClick={() => {
              onConfirm(updatedItems);
              onClose();
            }}
            className={styles.confirmButton}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};
