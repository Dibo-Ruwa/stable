'use client'
import React from "react";
import Lottie from "lottie-react";
import MovingAnimation from "./MovingAnimation.json";

export const OrdersFromRestaurant = () => {
  return (
    <div className="OrdersFromRestaurant_container">
      <p className="OrdersFromRestaurant_title">
        Order's from Flora Restaurant
      </p>
      <div className="lottie_Orders">
        <Lottie animationData={MovingAnimation} loop={true} className="lottie_Orders_animation"/>
        <p className="lottie_Text">You haven't ordered yet</p>
      </div>
    </div>
  );
};
