"use client";
import React, { useState, useEffect } from "react";
import styles from "./ScheduleTime.module.css";

interface TimePickerProps {
  onTimeChange: (newTime: string) => void;
}

export const TimePicker: React.FC<TimePickerProps> = ({ onTimeChange }) => {
  const times = [
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ];

  const [selectedTime, setSelectedTime] = useState<string>("8:00 AM");

  useEffect(() => {
    onTimeChange(selectedTime); // Call the onTimeChange prop whenever selectedTime changes
  }, [selectedTime, onTimeChange]);

  const isAM = selectedTime.includes("AM");
  const selectedBaseTime = selectedTime.replace(" AM", "").replace(" PM", "");

  const isAMAvailable = times.includes(`${selectedBaseTime} AM`);
  const isPMAvailable = times.includes(`${selectedBaseTime} PM`);

  const toggleAmPm = () => {
    if (isAM && isPMAvailable) {
      setSelectedTime(`${selectedBaseTime} PM`);
    } else if (!isAM && isAMAvailable) {
      setSelectedTime(`${selectedBaseTime} AM`);
    }
  };

  const handleTimeSelection = (time: string) => {
    setSelectedTime(time);
  };

  return (
    <div className={styles.TimePicker_Container}>
      {/* Display Section */}
      <div className={styles.TimePicker_Display}>
        <p className={styles.TimePicker_TimeText}>{selectedTime}</p>
        <div className={styles.TimePicker_AmPm_Picker}>
          <div
            className={`${styles.TimePicker_AmPm} ${
              isAM ? styles.Active_AmPm : ""
            } ${!isAMAvailable ? styles.Disabled_AmPm : ""}`}
            onClick={isAMAvailable ? toggleAmPm : undefined}
          >
            AM
          </div>
          <div
            className={`${styles.TimePicker_AmPm} ${
              !isAM ? styles.Active_AmPm : ""
            } ${!isPMAvailable ? styles.Disabled_AmPm : ""}`}
            onClick={isPMAvailable ? toggleAmPm : undefined}
          >
            PM
          </div>
        </div>
      </div>

      <hr className={styles.TimePicker_Line} />

      {/* Time Selections Section */}
      <div className={styles.TimePicker_TimeSelections}>
        {times.map((time, index) => (
          <p
            key={index}
            className={`${styles.TimePicker_TimeSelection} ${
              selectedTime === time ? styles.Active_TimeSelection : ""
            }`}
            onClick={() => handleTimeSelection(time)}
          >
            {time}
          </p>
        ))}
      </div>
    </div>
  );
};
