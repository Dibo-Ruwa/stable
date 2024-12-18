"use client";

import React, { useState } from "react";
import { CiCalendar } from "react-icons/ci";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import styles from "./ScheduleDate.module.css";
import { DateRangePicker } from "./DateRangePicker";

interface ScheduleDateProps {
  date: string; // This can be a formatted string for display
  className?: string;
  iconClass?: string;
  label: string;
  icon?: React.ElementType;
  onDateChange: (startDate: Date, endDate: Date) => void; // New prop
}

export const ScheduleDate: React.FC<ScheduleDateProps> = ({
  date,
  className,
  iconClass,
  label,
  icon: Icon = CiCalendar,
  onDateChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle open/close state
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`${styles.MovingScheduleDateCard} ${className}`}
        onClick={handleToggle}
        aria-expanded={isOpen}
      >
        <div className={styles.MovingScheduleDateContent}>
          <div className={styles.MovingScheduleDateFrame}>
            <Icon className={styles.MovingScheduleDateIcon} />
            <div className={styles.MovingScheduleDate}>
              <p className={styles.MovingScheduleDateText}>{label}</p>
              <p className={styles.MovingScheduleDateNum}>{date}</p>
            </div>
          </div>
          <div
            className={`${styles.MovingScheduleDate_ArrowIcons} ${iconClass}`}
          >
            {isOpen ? (
              <FaAngleUp className={styles.MovingScheduleDateArrow} />
            ) : (
              <FaAngleDown className={styles.MovingScheduleDateArrow} />
            )}
          </div>
        </div>
        {isOpen && (
          <div
            className={styles.MovingScheduleDateDetails}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Additional details go here (e.g., a date picker) */}
            <DateRangePicker onDateChange={onDateChange} />
          </div>
        )}
      </div>
    </>
  );
};
