import React from "react";
import "./other-cleaning.css";
import Link from "next/link";
import { MobileOtherCleaning, OtherCleaningType } from "@/constants";

export const MobileOtherCleaningRoom: React.FC = () => {
  return (
    <div className="Mobileother_Cleaning_container">
      <div className="Mobileother_Cleaning_cards">
        {MobileOtherCleaning.map((item: OtherCleaningType) => (
          <div key={item._id} className="Mobileother_Cleaning_card">
            <img
              className="Mobileother_Cleaning_img"
              src={item.image}
              alt={item.tag}
            />
            <div className="Mobileother_Cleaning_card-details">
              <div className="Mobileother_Cleaning_text-details">
                <div className="Mobileother_Cleaning_title_rating_container">
                  <p className="Mobileother_Cleaning_small-title">
                    {item.smallTitle}
                  </p>
                  <div className="Mobileother_Cleaning_rating-container">
                    {item.starIcon &&
                      React.createElement(item.starIcon, {
                        className: "Mobileother_Cleaning_rating_star_icon",
                      })}
                    <small className="Mobileother_Cleaning_rating_num">
                      {item.rating}
                    </small>
                    <small className="Mobileother_Cleaning_reviews">
                      {item.reviewsText} {item.reviewsNum}
                    </small>
                  </div>
                </div>
                <div className="Mobileother_Cleaning_location_time_container">
                  <div className="Mobileother_Cleaning_location">
                    {item.locationIcon &&
                      React.createElement(item.locationIcon, {
                        className: "Mobileother_Cleaning_top_rated_loction_icon",
                      })}
                    <div className="Mobileother_Cleaning_location-text">
                      {item.locationText}
                    </div>
                  </div>
                  <div className="Mobileother_Cleaning_time_dot"></div>
                  <div className="Mobileother_Cleaning_time">{item.timeNum}</div>
                  <div className="Mobileother_Cleaning_time_dot"></div>
                  <div
                    className={`Mobileother_Cleaning_OpeningTime 
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
                href={`/cleaning/${item._id}`}
                className="Mobileother_Cleaning_visit-link"
              >
                <p className="Mobileother_Cleaning_visit-link_text">visit</p>
                {item.arrowIcon &&
                  React.createElement(item.arrowIcon, {
                    className: "Mobileother_Cleaning_visit_link_icon",
                  })}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
