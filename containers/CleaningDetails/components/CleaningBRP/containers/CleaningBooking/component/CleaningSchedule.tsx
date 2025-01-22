'use client'

import React, { useEffect, useState } from "react";
import styles from "../CleaningBooking.module.css";
import { ScheduleDate } from '@/component/ScheduleDate/ScheduleDate';
import { ScheduleTime } from '@/component/ScheduleTime/ScheduleTime';

export const CleaningSchedule = () => {
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
    localStorage.setItem("pickupDate", date);
  };

  const handleDeliveryDateChange = (date: string) => {
    setDeliveryDate(date);
    localStorage.setItem("deliveryDate", date);
  };

  return (
    <div className={styles.LaundryScheduleContainer}>
      <div className={styles.LaundryScheduleWrapper}>
        <p className={styles.LaundryScheduleText}>Pick up Day</p>
        <div className={styles.LaundryScheduleCards}>
        <ScheduleDate
            label="Date"
            date={deliveryDate}
            onDateChange={handleDeliveryDateChange}
          />
          <ScheduleTime
            time={deliveryTime}
            label="Time"
            className={styles.SelectedDays_ScheduleTimeSetOpt}
            onTimeChange={setDeliveryTime}
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
          />
          <ScheduleTime
            time={deliveryTime} 
            label="Time"
            className={styles.SelectedDays_ScheduleTimeSetOpt}
            onTimeChange={setDeliveryTime}
          />
        </div>
      </div>
    </div>
  );
};