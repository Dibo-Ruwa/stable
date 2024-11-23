import React, { useState } from "react";
import { CiClock2 } from "react-icons/ci";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import styles from "./ScheduleTime.module.css";

interface ScheduleTimeProps {
  time: string;
  className?: string;
  label: string;
  icon?: React.ElementType;
}

export const ScheduleTime: React.FC<ScheduleTimeProps> = ({
  time,
  className,
  label,
  icon: Icon = CiClock2,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle open/close state
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`${styles.MovingScheduleTimeCard}  ${className}`}
      onClick={handleToggle}
      aria-expanded={isOpen}
    >
      <div className={styles.MovingScheduleTimeContent}>
        <div className={styles.MovingScheduleTimeFrame}>
          <Icon className={styles.MovingScheduleTimeIcon} />
          <div className={styles.MovingScheduleTime}>
            <p className={styles.MovingScheduleTimeText}>{label}</p>
            <p className={styles.MovingScheduleTimeNum}>{time}</p>
          </div>
        </div>

        <div className={styles.MovingScheduleDate_ArrowIcons}>
          {isOpen ? (
            <FaAngleUp className={styles.MovingScheduleTimeArrow} />
          ) : (
            <FaAngleDown className={styles.MovingScheduleTimeArrow} />
          )}
        </div>
      </div>

      {isOpen && (
        <div className={styles.MovingScheduleTimeDetails}>
          {/* Additional details go here (e.g., a time picker or additional information) */}
          <p>Choose a new time...</p>
          {/* You can add a time picker or other related content here */}
        </div>
      )}
    </div>
  );
};
