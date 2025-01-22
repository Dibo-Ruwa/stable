"use client";
import React, { useState, useEffect } from "react";
import styles from "../MovingBooking.module.css";

type CheckboxOption = {
  label: string;
  value: string;
};

type CheckboxGroupProps = {
  onChange: (categories: string[]) => void; // Prop to send selected categories back to the parent
};

const options: CheckboxOption[] = [
  { label: "Regular Home Cleaning", value: "home" },
  { label: "Deep Cleaning", value: "deep" },
  { label: "Industrial Cleaning", value: "industrial" },
];

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ onChange }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoryChange = (value: string) => {
    setSelectedCategories((prev) =>
      prev.includes(value)
        ? prev.filter((cat) => cat !== value)
        : [...prev, value]
    );
  };

  useEffect(() => {
    onChange(selectedCategories); // Notify parent whenever selected categories change
  }, [selectedCategories, onChange]);

  return (
    <div className={styles.CheckboxGroup}>
      {options?.map((option) => (
        <label
          htmlFor={option.value}
          key={option.value}
          className={styles.CheckboxLabel}
        >
          <input
            type="checkbox"
            id={option.value}
            className={styles.CheckBoxInput}
            checked={selectedCategories.includes(option.value)}
            onChange={() => handleCategoryChange(option.value)}
          />
          <span style={{ fontSize: "0.8rem" }}>{option.label}</span>
        </label>
      ))}
    </div>
  );
};
