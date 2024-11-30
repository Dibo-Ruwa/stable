'use client'

import React, { useState } from "react";
import { CiCalendar } from "react-icons/ci";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import styles from "./ScheduleDate.module.css";

interface ScheduleDateProps {
  date: string;
  className?: string;
  label: string;
  icon?: React.ElementType;
}

export const ScheduleDate: React.FC<ScheduleDateProps> = ({
  date,
  className,
  label,
  icon: Icon = CiCalendar,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle open/close state
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
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
        <div className={styles.MovingScheduleDate_ArrowIcons}>
          {isOpen ? (
            <FaAngleUp className={styles.MovingScheduleDateArrow} />
          ) : (
            <FaAngleDown className={styles.MovingScheduleDateArrow} />
          )}
        </div>
      </div>

      {isOpen && (
        <div className={styles.MovingScheduleDateDetails}>
          {/* Additional details go here (e.g., a date picker) */}
          <p>Choose a new date...</p>
          {/* You can add a date picker or additional information */}
        </div>
      )}
    </div>
  );
};
