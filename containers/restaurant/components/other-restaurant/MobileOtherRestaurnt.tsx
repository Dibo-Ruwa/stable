import React, { useEffect, useState } from "react";
import "./other-restaurant.css";
import Link from "next/link";
import {
  MobileOtherFoodResturant,
  OtherFoodResturantType,
} from "@/constants";

export const MobileOtherRestaurant: React.FC = () => {
  return (
    <div className="Mobileother_restaurant_container">
      <div className="Mobileother_restaurant_cards">
        {MobileOtherFoodResturant.map((item: OtherFoodResturantType) => (
          <div key={item._id} className="Mobileother_restaurant_card">
            <img
              className="Mobileother_restaurant_img"
              src={item.image}
              alt={item.tag}
            />
            <div className="Mobileother_restaurant_card-details">
              <div className="Mobileother_restaurant_text-details">
                <div className="Mobileother_restaurant_title_rating_container">
                  <p className="Mobileother_restaurant_small-title">
                    {item.smallTitle}
                  </p>
                  <div className="Mobileother_restaurant_rating-container">
                    {item.starIcon &&
                      React.createElement(item.starIcon, {
                        className: "Mobileother_restaurant_rating_star_icon",
                      })}
                    <small className="Mobileother_restaurant_rating_num">
                      {item.rating}
                    </small>
                    <small className="Mobileother_restaurant_reviews">
                      {item.reviewsText} {item.reviewsNum}
                    </small>
                  </div>
                </div>
                <div className="Mobileother_restaurant_location_time_container">
                  <div className="Mobileother_restaurant_location">
                    {item.locationIcon &&
                      React.createElement(item.locationIcon, {
                        className: "Mobileother_restaurant_top_rated_loction_icon",
                      })}
                    <div className="Mobileother_restaurant_location-text">
                      {item.locationText}
                    </div>
                  </div>
                  <div className="Mobileother_restaurant_time_dot"></div>
                  <div className="Mobileother_restaurant_time">{item.timeNum}</div>
                  <div className="Mobileother_restaurant_time_dot"></div>
                            <div
                                className={`Mobileother_restaurant_OpeningTime 
                                ${item.openTime?.toLowerCase() === "open"
                                        ? "open"
                                        : "closed"
                                    }`}
                            >
                    {item.openTime}
                  </div>
                </div>
              </div>

              <Link
                href={`/restaurant/${item._id}`}
                className="Mobileother_restaurant_visit-link"
              >
                <p className="Mobileother_restaurant_visit-link_text">visit</p>
                {item.arrowIcon &&
                  React.createElement(item.arrowIcon, {
                    className: "Mobileother_restaurant_visit_link_icon",
                  })}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
