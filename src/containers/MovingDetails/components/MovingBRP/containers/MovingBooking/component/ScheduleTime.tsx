import React from "react";
import styles from "../MovingBooking.module.css";
import { CiClock2 } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";

export const ScheduleTime = () => {
  return (
    <div className={styles.MovingScheduleTimeCard}>
      <div className={styles.MovingScheduleTimeFrame}>
        <CiClock2 className={styles.MovingScheduleTimeIcon} />
        <div className={styles.MovingScheduleTime}>
          <p className={styles.MovingScheduleTimeText}>Time</p>
          <p className={styles.MovingScheduleTimeNum}>12 : 00AM</p>
        </div>
      </div>
      <FaAngleDown className={styles.MovingScheduleTimeArrow} />
    </div>
  );
};
