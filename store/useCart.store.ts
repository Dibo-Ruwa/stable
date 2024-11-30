"use client";
import { create } from "zustand";
import {
  persist,
  createJSONStorage,
  devtools,
  StateStorage,
} from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";
import {
  CartItem,
  CartState,
  Product,
  Subscription,
} from "@/utils/types/types";
import {
  addCartItemAPI,
  clearCartAPI,
  getCartAPI,
  removeCartItemAPI,
  updateItemQuantityAPI,
} from "@/utils/services/cart";
import {
  addSubscriptionAPI,
  getSubscriptionsAPI,
  removeSubscriptionAPI,
} from "@/utils/services/subscriptions";
import { toast } from "react-hot-toast";
import { useModal } from "@/hooks/useModal";

const useCartStore = create<CartState>()((set) => ({
  modal: {
    isOpen: false,
    message: "",
    type: "success",
  },
  cartItems: [],
  subscriptions: [],
  getCart: async () => {
    try {
      const response = await getCartAPI(); // Call the API function to fetch the cart
      set({ cartItems: response.data.cart.cartItems });
    } catch (error) {
      console.log(error);
    }
  },
  getSubscriptions: async () => {
    try {
      const response = await getSubscriptionsAPI(); // Call the API function to fetch the cart
      set({ subscriptions: response.data.subscriptions });
    } catch (error) {
      console.log(error);
    }
  },
  addSubscription: async (subscription) => {
    console.log(subscription);
    try {
      if (subscription.plan === "One-Off Cleaning Plan") {
        toast.loading("adding session to cart", {
          position: "top-center",
          duration: 1000,
        });
        const response = await addSubscriptionAPI(subscription);
        set((state) => ({
          subscriptions: [...response.data.subscriptions],
          modal: {
            isOpen: true,
            message: "session added successfully",
            type: "success",
          },
        }));
        // if (response) {
        //   set({
        //     modal: {
        //       isOpen: true,
        //       message: "session added successfully",
        //       type: "success",
        //     },
        //   });
        // }
      } else {
        toast.loading("adding subcription to cart", {
          position: "top-center",
          duration: 1000,
        });
        const response = await addSubscriptionAPI(subscription);
        set((state) => ({
          subscriptions: [...response.data.subscriptions],
        }));
        if (response) {
          set({
            modal: {
              isOpen: true,
              message: response.data.message,
              type: "success",
            },
          });
        }
      }
    } catch (error: any) {
      toast.error(error.response.data.message);

      console.log(error);
      // Show error modal with the extracted error message
      set({
        modal: {
          isOpen: true,
          message: error.response.data.message,
          type: "error",
        },
      });
    }
  },
  removeSubscription: async (id) => {
    try {
      toast.loading("removing subscription from cart", {
        position: "top-center",
        duration: 1000,
      });
      const response = await removeSubscriptionAPI(id);

      set((state) => ({
        subscriptions: [...response.data.subscriptions],
      }));
      toast.success("Subscription removed successfully!!!", {
        position: "top-center",
        duration: 3000,
      });
    } catch (error: any) {
      console.log(error);
      toast.error(error.message, {
        duration: 3000,
        position: "top-center",
      });
    }
  },

  addToCart: async (productObj) => {
    try {
      toast.loading("Adding item to cart!!!", {
        duration: 1000,
        position: "top-center",
      });

      const response = await addCartItemAPI(productObj);
      console.log(response);
      set((state) => ({
        cartItems: [...response.data.cart.cartItems],
      }));
      if (response) {
        set({
          modal: {
            isOpen: true,
            message: "Item added successfully!!!",
            type: "success",
          },
        });
      }
    } catch (error: any) {
      set({
        modal: {
          isOpen: true,
          message: error.response.data.error,
          type: "error",
        },
      });
    }
  },

 

  removeFromCart: async (id) => {
    try {
      toast.loading("Removing item from cart!!!", {
        duration: 1000,
        position: "top-center",
      });
      const response = await removeCartItemAPI(id);

      set(
        (state) => (
          removeCartItem(state.cartItems, id),
          {
            cartItems: [...response.data.cart.cartItems],
          }
        )
      );
      toast.success("Item removed successfully!!!", {
        duration: 3000,
        position: "top-center",
      });
    } catch (error: any) {
      console.log(error);
      toast.error(error.message, {
        duration: 3000,
        position: "top-center",
      });
    }
  },
  updateQuantity: async (id, action) => {
    try {
      toast.loading("Updating item quantity!!!", {
        duration: 1000,
        position: "top-center",
      });
      const response = await updateItemQuantityAPI(id, action);
      // If the API call is successful, update the local state with the updated quantity
      set(
        (state) => (
          updateItemQuantity(state.cartItems, id, action),
          {
            cartItems: [...response.data.cart.cartItems],
          }
        )
      );

      toast.success("Item updated successfuly!!!", {
        duration: 3000,
        position: "top-center",
      });
    } catch (error: any) {
      // Handle errors if needed
      toast.error(error.message, {
        duration: 3000,
        position: "top-center",
      });
    }
  },
  clearCart: async () => {
    try {
      toast.loading("Clearing cart!!!", {
        duration: 1000,
        position: "top-center",
      });
      const response = await clearCartAPI();

      set({
        cartItems: response.data.cart.cartItems,
        subscriptions: response.data.subscriptions,
      });

      toast.success("Cart cleared successfully!!!", {
        duration: 1000,
        position: "top-center",
      });
    } catch (error) {
      console.log(error);
    }
  },
  closeModal: () => {
    set((state) => ({ modal: { ...state.modal, isOpen: false } }));
  },
}));

/* ===== Cart Store Util Functions ===== */
function addCartItem(state: CartItem[], product: Product) {
  const cartArray = state.filter((item) => item?.title !== product.title);

  const newItem = { ...product, quantity: 1, total: product.price };
  return { cartItems: [...cartArray, newItem] };
}

function removeCartItem(state: CartItem[], id: string) {
  const removedCart = state.filter((item) => item._id !== id);
  return { cartItems: [...removedCart] };
}

function updateItemQuantity(
  state: CartItem[],
  id: string,
  action: "increase" | "decrease"
) {
  const objIndex = state.findIndex((obj) => obj._id === id);

  if (action === "increase") {
    state[objIndex].quantity = state[objIndex].quantity + 1;
  } else if (action === "decrease") {
    state[objIndex].quantity =
      state[objIndex].quantity - (state[objIndex].quantity > 1 ? 1 : 0);
  }

  return { cartItems: [...state] };
}

export default useCartStore;
