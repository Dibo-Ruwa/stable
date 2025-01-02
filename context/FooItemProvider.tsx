import { FoodData } from "@/utils/types/types";
import React, { createContext, useContext, useState, useEffect } from "react";

interface FoodItemContextType {
  selectedItem: FoodData | null;
  setSelectedItem: (item: FoodData) => void;
  clearSelectedItem: () => void; // Add this function
}

const FoodItemContext = createContext<FoodItemContextType | undefined>(undefined);

export const FoodItemProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedItem, setSelectedItemState] = useState<FoodData | null>(null);

  // Load selected item from local storage on initial render
  useEffect(() => {
    const savedItem = localStorage.getItem("selectedFoodItem");
    if (savedItem) {
      setSelectedItemState(JSON.parse(savedItem));
    }
  }, []);

  // Save selected item to local storage
  const setSelectedItem = (item: FoodData) => {
    setSelectedItemState(item);
    localStorage.setItem("selectedFoodItem", JSON.stringify(item));
  };

  // Clear selected item from state and local storage
  const clearSelectedItem = () => {
    setSelectedItemState(null);
    localStorage.removeItem("selectedFoodItem");
  };

  return (
    <FoodItemContext.Provider
      value={{ selectedItem, setSelectedItem, clearSelectedItem }} // Add clearSelectedItem to the context
    >
      {children}
    </FoodItemContext.Provider>
  );
};

export const useFoodItem = () => {
  const context = useContext(FoodItemContext);
  if (!context) {
    throw new Error("useFoodItem must be used within a FoodItemProvider");
  }
  return context;
};