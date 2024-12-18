import React, { useState } from "react";
import { CiClock2 } from "react-icons/ci";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import styles from "./ScheduleTime.module.css";
import { TimePicker } from "./TimePicker";

interface ScheduleTimeProps {
  time: string;
  className?: string;
  iconClass?: string;
  label: string;
  icon?: React.ElementType;
  onTimeChange: (newTime: string) => void;
}

export const ScheduleTime: React.FC<ScheduleTimeProps> = ({
  time,
  className,
  label,
  iconClass,
  icon: Icon = CiClock2,
  onTimeChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState(time);

  // Toggle open/close state
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleTimeChange = (newTime: string) => {
    onTimeChange(newTime); // Call the callback with the new time
  };

  return (
    <>
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

          <div
            className={`${styles.MovingScheduleDate_ArrowIcons} ${iconClass}`}
          >
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
            <TimePicker onTimeChange={handleTimeChange} />
          </div>
        )}
      </div>
    </>
  );
};
