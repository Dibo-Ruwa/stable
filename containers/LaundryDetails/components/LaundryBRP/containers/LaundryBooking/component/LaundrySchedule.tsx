import React, { useEffect, useState } from "react";
import styles from "../LaundryBooking.module.css";
import { ScheduleDate } from "@/component/ScheduleDate/ScheduleDate";
import { ScheduleTime } from "@/component/ScheduleTime/ScheduleTime";

export const LaundrySchedule = () => {
  const [pickupDate, setPickupDate] = useState<string>("");
  const [deliveryDate, setDeliveryDate] = useState<string>("");
  //  const [selectedDate, setSelectedDate] = useState("");
  const [pickupTime, setPickupTime] = useState<string>("8:00 AM");
  const [deliveryTime, setDeliveryTime] = useState<string>("1:00 PM");

  useEffect(() => {
    const savedPickupDate = localStorage.getItem("pickupDate");
    const savedDeliveryDate = localStorage.getItem("deliveryDate");

    if (savedPickupDate) setPickupDate(savedPickupDate);
    if (savedDeliveryDate) setDeliveryDate(savedDeliveryDate);
  }, []);

  // Update localStorage when dates change
  const handlePickupDateChange = (date: string) => {
    setPickupDate(date);
    localStorage.setItem("pickupDate", date); // Save to localStorage
  };

  const handleDeliveryDateChange = (date: string) => {
    setDeliveryDate(date);
    localStorage.setItem("deliveryDate", date); // Save to localStorage
  };

  return (
    <div className={styles.LaundryScheduleContainer}>
      <div className={styles.LaundryScheduleWrapper}>
        <p className={styles.LaundryScheduleText}>Pick up Day</p>
        <div className={styles.LaundryScheduleCards}>
          <ScheduleDate
            label="Date"
            date={pickupDate}
            onDateChange={handlePickupDateChange}
            className={styles.DateContain}
            InputClassName={styles.InputStyle}
          />

          <ScheduleTime
            time={pickupTime} // Use the state for pickup time
            label="Time"
            className={styles.SelectedDays_ScheduleTimeSetOpt}
            onTimeChange={setPickupTime}
          />
        </div>
      </div>
      <div className={styles.LaundryScheduleWrapper}>
        <p className={styles.LaundryScheduleText}>Return day</p>
        <div className={styles.LaundryScheduleCards}>
          <ScheduleDate
            label="Date"
            date={deliveryDate}
            onDateChange={handleDeliveryDateChange}
            className={styles.DateContain}
            InputClassName={styles.InputStyle}
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
