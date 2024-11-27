import React from "react";
import "./LeftCleaningContainer.css";
import { RestSub } from "./components/RestSub";
import { BookingsFromCleaning } from "./components/BookingsFromCleaning";
import { CleaningPricing } from "./components/CleaningPricing";
export const LeftCleaningContainer = () => {
  return (
    <div className="LeftLaundryContainer">
      <RestSub />
      <CleaningPricing />
      <BookingsFromCleaning />
    </div>
  );
};
