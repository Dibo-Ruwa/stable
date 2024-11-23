import React from 'react'
import styles from "../RequestSubscription.module.css";
import { FaAngleDown } from "react-icons/fa6";

export const RequestSubSetDay = () => {
  return (
    <div className={styles.RequestSubscription_Day}>
      <p className={styles.RequestSubscription_DayText}>Day</p>
      <button type="button" className={styles.RequestSubscription_SetDay}>
        select
        <FaAngleDown className={styles.RequestSubscription_SetDurationArrow} />
      </button>
    </div>
  );
}
