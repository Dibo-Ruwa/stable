import React from 'react'
import styles from "../LaundryBooking.module.css";
import { ScheduleTime } from '../../../../../../../component/ScheduleTime/ScheduleTime';
import { ScheduleDate } from '../../../../../../../component/ScheduleDate/ScheduleDate';

export const LaundrySchedule = () => {
  return (
    <div className={styles.LaundryScheduleContainer}>
      <div className={styles.LaundryScheduleWrapper}>
        <p className={styles.LaundryScheduleText}>Pick up Day</p>
        <div className={styles.LaundryScheduleCards}>
          <ScheduleDate date="17, August, 2024" label="Date" />
          <ScheduleTime time="12:00 AM" label="Time" />
        </div>
      </div>
      <div className={styles.LaundryScheduleWrapper}>
        <p className={styles.LaundryScheduleText}>Return day</p>
        <div className={styles.LaundryScheduleCards}>
          <ScheduleDate date="18, August, 2024" label="Date" />
          <ScheduleTime time="03:00 PM" label="Time" />
        </div>
      </div>
    </div>
  );
};