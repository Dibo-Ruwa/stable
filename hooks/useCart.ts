"use client";
import useCartStore from "@/store/useCart.store";
import { CartItem } from "@/utils/types/types";
import { useEffect } from "react";

export const useCart = () => {
  const calculateCartTotals = (cartItems: CartItem[]) => {
    return cartItems.reduce(
      (acc, item) => {
        // Calculate item total including extras
        const itemTotal = item.price * item.quantity;
        const extrasTotal = item.extras?.reduce((et, extra) => 
          et + (extra.price * extra.quantity), 0) || 0;
        const itemFullTotal = itemTotal + extrasTotal;
        
        return {
          totalQuantities: acc.totalQuantities + item.quantity,
          subtotal: acc.subtotal + itemFullTotal,
          totalExtras: acc.totalExtras + extrasTotal,
        };
      },
      { totalQuantities: 0, subtotal: 0, totalExtras: 0 }
    );
  };

  const { cartItems, getCart } = useCartStore();
  const { totalQuantities, subtotal, totalExtras } = calculateCartTotals(cartItems);

  useEffect(() => {
    getCart();
  }, [getCart]);

  // Transform cart items to include all necessary data
  const cartData = cartItems.map((item) => ({
    id: item.id || item._id, // Use either id
    _id: item._id || item.id, // Ensure both exist
    title: item.title,
    price: item.price,
    imageUrl: item.imageUrl,
    quantity: item.quantity,
    extras: item.extras,
    total: (item.price * item.quantity) + 
           (item.extras?.reduce((sum, extra) => 
             sum + (extra.price * extra.quantity), 0) || 0),
    vendor: item.vendor
  }));

  // Get cart meta information
  const cartMeta = {
    subtotal,
    deliveryFee: 0, // Will be calculated based on region selection
    totalExtras,
    selectedRegion: null,
    scheduledDelivery: {
      date: "",
      time: ""
    },
    additionalInfo: ""
  };

  return { 
    cartData, 
    cartMeta,
    totalQuantities, 
    cartItems,
    hasItems: cartItems.length > 0
  };
};
