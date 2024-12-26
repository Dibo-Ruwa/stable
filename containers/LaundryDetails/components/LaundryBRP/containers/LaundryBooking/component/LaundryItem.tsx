import React, { useState } from "react";

import styles from "../LaundryBooking.module.css";
import { LaundryItemsGroup } from "./LaundryItemsGroup";
import { AddProperty } from "./AddProperty";
import { ItemsDescription } from "./ItemsDescription";
import { LaundrySchedule } from "./LaundrySchedule";
import { Button } from "@/component/shared/Button";
import { AiOutlinePlus } from "react-icons/ai";
export const LaundryItem = () => {
  // State to manage the visibility of the LaundryPropertyContainer
  const [isAddPropertyVisible, setAddPropertyVisible] = useState(false);

  // Toggle visibility when the button is clicked
  const handleToggleAddProperty = () => {
    setAddPropertyVisible((prev) => !prev);
  };
  return (
    <div className={styles.LaundryBookingContainer}>
      <div className={styles.LaundryItemContainer}>
        <div className={styles.LaundryItemChoices}>
          <LaundryItemsGroup />
        </div>
        <div className={styles.LaundryAddCustomContainer}>
          <p className={styles.LaundryAddCustomContainerText}>
            Can’t find your clothing type?
          </p>
          <button
            type="button"
            className={styles.AddCustom}
            onClick={handleToggleAddProperty}
          >
            <AiOutlinePlus className={styles.AddCustom_AddMoreIcon} />
            <p className={styles.AddCustom_Text}>Add Custom</p>
          </button>
        </div>

        {isAddPropertyVisible && (
          <div className={styles.LaundryPropertyContainer}>
            <AddProperty />
          </div>
        )}
        
        <LaundrySchedule />
        <div className={styles.Laundry_ItemsDescription}>
          <ItemsDescription />
        </div>
        <Button
          text="Send"
          onClick={() => {}}
          className={styles.LaundryDoneButton}
        />
      </div>
    </div>
  );
};
