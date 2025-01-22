import React, { useState, useEffect, useCallback } from "react";
import styles from "../LaundryBooking.module.css";
import { CustomLaundryItems } from './CustomLaundryItems';
import { AiOutlinePlus } from "react-icons/ai";

interface LaundryItemGroup {
  id: number;
  category: string;
  items: Array<{
    id: string;
    name: string;
    price?: number;
  }>;
}

interface QuantityState {
  [key: string]: number;
}

interface Props {
  onItemsChange: (items: Array<{ name: string; quantity: number; image?: string | null }>) => void;
}

// Update laundry items with different clothing types
const laundryItems: LaundryItemGroup[] = [
  {
    id: 1,
    category: "Regular Clothing",
    items: [
      { id: "r1", name: "T-Shirt" },
      { id: "r2", name: "Shirt" },
      { id: "r3", name: "Pants/Trousers" },
      { id: "r4", name: "Jeans" },
      { id: "r5", name: "Jalabiya" },
      { id: "r6", name: "Skirt" },
      { id: "r7", name: "Long Dress" },
      { id: "r8", name: "Blouse" },
      { id: "r9", name: "Hijab" },

    ],
  },
  {
    id: 2,
    category: "Formal Wear",
    items: [
      { id: "f1", name: "Suit (2 Piece)" },
      { id: "f2", name: "Suit (3 Piece)" },
      { id: "f3", name: "Blazer" },
      { id: "f4", name: "Dress Shirt" },
      { id: "f5", name: "Tie" },
      { id: "f6", name: "Evening Gown" },
      { id: "f7", name: "Formal Dress" },
    ],
  },
  {
    id: 3,
    category: "Bedding & Home",
    items: [
      { id: "b1", name: "Bed Sheet (Single)" },
      { id: "b2", name: "Bed Sheet (Double)" },
      { id: "b3", name: "Duvet Cover" },
      { id: "b4", name: "Pillow Case" },
      { id: "b5", name: "Blanket" },
      { id: "b6", name: "Curtains" },
      { id: "b7", name: "Towel" },
    ],
  },
  {
    id: 4,
    category: "Delicates",
    items: [
      { id: "d1", name: "Silk Shirt" },
      { id: "d2", name: "Silk Dress" },
      { id: "d3", name: "Cashmere Sweater" },
      { id: "d4", name: "Wool Coat" },
      { id: "d5", name: "Scarf" },
      { id: "d6", name: "Linen Items" },
    ],
  },
  {
    id: 5,
    category: "Children's Wear",
    items: [
      { id: "k1", name: "Kids T-Shirt" },
      { id: "k2", name: "Kids Pants" },
      { id: "k3", name: "Kids Dress" },
      { id: "k4", name: "School Uniform" },
      { id: "k5", name: "Baby Clothes" },
    ],
  }
];

export const LaundryItemsGroup: React.FC<Props> = ({ onItemsChange }) => {
  const [quantities, setQuantities] = useState<QuantityState>(
    laundryItems.reduce((acc, group) => {
      group.items.forEach((item) => {
        acc[`${group.id}-${item.id}`] = 0;
      });
      return acc;
    }, {} as QuantityState)
  );

  const [visibleItems, setVisibleItems] = useState<number>(
    laundryItems[0].items.length
  );

  const [showCustomItems, setShowCustomItems] = useState(false);
  const [customItems, setCustomItems] = useState<Array<{ name: string; quantity: number; image: string | null }>>([]);

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

  const handleInputChange = (groupId: number, itemId: string, value: string) => {
    const numericValue = Math.max(0, parseInt(value) || 0);
    setQuantities(prev => {
      const updatedQuantities = {
        ...prev,
        [`${groupId}-${itemId}`]: numericValue
      };
      
      const items = Object.entries(updatedQuantities)
        .map(([key, quantity]) => {
          const [gId, iId] = key.split("-");
          const group = laundryItems.find(g => g.id === parseInt(gId));
          const item = group?.items.find(i => i.id === iId);
          return item && quantity > 0 ? { name: item.name, quantity } : null;
        })
        .filter((item): item is { name: string; quantity: number } => 
          item !== null
        );
      
      onItemsChange(items);
      
      return updatedQuantities;
    });
  };

  const handleCustomItemsChange = useCallback((items: Array<{ name: string; quantity: number; image: string | null }>) => {
    setCustomItems(items);
  }, []); // Empty dependency array since it doesn't depend on any props or state

  useEffect(() => {
    const standardItems = Object.entries(quantities)
      .map(([key, quantity]) => {
        const [gId, iId] = key.split("-");
        const group = laundryItems.find(g => g.id === parseInt(gId));
        const item = group?.items.find(i => i.id === iId);
        return item && quantity > 0 ? { name: item.name, quantity } : null;
      })
      .filter((item): item is { name: string; quantity: number } => item !== null);
    
    const allItems = [...standardItems, ...customItems];
    onItemsChange(allItems);
  }, [quantities, customItems, onItemsChange]);

  const handleCloseCustomItems = () => {
    setShowCustomItems(false);
    setCustomItems([]); // Optional: clear custom items when closing
  };

  return (
    <>
      <div className={styles.LaundryItemsGroup}>
        {laundryItems.map((group) => (
          <div key={group.id} className={styles.LaundryItemsGroupCard}>
            <p className={styles.LaundryItemsGroupText}>{group.category}</p>
            <div className={styles.LaundryItemsGroupCards}>
              {group.items.slice(0, visibleItems).map((item) => (
                <div key={item.id} className={styles.LaundryItemsGroupCardItems}>
                  <p className={styles.LaundryItemsGroupCardItems_Text}>
                    {item.name}
                  </p>
                  <div className={styles.LaundryItemsGroupCardItemsBox}>
                    <input
                      type="text"
                      placeholder="0"
                      className={styles.LaundryItemsGroupCardItemsBox_Input}
                      value={quantities[`${group.id}-${item.id}`]}
                      onChange={(e) => 
                        handleInputChange(group.id, item.id, e.target.value)
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className={styles.LaundryAddCustomContainer}>
          <p className={styles.LaundryAddCustomContainerText}>
            Can't find what you're looking for?
          </p>
          <div 
            className={styles.AddCustom}
            onClick={() => setShowCustomItems(!showCustomItems)}
            style={{
              cursor: "pointer",
            }}
          >
            <AiOutlinePlus className={styles.AddCustom_AddMoreIcon} />
            <span className={styles.AddCustom_Text}>Add Custom Items</span>
          </div>
        </div>
      </div>
      
      <CustomLaundryItems 
        show={showCustomItems}
        onItemsChange={handleCustomItemsChange}
        onClose={handleCloseCustomItems}
      />
    </>
  );
};
