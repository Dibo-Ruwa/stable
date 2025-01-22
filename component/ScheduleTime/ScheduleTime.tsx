import React, { useEffect, useRef, useState } from "react";
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
  isOpen?: boolean; // Accept toggle state as a prop
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>; // Accept
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
  const modalRef = useRef<HTMLDivElement | null>(null);

  // Toggle open/close state
  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  // Handle time change from TimePicker
  const handleTimeChange = (newTime: string) => {
    setSelectedTime(newTime);
    onTimeChange(newTime);
  };

  // Update selectedTime when the time prop changes
  useEffect(() => {
    setSelectedTime(time);
  }, [time]);

  // Close modal when clicking outside or pressing Enter
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Enter" && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [isOpen]); // Add isOpen to the dependency array

  return (
    <>
      <div
        className={`${styles.MovingScheduleTimeCard} ${className}`}
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
          <div
            className={styles.MovingScheduleTimeDetails}
            onClick={(e) => e.stopPropagation()}
            ref={modalRef}
          >
            {/* Additional details go here (e.g., a time picker or additional information) */}
            <TimePicker onTimeChange={handleTimeChange} />
          </div>
        )}
      </div>
    </>
  );
};
