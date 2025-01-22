"use client";
import React from "react";
import styles from "./PropertyCounter.module.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

interface PropertyCounterProps {
  initialCount?: number;
  min?: number;
  max?: number;
  step?: number;
  onCountChange?: (count: number) => void;
  className?: string;
  buttonClass?: string;
}

export const PropertyCounter: React.FC<PropertyCounterProps> = ({
  initialCount = 0,
  min = 0,
  max = 100,
  step = 1,
  onCountChange,
  className = "",
  buttonClass = "",
}) => {
  // Remove internal state and rely on initialCount
  const count = initialCount;

  const increaseCount = (): void => {
    if (count + step <= max) {
      onCountChange?.(count + step); // Notify parent of the new count
    }
  };

  const decreaseCount = (): void => {
    if (count - step >= min) {
      onCountChange?.(count - step); // Notify parent of the new count
    }
  };

  return (
    <div className={`${styles.CounterContainer} ${className}`}>
      <button
        type="button"
        onClick={decreaseCount}
        className={`${styles.CounterButton} ${buttonClass}`}
        disabled={count === min}
        aria-label="Decrease count"
      >
        <AiOutlineMinus />
      </button>
      <div className={styles.CountNum}>{count}</div>
      <button
        type="button"
        onClick={increaseCount}
        className={`${styles.CounterButton} ${buttonClass}`}
        disabled={count === max}
        aria-label="Increase count"
      >
        <AiOutlinePlus />
      </button>
    </div>
  );
};