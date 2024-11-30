import React from "react";
import { AboutLaundry } from "./components/LaundryDetails/AboutLaundry";
import { LeftLaundryContainer } from "./components/leftLaundryContainer/LeftLaundryContainer";
import "./laundry-details.css";
import { BackButton } from "@/component/ui/BackButton/BackButton";
import { LaundryBRP } from "./components/LaundryBRP/LaundryBRP";

export const LaundryDetails = () => {
  return (
    <div className="Laundry_head">
      <BackButton className="Back_Button"/>
      <div className="Laundry_restCont">
        <div className="Laundry_Cont">
          <AboutLaundry />
          <LaundryBRP />
        </div>
        <LeftLaundryContainer />
      </div>
    </div>
  );
};
