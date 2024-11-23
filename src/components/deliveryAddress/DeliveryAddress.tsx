import React, { useState, ReactNode } from "react";
import styles from "./DeliveryAddress.module.css";
import { CiEdit } from "react-icons/ci"; // Default icon

interface DeliveryAddressProps {
  address: string;
  onAddressChange: (newAddress: string) => void;
  label?: string;
  editButtonText?: string; // To customize edit button text
  saveButtonText?: string; // To customize save button text
  customIcon?: ReactNode; // To allow custom icons
  className?: string; // Dynamic className for the main container
  editButtonClassName?: string; // Dynamic className for edit button
  textAreaClassName?: string; // Dynamic className for textarea
  displayTextClassName?: string; // Dynamic className for displaying the address
}

export const DeliveryAddress: React.FC<DeliveryAddressProps> = ({
  address,
  onAddressChange,
  label = "Delivery Location",
  editButtonText = "Edit", // Default button text
  saveButtonText = "Save", // Default save text
  customIcon = <CiEdit />, // Default icon
  className, // Dynamic className for main container
  editButtonClassName, // Dynamic className for edit button
  textAreaClassName, // Dynamic className for textarea
  displayTextClassName, // Dynamic className for display text
}) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleAddressChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    onAddressChange(event.target.value);
  };

  const toggleEdit = (): void => {
    setIsEditing((prev) => !prev);
  };

  return (
    <div
      className={`${styles.RequestConfirmation_DeliveryAddressContainer} ${
        className ?? ""
      }`}
    >
      <div className={styles.RequestConfirmation_DeliveryAddressTxTEdit}>
        <p className={styles.RequestConfirmation_DeliveryAddressTxT}>{label}</p>
        <div
          className={`${styles.RequestConfirmation_DeliveryAddressEdit} ${
            editButtonClassName ?? ""
          }`}
          onClick={toggleEdit}
        >
          {customIcon}
          <p className={styles.RequestConfirmation_DeliveryAddressEditText}>
            {isEditing ? saveButtonText : editButtonText}
          </p>
        </div>
      </div>
      <div className={styles.RequestConfirmation_DeliveryAddress}>
        <label htmlFor="address">Address</label>
        {isEditing ? (
          <textarea
            id="address"
            name="Address"
            className={`${styles.RequestConfirmation_DeliveryAddressTxTArea} ${
              textAreaClassName ?? ""
            }`}
            value={address}
            onChange={handleAddressChange}
            cols={30}
            rows={6}
          ></textarea>
        ) : (
          <p
            className={`${
              styles.RequestConfirmation_DeliveryAddressTxTDisplay
            } ${displayTextClassName ?? ""}`}
          >
            {address}
          </p>
        )}
      </div>
    </div>
  );
};
