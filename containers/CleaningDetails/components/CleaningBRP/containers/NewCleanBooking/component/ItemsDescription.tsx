'use client';
import React from 'react';
import styles from "../MovingBooking.module.css";

interface ItemsDescriptionProps {
  onChange: (description: string) => void;
}

export const ItemsDescription: React.FC<ItemsDescriptionProps> = ({ onChange }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={styles.ItemsDescriptionContainer}>
      <label htmlFor="description" className={styles.ItemsDescriptionText}>
        Description
      </label>
      <textarea
        id="description"
        name="description"
        className={styles.ItemsDescriptionTextarea}
        placeholder="Write..."
        cols={30}
        rows={5}
        onChange={handleInputChange}
      ></textarea>
    </div>
  );
};
