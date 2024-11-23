"use client";
import React, { useEffect, useState } from "react";
import { BackButton } from "@/components/ui/BackButton/BackButton";
import { DisplayFood } from "./containers/detailed-groceries-container/display-food/DisplayFood";
import { CheckoutStore } from "./containers/checkout-store/CheckoutStore";
import { SimilarMeal } from "./containers/similar-meal/SimilarMeal";


const GroceriesDetail: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  useEffect(() => {
    // Your useEffect logic here
  }, []);

  return (
    <section className="bg-[#f8f8f8]">
      <div className="mx-auto mt-24 w-[95%] max-w-[1440px]">
        <div className="mb-4">
          <BackButton />
        </div>
        <button
          onClick={toggleVisibility}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          {isVisible ? "Hide Checkout" : "Show Checkout"}
        </button>
        <div className="relative flex justify-between gap-4 md:gap-0">
          <div className="flex-[0.67] w-full md:flex-[1]">
            <DisplayFood />
            <SimilarMeal />
          </div>
          <div
            className={`flex-[0.3] md:fixed md:w-[90%] md:max-w-[400px] md:top-24 md:right-0 md:h-auto ${
              isVisible ? "block" : "hidden"
            }`}
          >
            <div
              className="fixed inset-0 w-screen h-screen bg-transparent hidden md:block"
              onClick={toggleVisibility}
            />
            <CheckoutStore />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroceriesDetail;
