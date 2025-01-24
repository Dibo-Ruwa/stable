import React, { useState, useEffect } from "react";
import styles from "./about-food.module.css";
import { IoIosStar } from "react-icons/io";
import { MdOutlineTimer } from "react-icons/md";
import { AdditionBtn } from "./AdditionBtn";
import { FoodData } from "@/utils/types/types";
import { CTADelivery } from "../cta-delivery/CTADelivery";
import { useCartItems } from "@/context/CartItems"; // Import the cart context
import { AdditionBtnCart } from "./AdditionBtnCart";
import Loader from "@/component/ui/loader/Loader";


interface CartDropdownProps {
  selectedItem: FoodData | null; // Allow null
  cartsFood?: boolean; // Add optional cartsFood prop
}

export const AboutFoodCart: React.FC<CartDropdownProps> = ({ selectedItem, cartsFood }) => {
  const [foodDetails, setFoodDetails] = useState<FoodData | null>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [isProductInCart, setIsProductInCart] = useState<boolean>(false);
  const [extrasQuantities, setExtrasQuantities] = useState<Record<string, number>>({});

  // Use the cart context to access cartItems, addToCart, and updateExtraQuantity
  const { cartItems, addToCart, updateExtraQuantity, setIsCart, isCart } = useCartItems();

  // Check if the selectedItem is in the cart and set foodDetails
  useEffect(() => {
    if (selectedItem) {
      const itemInCart = cartItems?.find((item) => item._id === selectedItem._id);
      if (itemInCart) {
        setFoodDetails(itemInCart); // Set foodDetails to the item found in the cart
        setIsProductInCart(true); // Mark the product as in the cart
      } else if (cartsFood) {
        setFoodDetails(selectedItem); // Set foodDetails to the selected item
        setIsProductInCart(true); // Mark the product as in the cart
      } else {
        setError("Item not found in the cart");
      }
      setLoading(false); // Stop loading
    }
  }, [selectedItem, cartItems, cartsFood]);

  // Handle "Add to Cart" button click
  const handleAddToCart = () => {
    if (selectedItem) {
      const extras = selectedItem.extras.map((extra) => ({
        ...extra,
        quantity: extrasQuantities[extra._id] || 0,
      }));
      addToCart(selectedItem, 1, extras); // Add the item to the cart with extras
      setIsProductInCart(true);
      setIsCart(true);
    }
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
    return <Loader />;
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
          Explore our mouthwatering menu and grocery products featuring items from top vendors.
            Each item lists preparation or delivery time, so you'll know when to expect your
            order.
          </p>
          <div className={styles.ofd_lr}>
            {/* <div className={styles.ofd}>Offers Free Delivery</div> */}
            {/* <div className={styles.lr}>10 Liters remaining</div> */}
          </div>
          <AdditionBtnCart
            foodDetails={foodDetails}
            onExtraQuantityChange={handleExtraQuantityChange}
          />
          {cartsFood ? ("") : (
          <CTADelivery selectedItem={foodDetails} />
          )}
        </div>
      </div>
    </>
  );
};