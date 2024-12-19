import React, { useState } from "react";
import styles from "../LaundryBooking.module.css";
import { ScheduleDate } from "@/component/ScheduleDate/ScheduleDate";
import { ScheduleTime } from "@/component/ScheduleTime/ScheduleTime";

export const LaundrySchedule = () => {
  const [pickupDate, setPickupDate] = useState<string>("17, August, 2024");
  const [deliveryDate, setDeliveryDate] = useState<string>("18, August, 2024");
  const [pickupTime, setPickupTime] = useState<string>("8:00 AM");
  const [deliveryTime, setDeliveryTime] = useState<string>("1:00 PM");

  const formatDate = (date: Date) =>
    date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

  const handlePickupDateChange = (startDate: Date, endDate: Date) => {
    setPickupDate(formatDate(startDate));
    setDeliveryDate(formatDate(endDate)); // Automatically set delivery date as endDate
  };

  return (
    <div className={styles.LaundryScheduleContainer}>
      <div className={styles.LaundryScheduleWrapper}>
        <p className={styles.LaundryScheduleText}>Pick up Day</p>
        <div className={styles.LaundryScheduleCards}>
          <ScheduleDate
            date={pickupDate}
            label="Date"
            onDateChange={handlePickupDateChange}
          />
          <ScheduleTime
            time={pickupTime} // Use the state for pickup time
            label="Time"
            className={styles.SelectedDays_ScheduleTimeSetOpt}
            onTimeChange={setPickupTime} // Update Monday's time
          />
        </div>
      </div>
      <div className={styles.LaundryScheduleWrapper}>
        <p className={styles.LaundryScheduleText}>Return day</p>
        <div className={styles.LaundryScheduleCards}>
          <ScheduleDate
            date={deliveryDate}
            label="Date"
            onDateChange={handlePickupDateChange}
          />
          <ScheduleTime
            time={deliveryTime} // Use the state for delivery time
            label="Time"
            className={styles.SelectedDays_ScheduleTimeSetOpt}
            onTimeChange={setDeliveryTime} // Update Monday's time
          />
        </div>
      </div>
    </div>
  );
};
