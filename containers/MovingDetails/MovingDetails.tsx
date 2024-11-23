import React from "react";
import { AboutMoving } from "./components/MovingDetails/AboutMoving";
import { LeftMovingContainer } from "./components/leftMovingContainer/LeftMovingContainer";
import "./moving-details.css";
import { BackButton } from "@/component/ui/BackButton/BackButton";
import { MovingBRP } from "./components/MovingBRP/MovingBRP";

export const MovingDetails = () => {
  return (
    <div className="Moving_head">
      <BackButton className="Back_Button"/>
      <div className="Moving_restCont">
        <div className="Moving_Cont">
          <AboutMoving />
          <MovingBRP />
        </div>
        <LeftMovingContainer />
      </div>
    </div>
  );
};
