import React from "react";
import { CustomBooking } from "./components/customBooking/CustomBooking";
import { RestaurantMeal } from "./components/restaurantMeals/RestaurantMeal";
import { AboutRestaurant } from "./components/detailsRestaurant/AboutRestaurant";
import { LeftRestaurantContainer } from "./components/leftRestaurantContainer/LeftRestaurantContainer";
import "./restaurant-details.css";
import { BackButton } from "@/component/ui/BackButton/BackButton";

export const RestaurantDetails = () => {
  return (
    <div className="indi_restCont">
      <BackButton />
      <div className="Restaurant_restCont">
      <div className="ACR_Cont">
        <AboutRestaurant />
        <CustomBooking />
        <RestaurantMeal />
      </div>
      <LeftRestaurantContainer />
      </div>
    </div>
  );
};
