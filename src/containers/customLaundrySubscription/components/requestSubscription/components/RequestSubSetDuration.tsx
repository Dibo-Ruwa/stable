import React from 'react'

import styles from "../RequestSubscription.module.css";
import { FaAngleDown } from "react-icons/fa6";
export const RequestSubSetDuration = () => {
  return (
    <div className={styles.RequestSubscription_Duration}>
      <p className={styles.RequestSubscription_DurationText}>Duration</p>
      <button type="button" className={styles.RequestSubscription_SetDuration}>
        select
        <FaAngleDown className={styles.RequestSubscription_SetDurationArrow} />
      </button>
    </div>
  );
}
