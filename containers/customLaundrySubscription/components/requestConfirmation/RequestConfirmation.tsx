"use client";
import React, { useState } from "react";
import styles from "./RequestConfirmation.module.css";
import { Checkbox } from "@/component/Checkbox/Checkbox";
import { DeliveryAddress } from "@/component/deliveryAddress/DeliveryAddress";

export const RequestConfirmation: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [address, setAddress] = useState<string>(
    "456 Elm St, Another City, Country"
  );

  const handleAddressUpdate = (newAddress: string) => {
    setAddress(newAddress);
  };

  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  return (
    <div className={styles.RequestConfirmationContainer}>
      <div className={styles.RequestConfirmationContainerText}>
        <p className={styles.RequestConfirmationTextGreen}>
          Subscription Request confirmation
        </p>
        <p className={styles.RequestConfirmationTextBlack}>
          Please confirm your Request
        </p>
      </div>
      <div className={styles.RequestConfirmationPickedDaysAndItems}>
        <Checkbox
          label="Weekly"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <hr />
        <div className={styles.RequestConfirmationPickedDays}>
          <p className={styles.RequestConfirmationPickedDaysText}>Days</p>
          <p className={styles.RequestConfirmationDaysPicked}>Mon, Tue, Wed</p>
        </div>
        <hr />
        <div className={styles.RequestConfirmationPickedItems}>
          <div className={styles.RequestConfirmationPickedDays}>
            <p className={styles.RequestConfirmationPickedDaysText}>Trousers</p>
            <p className={styles.RequestConfirmationDaysPicked}>4</p>
          </div>

          <div className={styles.RequestConfirmationPickedDays}>
            <p className={styles.RequestConfirmationPickedDaysText}>Trousers</p>
            <p className={styles.RequestConfirmationDaysPicked}>4</p>
          </div>
        </div>
        <hr />
      </div>
      <DeliveryAddress
        address={address}
        onAddressChange={handleAddressUpdate}
        label="Delivery Location"
      />
    </div>
  );
};
