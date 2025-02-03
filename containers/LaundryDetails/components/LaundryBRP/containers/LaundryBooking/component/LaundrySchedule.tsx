import React, { useEffect, useState } from "react";
import styles from "../LaundryBooking.module.css";
import { ScheduleDate } from "@/component/ScheduleDate/ScheduleDate";
import { ScheduleTime } from "@/component/ScheduleTime/ScheduleTime";

interface LaundryScheduleProps {
  pickUpDate: string;
  pickUpTime: string;
  setPickUpDate: (date: string) => void;
  setPickUpTime: (time: string) => void;
  totalLaundryItems: number; // New prop to calculate delivery date
  onEstimatedReturnChange: (estimatedReturn: string) => void; // New prop
}

export const LaundrySchedule: React.FC<LaundryScheduleProps> = ({
  pickUpDate,
  pickUpTime,
  setPickUpDate,
  setPickUpTime,
  totalLaundryItems,
  onEstimatedReturnChange,
}) => {
  const [estimatedReturn, setEstimatedReturn] = useState<string>("");

  // Calculate the estimated return date based on total items
  useEffect(() => {
    if (pickUpDate) {
      const pickupDate = new Date(pickUpDate);

      // Determine if it's more than 10 items
      const additionalDays = totalLaundryItems >= 10 ? 7 : 3;

      const returnDate = new Date(pickupDate);
      returnDate.setDate(pickupDate.getDate() + additionalDays);

      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        day: "numeric",
        month: "long",
      };
      const formattedReturnDate = `${returnDate.toLocaleDateString(
        undefined,
        options
      )}, 5:00 PM`;

      setEstimatedReturn(formattedReturnDate);
      onEstimatedReturnChange(formattedReturnDate);
    }
  }, [pickUpDate, totalLaundryItems, onEstimatedReturnChange]);

  const handlePickupDateChange = (date: string) => {
    setPickUpDate(date);
    localStorage.setItem("pickupDate", date);
  };

  const handlePickupTimeChange = (time: string) => {
    setPickUpTime(time);
    localStorage.setItem("pickupTime", time);
  };

  return (
    <div className={styles.LaundryScheduleContainer}>
      <div className={styles.LaundryScheduleWrapper}>
        <p className={styles.LaundryScheduleText}>Pick Up Date</p>
        <div className={styles.LaundryScheduleCards}>
          <ScheduleDate
            label="Date"
            date={pickUpDate}
            onDateChange={handlePickupDateChange}
            className={styles.DateContain}
            InputClassName={styles.InputStyle}
          />
          <ScheduleTime
            time={pickUpTime}
            label="Time"
            className={styles.SelectedDays_ScheduleTimeSetOpt}
            onTimeChange={handlePickupTimeChange}
          />
        </div>
        {pickUpDate && (
          <p>Estimated return: <span className={styles.EstimatedReturnText}>  {estimatedReturn} </span></p>
        )}
      </div>
    </div>
  );
};
