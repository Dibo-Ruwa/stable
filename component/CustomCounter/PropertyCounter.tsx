"use client";
import React, { useState } from "react";
import styles from "./PropertyCounter.module.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

interface PropertyCounterProps {
  initialCount?: number;
  min?: number;
  max?: number;
  step?: number;
  onCountChange?: (count: number) => void;
  className?: string;
}

export const PropertyCounter: React.FC<PropertyCounterProps> = ({
  initialCount = 0,
  min = 0,
  max = 10,
  step = 1,
  onCountChange,
  className="",
}) => {
  const [count, setCount] = useState<number>(initialCount);

  const increaseCount = (): void => {
    if (count + step <= max) {
      setCount((prevCount) => prevCount + step);
      onCountChange?.(count + step);
    }
  };

  const decreaseCount = (): void => {
    if (count - step >= min) {
      setCount((prevCount) => prevCount - step);
      onCountChange?.(count - step);
    }
  };

  return (
    <div className={`${styles.CounterContainer} ${className}`}>
      <button
        type="button"
        onClick={decreaseCount}
        className={styles.CounterButton}
        disabled={count === min}
        aria-label="Decrease count"
      >
        <AiOutlineMinus />
      </button>
      <div className={styles.CountNum}>{count}</div>
      <button
        type="button"
        onClick={increaseCount}
        className={styles.CounterButton}
        disabled={count === max}
        aria-label="Increase count"
      >
        <AiOutlinePlus />
      </button>
    </div>
  );
};
