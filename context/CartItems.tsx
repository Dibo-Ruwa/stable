import { FoodData, Extra } from "@/utils/types/types"; // Import the correct types
import React, { createContext, useContext, useState, useEffect } from "react";

interface CartItemsContextType {
  cartItems: FoodData[];
  isCart: boolean;
  setIsCart: (value: boolean) => void;
  addToCart: (item: FoodData, quantity?: number, extras?: Extra[]) => void;
  removeFromCart: (itemId: string) => void;
  updateItemQuantity: (itemId: string, newQuantity: number) => void;
  updateExtraQuantity: (itemId: string, extraId: string, newQuantity: number) => void;
  clearCart: () => void;
}

const CartItemsContext = createContext<CartItemsContextType | undefined>(undefined);

export const CartItemsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<FoodData[]>([]);
  const [isCart, setIsCart] = useState<boolean>(false);

  // Load cart items and isCart state from local storage on initial render
  useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    const savedIsCart = localStorage.getItem("isCart");

    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }

    if (savedIsCart) {
      setIsCart(JSON.parse(savedIsCart));
    }
  }, []);

  // Save cart items to local storage whenever the cart changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Save isCart state to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("isCart", JSON.stringify(isCart));
  }, [isCart]);

  const addToCart = (item: FoodData, quantity: number = 1, extras: Extra[] = []) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((cartItem) => cartItem._id === item._id);

      if (existingItemIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity = (updatedItems[existingItemIndex].quantity || 0) + quantity;

        if (extras.length > 0) {
          updatedItems[existingItemIndex].extras = updatedItems[existingItemIndex].extras ?? [];
          extras.forEach((extra) => {
            const existingExtraIndex = updatedItems[existingItemIndex].extras.findIndex((e) => e._id === extra._id);
            if (existingExtraIndex !== -1) {
              updatedItems[existingItemIndex].extras[existingExtraIndex].quantity =
                (updatedItems[existingItemIndex].extras[existingExtraIndex].quantity || 0) + extra.quantity;
            } else {
              updatedItems[existingItemIndex].extras.push({ ...extra, quantity: extra.quantity || 1 });
            }
          });
        }

        return updatedItems;
      } else {
        const newItem = { ...item, quantity, extras: extras ?? [] };
        return [...prevItems, newItem];
      }
    });
  };

  const updateItemQuantity = (itemId: string, newQuantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === itemId
          ? {
              ...item,
              quantity: newQuantity,
              totalPrice: item.price * newQuantity,
            }
          : item
      )
    );
  };

  const updateExtraQuantity = (itemId: string, extraId: string, newQuantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === itemId
          ? {
              ...item,
              extras: item.extras?.map((extra) =>
                extra._id === extraId ? { ...extra, quantity: newQuantity } : extra
              ) ?? [],
            }
          : item
      )
    );
  };

  const removeFromCart = (itemId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item._id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };

  return (
    <CartItemsContext.Provider
      value={{
        cartItems,
        isCart,
        setIsCart,
        addToCart,
        removeFromCart,
        updateItemQuantity,
        updateExtraQuantity,
        clearCart,
      }}
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