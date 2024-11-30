import React from "react";

import styles from "../LaundryBooking.module.css";
import { LaundryItemsGroup } from "./LaundryItemsGroup";
import { AddProperty } from "./AddProperty";
// import { LaundryBookingAddress } from "./LaundryBookingAddress";
import { ItemsDescription } from "./ItemsDescription";
import { LaundrySchedule } from "./LaundrySchedule";
import { Button } from "@/component/shared/Button";
export const LaundryItem = () => {
  return (
    <div className={styles.LaundryBookingContainer}>
      <div className={styles.LaundryItemContainer}>

        <div className={styles.LaundryItemChoices}>
          <LaundryItemsGroup />
        </div>
        <div className={styles.LaundryPropertyContainer}>
          <AddProperty />
        </div>
        {/* <div className={styles.Laundry_AddressContainer}>
          <LaundryBookingAddress />
        </div> */}
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
