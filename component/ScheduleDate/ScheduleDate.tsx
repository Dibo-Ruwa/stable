"use client";

import React from "react";
import { CiCalendar } from "react-icons/ci";
import styles from "./ScheduleDate.module.css";

interface ScheduleDateProps {
  date: string; // This can be a formatted string for display
  className?: string;
  label: string;
  icon?: React.ElementType;
  onDateChange: (date: string) => void; // Updated to string for input field
}

export const ScheduleDate: React.FC<ScheduleDateProps> = ({
  date,
  className,
  label,
  icon: Icon = CiCalendar,
  onDateChange,
}) => {
  return (
    <div className={`${styles.MovingScheduleDateCard} ${className}`}>
      <div className={styles.MovingScheduleDateContent}>
        <div className={styles.MovingScheduleDateFrame}>
          <Icon className={styles.MovingScheduleDateIcon} />
          <label className={styles.MovingScheduleDate}>
            <span className={styles.MovingScheduleDateText}>{label}</span>
            <input
              type="date"
              className={styles.MovingScheduleDateInput}
              value={date}
              onChange={(e) => onDateChange(e.target.value)}
            />
          </label>
        </div>
      </div>
    </div>
  );
};
