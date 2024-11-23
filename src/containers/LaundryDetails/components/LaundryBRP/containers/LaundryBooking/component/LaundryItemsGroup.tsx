"use client";
import React, { useState } from "react";
import styles from "../LaundryBooking.module.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

// Define types for the laundry items and state
interface LaundryItemGroup {
  id: number;
  category: string;
  items: string[];
}

interface QuantityState {
  [key: string]: number;
}

// Array of laundry item groups
const laundryItems: LaundryItemGroup[] = [
  { id: 1, category: "From 0-17 years", items: ["Shirt", "Pants", "Dress", "Jacket", "Socks"] },
  { id: 2, category: "Adults", items: ["Shirt", "Pants", "Dress", "Jacket", "Socks"] },
  // Add more groups here if needed
];

export const LaundryItemsGroup: React.FC = () => {
  // Initialize state with the QuantityState type
  const [quantities, setQuantities] = useState<QuantityState>(
    laundryItems.reduce((acc, group) => {
      group.items.forEach((item) => {
        acc[`${group.id}-${item}`] = 0; // Initialize quantity to 0 for each item
      });
      return acc;
    }, {} as QuantityState) // Specify initial value as QuantityState type
  );

  // Function to increment the quantity of a specific item
  const handleIncrement = (groupId: number, item: string) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [`${groupId}-${item}`]: prevQuantities[`${groupId}-${item}`] + 1,
    }));
  };

  // Function to decrement the quantity of a specific item
  const handleDecrement = (groupId: number, item: string) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [`${groupId}-${item}`]: Math.max(prevQuantities[`${groupId}-${item}`] - 1, 0),
    }));
  };

  return (
    <div className={styles.LaundryItemsGroup}>
      {laundryItems.map((group) => (
        <div key={group.id} className={styles.LaundryItemsGroupCard}>
          <p className={styles.LaundryItemsGroupText}>{group.category}</p>
          <div className={styles.LaundryItemsGroupCards}>
            {group.items.map((item, index) => (
              <div key={index} className={styles.LaundryItemsGroupCardItems}>
                <p className={styles.LaundryItemsGroupCardItems_Text}>{item}</p>
                <div className={styles.LaundryItemsGroupCardItemsBox}>
                  <button
                    className={styles.LaundryItemsGroupCardItemsBox_Button}
                    type="button"
                    onClick={() => handleDecrement(group.id, item)}
                  >
                    <AiOutlineMinus />
                  </button>
                  <div className={styles.LaundryItemsGroupCardItemsBox_Num}>
                    {quantities[`${group.id}-${item}`]}
                  </div>
                  <button
                    className={styles.LaundryItemsGroupCardItemsBox_Button}
                    type="button"
                    onClick={() => handleIncrement(group.id, item)}
                  >
                    <AiOutlinePlus />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
