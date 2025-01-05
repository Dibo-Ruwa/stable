import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./about-food.module.css";
import { IoIosStar } from "react-icons/io";
import { MdOutlineTimer } from "react-icons/md";
import { AdditionBtn } from "./AdditionBtn";
import { FoodData } from "@/utils/types/types";
import { CTADelivery } from "../cta-delivery/CTADelivery";
import { useCartItems } from "@/context/CartItems"; // Import the cart context

interface CartDropdownProps {
  selectedItem: FoodData | null; // Allow null
}

const url = process.env.NEXT_PUBLIC_ADMIN_URL;

export const AboutFood: React.FC<CartDropdownProps> = ({ selectedItem }) => {
  const [foodDetails, setFoodDetails] = useState<FoodData | null>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [isProductInCart, setIsProductInCart] = useState<boolean>(false);
  const [extrasQuantities, setExtrasQuantities] = useState<Record<string, number>>({});

  // Use the cart context to access addToCart, updateExtraQuantity, and selectedVendor
  const { addToCart, updateExtraQuantity, setIsCart, isCart, selectedVendor } = useCartItems();

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${url}/api/products/${selectedItem?._id}`);
        const data = response.data?.data;
        setFoodDetails(data);
      } catch (error) {
        console.error("Error fetching food data:", error);
        setError("Failed to fetch food data");
      } finally {
        setLoading(false);
      }
    };

    if (selectedItem?._id) {
      fetchFoodData();
    }
  }, [selectedItem?._id, url]);

  // Check if the product is in the cart
  useEffect(() => {
    if (selectedItem) {
      const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
      const isInCart = cartItems.some((item: FoodData) => item._id === selectedItem._id);
      setIsProductInCart(isInCart);
    }
  }, [selectedItem]);

  // Handle "Add to Cart" button click
  const handleAddToCart = () => {
    if (!selectedItem) return;

    // Check if the item's vendor matches the selected vendor
    if (selectedVendor && selectedItem.vendor.name !== selectedVendor) {
      // Show an alert or modal to inform the user
      alert("You can only select items from one vendor. Please remove items from the current vendor before adding items from another vendor.");
      return;
    }

    // If no vendor is selected, set the vendor to the item's vendor
    if (!selectedVendor) {
      // Update the selected vendor in the context
      // Note: You need to add `setSelectedVendor` to the context if it's not already there
      // For now, we'll assume it's available in the context
      // setSelectedVendor(selectedItem.vendor.name);
    }

    // Add the item to the cart with extras
    const extras = selectedItem.extras.map((extra) => ({
      ...extra,
      quantity: extrasQuantities[extra._id] || 0,
    }));
    addToCart(selectedItem, 1, extras); // Add the item to the cart with extras
    setIsProductInCart(true);
    setIsCart(true);
  };

  // Handle extra quantity changes
  const handleExtraQuantityChange = (extraId: string, change: number) => {
    if (selectedItem) {
      const extra = selectedItem.extras.find((e) => e._id === extraId);
      if (extra) {
        const newQuantity = (extrasQuantities[extraId] || 0) + change;
        setExtrasQuantities((prev) => ({
          ...prev,
          [extraId]: newQuantity,
        }));
        // Update the extra quantity in the cart
        updateExtraQuantity(selectedItem._id, extraId, newQuantity);
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!foodDetails) {
    return <div>No food details available.</div>;
  }

  return (
    <>
      <div className={styles.about_container}>
        <div className={styles.about_content}>
          {/* Conditionally render the "Add to Cart" button */}
          <div
            style={{
              background: "#27a124",
              textAlign: "center",
              color: "#fff",
              padding: "8px",
              borderRadius: "6px",
              marginBottom: "20px",
              cursor: "pointer",
            }}
            onClick={handleAddToCart}
          >
            Add to cart
          </div>

          <div className={styles.frsr_time}>
            <div className={styles.food_rating}>
              <p className={styles.ptext}>{foodDetails?.title}</p>
              <div className={styles.dot}></div>
              <IoIosStar className={styles.rating_star} />
              <div className={styles.rating_num}>4.5</div>
            </div>
            <div className={styles.food_timer}>
              <MdOutlineTimer className={styles.food_time_icon} />
              <div className={styles.time_num}>
                {foodDetails?.prep_time}{" "}
                {foodDetails?.prep_time == "1" || foodDetails?.prep_time == "0"
                  ? "min"
                  : "mins"}
              </div>
            </div>
          </div>
          <p className={styles.food_des}>
            Explore our mouthwatering menu featuring dishes from top restaurants.
            Each item lists preparation time, so you'll know when to expect your
            meal.
          </p>
          <div className={styles.ofd_lr}>
            {/* <div className={styles.ofd}>Offers Free Delivery</div> */}
            {/* <div className={styles.lr}>10 Liters remaining</div> */}
          </div>
          <AdditionBtn
            foodDetails={foodDetails}
            onExtraQuantityChange={handleExtraQuantityChange}
          />
        </div>
      </div>
    </>
  );
};