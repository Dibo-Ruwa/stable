'use client';
import React, { useState, useEffect } from 'react';
import styles from "../MovingBooking.module.css";
import { ScheduleDate } from '@/component/ScheduleDate/ScheduleDate';
import { ScheduleTime } from '@/component/ScheduleTime/ScheduleTime';

interface MovingScheduleProps {
  onDateChange: (date: string) => void;
  onTimeChange: (time: string) => void;
}

export const CleaningSchedule: React.FC<MovingScheduleProps> = ({
  onDateChange,
  onTimeChange,
}) => {
  const [selectedDate, setSelectedDate] = useState<string>(
    localStorage.getItem("pickupDate") || new Date().toISOString().split("T")[0]
  );
  const [selectedTime, setSelectedTime] = useState<string>(
    localStorage.getItem("pickupTime") || "12:00 PM"
  );

  useEffect(() => {
    onDateChange(selectedDate);
    onTimeChange(selectedTime);
  }, [selectedDate, selectedTime, onDateChange, onTimeChange]);

  const handlePickupDateChange = (date: string) => {
    setSelectedDate(date);
    localStorage.setItem("pickupDate", date); // Save to localStorage
  };

  const handlePickupTimeChange = (time: string) => {
    setSelectedTime(time);
    localStorage.setItem("pickupTime", time); // Save to localStorage
  };

  return (
    <div className={styles.MovingScheduleContainer}>
      <p className={styles.MovingScheduleText}>Schedule</p>
      <div className={styles.MovingScheduleCards}>
        <ScheduleDate
          date={selectedDate} // Controlled date state
          label="Date"
          onDateChange={handlePickupDateChange}
        />
        <ScheduleTime
          time={selectedTime} // Controlled time state
          label="Time"
          className={styles.SelectedDays_ScheduleTimeSetOpt}
          onTimeChange={handlePickupTimeChange}
        />
      </div>
    </div>
  );
};
