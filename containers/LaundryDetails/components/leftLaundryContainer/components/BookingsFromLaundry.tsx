'use client'
import React from "react";
import Lottie from "lottie-react";
import CalenderAnimation from "./CalenderAnimation.json";

export const BookingsFromLaundry = () => {
  return (
    <div className="OrdersFromLaundry_container">
      <p className="OrdersFromLaundry_title">
      Your Bookings will Appear hear
      </p>
      <div className="lottie_Orders">
        <Lottie animationData={CalenderAnimation} loop={true} className="lottie_Orders_animation"/>
        <p className="lottie_Text">No Booking yet</p>
      </div>
    </div>
  );
};
