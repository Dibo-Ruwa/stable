import React from "react";
import styles from "../LaundryBooking.module.css";
import { ScheduleDate } from "@/component/ScheduleDate/ScheduleDate";
import { ScheduleTime } from "@/component/ScheduleTime/ScheduleTime";

interface LaundryScheduleProps {
  schedule: {
    pickupDate: string;
    pickupTime: string;
    deliveryDate: string;
    deliveryTime: string;
  };
  setSchedule: (newSchedule: {
    pickupDate: string;
    pickupTime: string;
    deliveryDate: string;
    deliveryTime: string;
  }) => void;
}

export const LaundrySchedule: React.FC<LaundryScheduleProps> = ({
  schedule,
  setSchedule,
}) => {
  const handlePickupDateChange = (date: string) => {
    setSchedule({
      ...schedule,
      pickupDate: date,
    });
    localStorage.setItem("pickupDate", date);
    console.log("Updated pickup date:", date); // Log updated pickup date
  };

  const handlePickupTimeChange = (time: string) => {
    setSchedule({
      ...schedule,
      pickupTime: time,
    });
    localStorage.setItem("pickupTime", time);
    console.log("Updated pickup time:", time); // Log updated pickup time
  };

  const handleDeliveryDateChange = (date: string) => {
    setSchedule({
      ...schedule,
      deliveryDate: date,
    });
    localStorage.setItem("deliveryDate", date);
    console.log("Updated delivery date:", date); // Log updated delivery date
  };

  const handleDeliveryTimeChange = (time: string) => {
    setSchedule({
      ...schedule,
      deliveryTime: time,
    });
    localStorage.setItem("deliveryTime", time);
    console.log("Updated delivery time:", time); // Log updated delivery time
  };

  return (
    <div className={styles.LaundryScheduleContainer}>
      <div className={styles.LaundryScheduleWrapper}>
        <p className={styles.LaundryScheduleText}>Pick up Day</p>
        <div className={styles.LaundryScheduleCards}>
          <ScheduleDate
            label="Date"
            date={schedule.pickupDate}
            onDateChange={handlePickupDateChange}
            className={styles.DateContain}
            InputClassName={styles.InputStyle}
          />
          <ScheduleTime
            time={schedule.pickupTime}
            label="Time"
            className={styles.SelectedDays_ScheduleTimeSetOpt}
            onTimeChange={handlePickupTimeChange}
          />
        </div>
      </div>

      <div className={styles.LaundryScheduleWrapper}>
        <p className={styles.LaundryScheduleText}>Return Day</p>
        <div className={styles.LaundryScheduleCards}>
          <ScheduleDate
            label="Date"
            date={schedule.deliveryDate}
            onDateChange={handleDeliveryDateChange}
            className={styles.DateContain}
            InputClassName={styles.InputStyle}
          />
          <ScheduleTime
            time={schedule.deliveryTime}
            label="Time"
            className={styles.SelectedDays_ScheduleTimeSetOpt}
            onTimeChange={handleDeliveryTimeChange}
          />
        </div>
      </div>
    </div>
  );
};