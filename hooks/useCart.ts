"use client";
import useCartStore from "@/store/useCart.store";
import { CartItem, Subscription } from "@/utils/types/types";
import { useEffect } from "react";

export const useCart = () => {
  function getTotalQuantityAndPrice(
    cartItems: CartItem[],
    subscriptions: Subscription[]
  ): {
    totalQuantities: number;
    totalPrice: number;
  } {
    let totalQuantities = 0;
    let totalPrice = 0;

    for (const cartItem of cartItems) {
      totalQuantities += cartItem.quantity;
      totalPrice += cartItem.total;
    }

    const subCount = subscriptions ? subscriptions.length : 0;

    totalQuantities += subCount;

    return { totalQuantities, totalPrice };
  }

  const { cartItems, getCart, getSubscriptions, subscriptions } =
    useCartStore();

  const { totalQuantities, totalPrice } = getTotalQuantityAndPrice(
    cartItems,
    subscriptions
  );

  useEffect(() => {
    getCart();
    getSubscriptions();
  }, [getCart, getSubscriptions]);

  const cartData: any =
    cartItems.length > 0 &&
    cartItems.map((item: any) => {
      const { title, total, price, imageUrl, quantity } = item;

      return {
        id: item?._id,
        title,
        price,
        imageUrl,
        quantity,
        total: total,
      };
    });

  // // let totalPrice: number  = 0;

  // if (cartItems) {
  //   totalPrice =
  //     cartItems.length > 0 &&
  //     cartItems.reduce(
  //       (accumulator: number, currentItem) =>
  //         accumulator + currentItem.price * currentItem.quantity,
  //       0
  //     );
  // }

  return { cartData, totalPrice, totalQuantities };
};
