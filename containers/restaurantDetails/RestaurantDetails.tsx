import React from "react";
import { CustomBooking } from "./components/customBooking/CustomBooking";
import { RestaurantMeal } from "./components/restaurantMeals/RestaurantMeal";
import { AboutRestaurant } from "./components/detailsRestaurant/AboutRestaurant";
import { LeftRestaurantContainer } from "./components/leftRestaurantContainer/LeftRestaurantContainer";
import './restaurant-details.css'

export const RestaurantDetails = () => {
  return (
    <div className="indi_restCont">
      <div className="ACR_Cont">
        <AboutRestaurant />
        <CustomBooking />
        <RestaurantMeal />
      </div>
      <LeftRestaurantContainer />
    </div>
  );
};
