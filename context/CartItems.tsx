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
  selectedVendor: string | null; // Add selectedVendor to the context
  setSelectedVendor: (vendor: string | null) => void; // Add setSelectedVendor to the context
}

const CartItemsContext = createContext<CartItemsContextType | undefined>(undefined);

export const CartItemsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<FoodData[]>([]);
  const [isCart, setIsCart] = useState<boolean>(false);
  const [selectedVendor, setSelectedVendor] = useState<string | null>(null); // Track selected vendor

  // Load cart items, isCart state, and selectedVendor from local storage on initial render
  useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    const savedIsCart = localStorage.getItem("isCart");
    const savedSelectedVendor = localStorage.getItem("selectedVendor");

    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }

    if (savedIsCart) {
      setIsCart(JSON.parse(savedIsCart));
    }

    if (savedSelectedVendor) {
      setSelectedVendor(savedSelectedVendor);
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

  // Save selectedVendor to local storage whenever it changes
  useEffect(() => {
    if (selectedVendor) {
      localStorage.setItem("selectedVendor", selectedVendor);
    } else {
      localStorage.removeItem("selectedVendor");
    }
  }, [selectedVendor]);

  // Clear selectedVendor if the cart is empty
  useEffect(() => {
    if (cartItems.length === 0) {
      setSelectedVendor(null); // Clear selected vendor when the cart is empty
    }
  }, [cartItems]);

  const addToCart = (item: FoodData, quantity: number = 1) => {
    // Check if the item's vendor matches the selected vendor
    if (selectedVendor && item.vendor.name !== selectedVendor) {
      // Show a modal or toast to inform the user
      alert("You can only select items from one vendor. Please remove items from the current vendor before adding items from another vendor.");
      return;
    }

    // If no vendor is selected, set the vendor to the item's vendor
    if (!selectedVendor) {
      setSelectedVendor(item.vendor.name);
    }

    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((cartItem) => cartItem._id === item._id);

      if (existingItemIndex !== -1) {
        // If the item already exists in the cart, update its quantity and extras
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity = (updatedItems[existingItemIndex].quantity || 0) + quantity;

        // Merge extras from the item with existing extras in the cart item
        if (item.extras && item.extras.length > 0) {
          // Initialize extras as an empty array if it doesn't exist
          updatedItems[existingItemIndex].extras = updatedItems[existingItemIndex].extras ?? [];

          item.extras.forEach((extra) => {
            const existingExtraIndex = updatedItems[existingItemIndex].extras.findIndex((e) => e._id === extra._id);
            if (existingExtraIndex !== -1) {
              // If the extra already exists, update its quantity
              updatedItems[existingItemIndex].extras[existingExtraIndex].quantity =
                (updatedItems[existingItemIndex].extras[existingExtraIndex].quantity || 0) + extra.quantity;
            } else {
              // If the extra does not exist, add it to the extras array
              updatedItems[existingItemIndex].extras.push({ ...extra, quantity: extra.quantity || 1 });
            }
          });
        }

        return updatedItems;
      } else {
        // If the item does not exist in the cart, add it with the specified quantity and extras
        const newItem = { ...item, quantity, extras: item.extras ?? [] }; // Initialize extras as an empty array if undefined
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
    setSelectedVendor(null); // Clear selected vendor when the cart is cleared
    localStorage.removeItem("cartItems");
    localStorage.removeItem("selectedVendor");
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
        selectedVendor, // Provide selectedVendor to the context
        setSelectedVendor, // Provide setSelectedVendor to the context
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