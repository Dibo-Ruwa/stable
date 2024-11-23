import React from 'react'
import styles from "../MovingBooking.module.css";
import { CiCalendar } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
export const ScheduleDate = () => {
  return (
    <div className={styles.MovingScheduleDateCard}>
      <div className={styles.MovingScheduleDateFrame}>
        <CiCalendar className={styles.MovingScheduleDateIcon} />
        <div className={styles.MovingScheduleDate}>
          <p className={styles.MovingScheduleDateText}>Date</p>
          <p className={styles.MovingScheduleDateNum}>17, August, 2024</p>
        </div>
      </div>
      <FaAngleDown className={styles.MovingScheduleDateArrow} />
    </div>
  );
}
