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
  ProductData,
  FoodData,
  Extra,
  ExtraInfo
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

const useCartStore = create<CartState>()((set, get) => ({
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
      toast.success("Subscription removed successfully", {
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

  getCurrentVendor: () => {
    const state = get();
    if (state.cartItems.length > 0) {
      return state.cartItems[0].vendor.name;
    }
    return null;
  },

  addToCart: async (productObj: FoodData): Promise<void> => {
    const loadingToast = toast.loading("Adding item to cart...");
    
    try {
      const currentVendor = get().getCurrentVendor();
      if (currentVendor && currentVendor !== productObj.vendor.name) {
        throw new Error(`You can only order from one vendor at a time. Please clear your cart or complete your order from ${currentVendor} first.`);
      }

      const normalizedProduct = {
        ...productObj,
        imageUrl: productObj.imageUrl || "/placeholder.png", // Ensure imageUrl is used
        prep_time: productObj.prep_time // Ensure prep_time is included
      };

      const response = await addCartItemAPI(normalizedProduct);
      
      if (response?.cart?.cartItems) {
        set((state) => ({
          cartItems: response.cart.cartItems || [],
          modal: {
            isOpen: true,
            message: "Item added successfully",
            type: "success",
          },
        }));
        toast.success('Added to cart successfully');
      } else {
        throw new Error('Invalid response from server');
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.error || 'Failed to add item to cart';
      toast.error(errorMessage);
      set({
        modal: {
          isOpen: true,
          message: errorMessage,
          type: "error",
        },
      });
      throw error;
    } finally {
      toast.dismiss(loadingToast);
    }
  },

  addToCartWithExtras: async (productObj: FoodData, extras: Extra[]): Promise<void> => {
    const loadingToast = toast.loading("Adding item to cart...");
    
    try {
      const currentVendor = get().getCurrentVendor();
      if (currentVendor && currentVendor !== productObj.vendor.name) {
        throw new Error(`You can only order from one vendor at a time. Please clear your cart or complete your order from ${currentVendor} first.`);
      }

      const normalizedProduct = {
        ...productObj,
        imageUrl: productObj.imageUrl || "/placeholder.png", // Ensure imageUrl is used
        prep_time: productObj.prep_time, // Ensure prep_time is included
        extras: extras.filter(extra => extra.quantity > 0) // Only include extras with quantity > 0
      };

      console.log("Cart data before adding:", normalizedProduct);

      const response = await addCartItemAPI(normalizedProduct);
      
      if (response?.cart?.cartItems) {
        set((state) => ({
          cartItems: response.cart.cartItems || [],
          modal: {
            isOpen: true,
            message: "Item added successfully",
            type: "success",
          },
        }));
        toast.success('Added to cart successfully');
      } else {
        throw new Error('Invalid response from server');
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.error || 'Failed to add item to cart';
      toast.error(errorMessage);
      set({
        modal: {
          isOpen: true,
          message: errorMessage,
          type: "error",
        },
      });
      throw error;
    } finally {
      toast.dismiss(loadingToast);
    }
  },

  removeFromCart: async (id) => {
    try {
      toast.loading("Removing item from cart...", {
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
      toast.success("Item removed successfully", {
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
  updateQuantity: async (id: string, action: string, extraId?: string, extraInfo?: ExtraInfo) => {
    const loadingToast = toast.loading("Updating item...");
  
    try {
      const response = await updateItemQuantityAPI(id, action, extraId, extraInfo);
      
      if (response?.cart?.cartItems) {
        set((state) => ({
          cartItems: response.cart.cartItems,
        }));
  
        toast.success("Item updated successfully");
      } else {
        throw new Error('Invalid response structure');
      }
    } catch (error: any) {
      console.error('Update quantity error:', error);
      toast.error(error.message || 'Failed to update quantity');
    } finally {
      toast.dismiss(loadingToast);
    }
  },
  
  // Add this new method for updating extras
  updateExtraQuantity: async (itemId: string, extraId: string, newQuantity: number) => {
    try {
      toast.loading("Updating extras...", {
        duration: 1000,
        position: "top-center",
      });
      const action = newQuantity > 0 ? "increase" : "decrease";
      const response = await updateItemQuantityAPI(itemId, action, extraId);
      
      set((state) => ({
        cartItems: [...response.data.cart.cartItems],
      }));

      toast.success("Extras updated successfully", {
        duration: 3000,
        position: "top-center",
      });
    } catch (error: any) {
      toast.error(error.message, {
        duration: 3000,
        position: "top-center",
      });
    }
  },
  clearCart: async () => {
    try {
      toast.loading("Clearing cart...", {
        duration: 1000,
        position: "top-center",
      });
      const response = await clearCartAPI();

      set({
        cartItems: response.data.cart.cartItems,
        subscriptions: response.data.subscriptions,
      });

      toast.success("Cart cleared successfully", {
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
