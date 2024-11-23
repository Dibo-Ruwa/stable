import React from "react";
import "./LeftLaundryContainer.css";
import { RestSub } from "./components/RestSub";
import { BookingsFromLaundry } from "./components/BookingsFromLaundry";
import { LaundryPricing } from "./components/LaundryPricing";
export const LeftLaundryContainer = () => {
  return (
    <div className="LeftLaundryContainer">
      <RestSub />
      <LaundryPricing />
      <BookingsFromLaundry />
    </div>
  );
};
