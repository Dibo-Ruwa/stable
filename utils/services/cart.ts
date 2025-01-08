import axios from "axios";
import { CartItem, FoodData } from "../types/types";
import { v4 as uuidv4 } from "uuid";

const BASE_URL = `/api/cart`; // Replace with your backend API base URL

// Add a cart item
export function getCartAPI() {
  return axios.get(`${BASE_URL}`);
}

// Add a cart item
export const addCartItemAPI = async (product: FoodData) => {
  try {
    const response = await axios.post("/api/cart", {
      ...product,
      imageUrl: product.imageUrl || "/placeholder.png",
      prep_time: product.prep_time,

    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Remove a cart item
export function removeCartItemAPI(id: string) {
  return axios.delete(`${BASE_URL}/${id}`);
}

// Clear cart
export function clearCartAPI() {
  return axios.delete(`${BASE_URL}`);
}

// Update item quantity (modified to handle extras)
export const updateItemQuantityAPI = async (id: string, action: string, extraId?: string, extraDetails?: any) => {
  try {
    const response = await axios.put(`/api/cart/${id}`, {
      action,
      extraId,
      extraDetails
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
