import React from "react";
import { AboutCleaning } from "./components/CleaningDetails/AboutCleaning";
import { LeftCleaningContainer } from "./components/leftCleaningContainer/LeftCleaningContainer";
import "./cleaning-details.css";
import { BackButton } from "@/component/ui/BackButton/BackButton";
import { CleaningBRP } from "./components/CleaningBRP/CleaningBRP";

export const CleaningDetails = () => {
  return (
    <div className="Laundry_head">
      <BackButton className="Back_Button"/>
      <div className="Laundry_restCont">
        <div className="Laundry_Cont">
          <AboutCleaning />
          <CleaningBRP />
        </div>
        <LeftCleaningContainer />
      </div>
    </div>
  );
};
