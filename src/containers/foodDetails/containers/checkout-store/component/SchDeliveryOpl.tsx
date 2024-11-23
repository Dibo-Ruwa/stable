import React from "react";
import { LuCalendarDays } from "react-icons/lu";
import { BsClock } from "react-icons/bs";
import { TfiAngleDown } from "react-icons/tfi";
import styles from "../checkout-store.module.css";

export const SchDeliveryOpl = () => {
  return (
    <div className={styles.schdelivery_container}>
      <p className={styles.schdelivery_title}>Schedule Delivery (optional)</p>
      <div className={styles.schdelivery_set_date_timer}>
        <div className={styles.schdelivery_ic_da_ag}>
          <>
            <LuCalendarDays className={styles.schdelivery_icon} />
          </>
          <div className={styles.schdelivery_da_aug}>
            <p className={styles.schdelivery_da_aug_text}>Date</p>
            <p className={styles.schdelivery_da_aug_date}>17, August 2024</p>
          </div>
        </div>
        <div className={styles.schdelivery_ic_an}>
          <TfiAngleDown className={styles.schdelivery_icon} />
        </div>
      </div>
      <div className={styles.schdelivery_set_date_timer}>
        <div className={styles.schdelivery_ic_da_ag}>
          <>
            <BsClock className={styles.schdelivery_icon} />
          </>
          <div className={styles.schdelivery_da_aug}>
            <p className={styles.schdelivery_da_aug_text}>Time</p>
            <p className={styles.schdelivery_da_aug_date}>12:00 AM</p>
          </div>
        </div>
        <div className={styles.schdelivery_ic_an}>
          <TfiAngleDown className={styles.schdelivery_icon} />
        </div>
      </div>
    </div>
  );
};
