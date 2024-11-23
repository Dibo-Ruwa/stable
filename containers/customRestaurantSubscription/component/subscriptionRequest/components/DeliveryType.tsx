"use client";
import React, { useState } from "react";
import styles from "../subscriptionRequest.module.css";
import { Checkbox } from "@/component/Checkbox/Checkbox";

export const DeliveryType = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handlePickUpChange = () => {
    setSelectedOption(selectedOption === "pickup" ? null : "pickup");
  };

  const handleDeliveryChange = () => {
    setSelectedOption(selectedOption === "delivery" ? null : "delivery");
  };

  return (
    <div className={styles.DeliveryType}>
      <p className={styles.DeliveryType_Title}>
        How do you want the order to be delivered to you?
      </p>
      <div className={styles.DeliveryType_ChooseType}>
        <Checkbox
          label="Pick Up"
          checked={selectedOption === "pickup"}
          onChange={handlePickUpChange}
          labelClassName="CheckBox_Label"
        />
        <Checkbox
          label="Delivery"
          checked={selectedOption === "delivery"}
          onChange={handleDeliveryChange}
          labelClassName="CheckBox_Label"
        />
      </div>
    </div>
  );
};
