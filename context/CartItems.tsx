import { FoodData } from "@/utils/types/types";
import React, { createContext, useContext, useState, useEffect } from "react";

interface CartItemsContextType {
  cartItems: FoodData[]; // Array of cart items
  isCart: boolean; // Boolean to track cart state
  setIsCart: (value: boolean) => void; // Function to update isCart
  addToCart: (item: FoodData) => void; // Add an item to the cart
  removeFromCart: (itemId: string) => void; // Remove an item from the cart by ID
  clearCart: () => void; // Clear all items from the cart
}

const CartItemsContext = createContext<CartItemsContextType | undefined>(undefined);

export const CartItemsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<FoodData[]>([]);
  const [isCart, setIsCart] = useState<boolean>(false); // Default value is false

  // Load cart items from local storage on initial render
  useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []);

  // Save cart items to local storage whenever the cart changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add an item to the cart
  const addToCart = (item: FoodData) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  // Remove an item from the cart by ID
  const removeFromCart = (itemId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item._id !== itemId));
  };

  // Clear all items from the cart
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };

  return (
    <CartItemsContext.Provider
      value={{ cartItems, isCart, setIsCart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartItemsContext.Provider>
  );
};

export const useCartItems = () => {
  const context = useContext(CartItemsContext);
  if (!context) {
    throw new Error("useCartItems must be used within a CartItemsProvider");
  }
  return context;
};