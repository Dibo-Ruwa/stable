"use client";
import React, { useEffect, useState } from "react";
import { BackButton } from "@/components/ui/BackButton/BackButton";
import { DisplayFood } from "./containers/detailed-food-container/display-food/DisplayFood";
import { CheckoutStore } from "./containers/checkout-store/CheckoutStore";
import { SimilarMeal } from "./containers/similar-meal/SimilarMeal";
import styles from "./food-details.module.css";



const FoodDetail: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  useEffect(() => {
    // Your useEffect logic here
  }, []);

  return (
    <section className={styles.food_details_container}>
      <div className={styles.food_details_frame}>
        <div className={styles.Back_Btn}>
          <BackButton />
        </div>
        <button
          onClick={toggleVisibility}
          className={styles.ToggleCheckout_btn}
        >
          {isVisible ? "Hide Checkout" : "Show Checkout"}
        </button>
        <div className={styles.df_cs}>
          <div className={styles.df_cs_food}>
            <DisplayFood />
            <SimilarMeal />
          </div>
          <div
            className={`${styles.df_cs_foodCheckOut} ${
              isVisible ? "block" : "hidden"
            }`}
          >
            {/* Overlay background for desktop only */}
            <div
              className={`fixed inset-0 w-screen h-screen bg-transparent ${
                isVisible ? "md:block" : "hidden"
              }`}
              onClick={toggleVisibility}
            />
            <CheckoutStore />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodDetail;
