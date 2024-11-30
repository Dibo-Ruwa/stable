"use client";
import React, { useState } from "react";
import styles from "./SubscriptionRequestConfirmation.module.css";
import { Checkbox } from "@/component/Checkbox/Checkbox";
import { DeliveryAddress } from "@/component/deliveryAddress/DeliveryAddress";
import { CustomDescription } from "@/component/CustomDescription/CustomDescription";
import { Button } from "@/component/shared/Button";
import { BsExclamationCircle } from "react-icons/bs";

export const SubscriptionRequestConfirmation: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [description, setDescription] = useState<string>("");
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
      <div className={styles.RequestConfirmationContent}>
        <div className={styles.RequestConfirmationTitleDaysPicked}>
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
            <hr className={styles.RequestConfirmationLine} />
            <div className={styles.RequestConfirmationPickedDays}>
              <p className={styles.RequestConfirmationPickedDaysText}>Days</p>
              <p className={styles.RequestConfirmationDaysPicked}>
                Mon, Tue, Wed
              </p>
            </div>
            <hr className={styles.RequestConfirmationLine} />
            <div className={styles.RequestConfirmationPickedItems}>
              <div className={styles.RequestConfirmationPickedDays}>
                <p className={styles.RequestConfirmationPickedDaysText}>Time</p>
                <p className={styles.RequestConfirmationDaysPicked}>
                  9am 10am 11am
                </p>
              </div>

              <hr className={styles.RequestConfirmationLine} />
              <div className={styles.RequestConfirmationPickedDays}>
                <p className={styles.RequestConfirmationPickedDaysText}>Meal</p>
                <p className={styles.RequestConfirmationDaysPicked}>
                  Jollof Rice Beans Yam
                </p>
              </div>
              <hr className={styles.RequestConfirmationLine} />

              <div className={styles.RequestConfirmationPickedDays}>
                <p className={styles.RequestConfirmationPickedDaysText}>
                  Drink
                </p>
                <p className={styles.RequestConfirmationDaysPicked}>
                  Table Water
                </p>
              </div>
            </div>
            <hr className={styles.RequestConfirmationLine} />
          </div>
        </div>
        <div className={styles.RequestConfirmation_DeliveryLocation}>
          <DeliveryAddress
            address={address}
            onAddressChange={handleAddressUpdate}
            label="Delivery Location"
          />
        </div>
      </div>

      <CustomDescription
        label="Want to pass an info?"
        placeholder="Write..."
        value={description}
        onChange={(newDescription) => setDescription(newDescription)} // Change handler
        textareaClassName={styles.ViewModal_Textarea}
      />
      <Button
        text="Send Request"
        onClick={() => {}} // Trigger step change
        className={styles.RestaurantSubDoneButton}
      />
      <div className={styles.ViewModalSub_Weaning}>
        <BsExclamationCircle className={styles.ViewModalSub_WeaningIcon} />
        <p className={styles.ViewModalSub_WeaningText}>
          Please note that the service will begin at the start of the week once
          your request is approved.
        </p>
      </div>
    </div>
  );
};
