import React, { useState, useEffect } from "react";
import styles from "../LaundryBooking.module.css";

interface LaundryItemGroup {
  id: number;
  category?: string;
  items: string[];
}

interface QuantityState {
  [key: string]: number;
}

const laundryItems: LaundryItemGroup[] = [
  {
    id: 1,
    category: "From 0-17 years",
    items: ["Shirt", "Shirt", "Shirt", "Shirt", "Shirt"],
  },
  {
    id: 2,
    items: ["Shirt", "Shirt", "Shirt", "Shirt", "Shirt"],
  },
];

export const LaundryItemsGroup: React.FC = () => {
  const [quantities, setQuantities] = useState<QuantityState>(
    laundryItems.reduce((acc, group) => {
      group.items.forEach((item) => {
        acc[`${group.id}-${item}`] = 0;
      });
      return acc;
    }, {} as QuantityState)
  );

  const [visibleItems, setVisibleItems] = useState<number>(
    laundryItems[0].items.length
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 568) {
        setVisibleItems(1);
      } else if (window.innerWidth <= 1024) {
        setVisibleItems(3);
      } else {
        setVisibleItems(laundryItems[0].items.length);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleInputChange = (groupId: number, item: string, value: string) => {
    const numericValue = Math.max(0, parseInt(value) || 0);
    setQuantities((prevQuantities) => {
      const updatedQuantities = {
        ...prevQuantities,
        [`${groupId}-${item}`]: numericValue,
      };
      console.log("Updated quantities:", updatedQuantities); // Log updated quantities
      return updatedQuantities;
    });
  };

  return (
    <div className={styles.LaundryItemsGroup}>
      {laundryItems.map((group) => (
        <div key={group.id} className={styles.LaundryItemsGroupCard}>
          <p className={styles.LaundryItemsGroupText}>{group.category}</p>
          <div className={styles.LaundryItemsGroupCards}>
            {group.items.slice(0, visibleItems).map((item, index) => (
              <div key={index} className={styles.LaundryItemsGroupCardItems}>
                <p className={styles.LaundryItemsGroupCardItems_Text}>{item}</p>
                <div className={styles.LaundryItemsGroupCardItemsBox}>
                  <input
                    type="text"
                    placeholder="0"
                    className={styles.LaundryItemsGroupCardItemsBox_Input}
                    value={quantities[`${group.id}-${item}`]}
                    onChange={(e) =>
                      handleInputChange(group.id, item, e.target.value)
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
