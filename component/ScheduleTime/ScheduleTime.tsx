import React, { useEffect, useRef, useState } from "react";
import { CiClock2 } from "react-icons/ci";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import styles from "./ScheduleTime.module.css";
import TimePicker from "./TimePicker"; 
import { getOneHourFromNow } from "@/utils/helpers/dateTime";

interface ScheduleTimeProps {
  time: string;
  className?: string;
  IconClassName?: string;
  label: string;
  icon?: React.ElementType;
  onTimeChange: (newTime: string) => void;
}

export const ScheduleTime: React.FC<ScheduleTimeProps> = ({
  time = getOneHourFromNow(), // Set default time
  className,
  label,
  IconClassName,
  icon: Icon = CiClock2,
  onTimeChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  // Toggle open/close state
  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  // Handle time change from TimePicker
  const handleTimeSelect = (newTime: string) => {
    onTimeChange(newTime);
    setIsOpen(false); // Close the picker after selection
  };

  // Close modal when clicking outside or pressing Enter
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div
      className={`${styles.MovingScheduleTimeCard} ${className}`}
      onClick={handleToggle}
      aria-expanded={isOpen}
    >
      <div className={styles.MovingScheduleTimeContent}>
        <div className={styles.MovingScheduleTimeFrame}>
          <div className={IconClassName}>
            <Icon className={styles.MovingScheduleTimeIcon} />
          </div>
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
        <div
          className={styles.MovingScheduleTimeDetails}
          onClick={(e) => e.stopPropagation()}
          ref={modalRef}
        >
          <TimePicker onTimeChange={handleTimeSelect} />
        </div>
      )}
    </div>
  );
};
