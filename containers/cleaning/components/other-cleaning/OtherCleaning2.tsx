import React from "react";
import "./other-cleaning.css";
import Link from "next/link";
import { OtherCleaningRoom, OtherCleaningType } from "@/constants/index";

export const OtherCleaning2: React.FC = () => {
  return (
    <div className="other_Cleaning_container">
      <div className="other_Cleaning_cards">
        {OtherCleaningRoom.map((item: OtherCleaningType) => (
          <div key={item._id} className="other_Cleaning_card">
            <img
              className="other_Cleaning_img"
              src={item.image}
              alt={item.tag}
            />
            <div className="other_Cleaning_card-details">
              <div className="other_Cleaning_text-details">
                <div className="other_Cleaning_title_rating_container">
                  <p className="other_Cleaning_small-title">
                    {item.smallTitle}
                  </p>
                  <div className="other_Cleaning_rating-container">
                    {item.starIcon &&
                      React.createElement(item.starIcon, {
                        className: "other_Cleaning_rating_star_icon",
                      })}
                    <small className="other_Cleaning_rating_num">
                      {item.rating}
                    </small>
                    <small className="other_Cleaning_reviews">
                      {item.reviewsText} {item.reviewsNum}
                    </small>
                  </div>
                </div>
                <div className="other_Cleaning_location_time_container">
                  <div className="other_Cleaning_location">
                    {item.locationIcon &&
                      React.createElement(item.locationIcon, {
                        className: "other_Cleaning_top_rated_loction_icon",
                      })}
                    <div className="other_Cleaning_location-text">
                      {item.locationText}
                    </div>
                  </div>
                  <div className="other_Cleaning_time_dot"></div>
                  <div className="other_Cleaning_time">{item.timeNum}</div>
                </div>
              </div>

              <Link
                href={`/cleaning/${item._id}`}
                className="other_Cleaning_visit-link"
              >
                <p className="other_Cleaning_visit-link_text">visit</p>
                {item.arrowIcon &&
                  React.createElement(item.arrowIcon, {
                    className: "other_Cleaning_visit_link_icon",
                  })}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
