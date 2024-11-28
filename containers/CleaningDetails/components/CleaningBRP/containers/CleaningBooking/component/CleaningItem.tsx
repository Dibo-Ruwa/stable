import React from "react";

import styles from "../CleaningBooking.module.css";
import { CleaningItemsGroup } from "./CleaningItemsGroup";
import { AddProperty } from "./AddProperty";
// import { LaundryBookingAddress } from "./LaundryBookingAddress";
import { ItemsDescription } from "./ItemsDescription";
import { CleaningSchedule } from "./CleaningSchedule";
import { Button } from "@/component/shared/Button";
export const CleaningItem = () => {
  return (
    <div className={styles.LaundryBookingContainer}>
      <div className={styles.LaundryItemContainer}>

        <div className={styles.LaundryItemChoices}>
          <CleaningItemsGroup />
        </div>
        <div className={styles.LaundryPropertyContainer}>
          <AddProperty />
        </div>
        {/* <div className={styles.Laundry_AddressContainer}>
          <LaundryBookingAddress />
        </div> */}
        <CleaningSchedule />
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
