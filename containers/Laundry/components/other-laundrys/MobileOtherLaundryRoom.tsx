import React, { useEffect, useState } from "react";
import "./other-laundry.css";
import Link from "next/link";
import { MobileOtherLaundry, OtherLaundryType } from "@/constants";

export const MobileOtherLaundryRoom: React.FC = () => {
  return (
    <div className="Mobileother_Laundry_container">
      <div className="Mobileother_Laundry_cards">
        {MobileOtherLaundry.map((item: OtherLaundryType) => (
          <div key={item._id} className="Mobileother_Laundry_card">
            <img
              className="Mobileother_Laundry_img"
              src={item.image}
              alt={item.tag}
            />
            <div className="Mobileother_Laundry_card-details">
              <div className="Mobileother_Laundry_text-details">
                <div className="Mobileother_Laundry_title_rating_container">
                  <p className="Mobileother_Laundry_small-title">
                    {item.smallTitle}
                  </p>
                  <div className="Mobileother_Laundry_rating-container">
                    {item.starIcon &&
                      React.createElement(item.starIcon, {
                        className: "Mobileother_Laundry_rating_star_icon",
                      })}
                    <small className="Mobileother_Laundry_rating_num">
                      {item.rating}
                    </small>
                    <small className="Mobileother_Laundry_reviews">
                      {item.reviewsText} {item.reviewsNum}
                    </small>
                  </div>
                </div>
                <div className="Mobileother_Laundry_location_time_container">
                  <div className="Mobileother_Laundry_location">
                    {item.locationIcon &&
                      React.createElement(item.locationIcon, {
                        className: "Mobileother_Laundry_top_rated_loction_icon",
                      })}
                    <div className="Mobileother_Laundry_location-text">
                      {item.locationText}
                    </div>
                  </div>
                  <div className="Mobileother_Laundry_time_dot"></div>
                  <div className="Mobileother_Laundry_time">{item.timeNum}</div>
                  <div className="Mobileother_Laundry_time_dot"></div>
                  <div
                    className={`Mobileother_Laundry_OpeningTime 
                                ${
                                  item.openTime?.toLowerCase() === "open"
                                    ? "open"
                                    : "closed"
                                }`}
                  >
                    {item.openTime}
                  </div>
                </div>
              </div>

              <Link
                href={`/laundry/${item._id}`}
                className="Mobileother_Laundry_visit-link"
              >
                <p className="Mobileother_Laundry_visit-link_text">visit</p>
                {item.arrowIcon &&
                  React.createElement(item.arrowIcon, {
                    className: "Mobileother_Laundry_visit_link_icon",
                  })}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
