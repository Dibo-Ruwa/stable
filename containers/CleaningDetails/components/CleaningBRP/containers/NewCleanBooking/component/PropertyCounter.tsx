'use client'
import React, { useState } from 'react';
import styles from "../MovingBooking.module.css";
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';


export const PropertyCounter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increaseCount = (): void => {
    setCount(count + 1);
  };

  const decreaseCount = (): void => {
    setCount(count > 0 ? count - 1 : 0); // Optional: Prevent count from going below 0
  };

  return (
    <div className={styles.CounterContainer}>
      <button
        type="button"
        onClick={decreaseCount}
        className={styles.CounterButton}
        disabled={count === 0}
        aria-label="Decrease count"
      >
        <AiOutlineMinus />
      </button>
      <div className={styles.CountNum}>{count}</div>
      <button
        type="button"
        onClick={increaseCount}
        className={styles.CounterButton}
        aria-label="Increase count"
      >
        <AiOutlinePlus />
      </button>
    </div>
  );
};
