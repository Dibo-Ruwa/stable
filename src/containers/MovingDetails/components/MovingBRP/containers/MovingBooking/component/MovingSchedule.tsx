import React from 'react'
import styles from "../MovingBooking.module.css";
import { ScheduleTime } from './ScheduleTime';
import { ScheduleDate } from './ScheduleDate';

export const MovingSchedule = () => {
  return (
    <div className={styles.MovingScheduleContainer}>
      <p className={styles.MovingScheduleText}>Schedule</p>
          <div className={styles.MovingScheduleCards}>
              <ScheduleDate />
              <ScheduleTime />
      </div>
    </div>
  );
}
