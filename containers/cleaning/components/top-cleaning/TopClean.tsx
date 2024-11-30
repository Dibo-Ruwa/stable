import React from "react";
import "./top-clean.css";
import Link from "next/link";
import { TopCleaning, TopCleaningType } from "@/constants";

export const TopClean: React.FC = () => {
  return (
    <div className="Laundry_Toprest-ad">
      <p className="Laundry_title">{TopCleaning[0].title}</p>
      <div className="Laundry_cards">
        {TopCleaning.slice(1, 5).map((item: TopCleaningType, index) => (
          <div key={item._id} className="Laundry_card">
            <img className="Laundry_top" src={item.image} alt={item.tag} />
            <div className="Laundry_card-details">
              <div className="Laundry_text-details">
                <div className="Laundry_title_rating_container">
                  <p className="Laundry_small-title">{item.smallTitle}</p>
                  <div className="Laundry_rating-container">
                    {item.starIcon &&
                      React.createElement(item.starIcon, {
                        className: "Laundry_rating_star_icon",
                      })}
                    <small className="Laundry_rating_num">{item.rating}</small>
                    <small className="Laundry_reviews">
                      {item.reviewsText} {item.reviewsNum}
                    </small>
                  </div>
                </div>
                <div className="Laundry_location_time_container">
                  <div className="Laundry_location">
                    {item.locationIcon &&
                      React.createElement(item.locationIcon, {
                        className: "Laundry_top_rated_loction_icon",
                      })}
                    <div className="Laundry_location-text">
                      {item.locationText}
                    </div>
                  </div>
                  <div className="Laundry_time_dot"></div>
                  <div className="Laundry_time">{item.timeNum}</div>
                </div>
              </div>

              <Link
                href={`/laundry/${item._id}`}
                className="Laundry_visit-link"
              >
                <p className="Laundry_visit-link_text">visit</p>
                {item.arrowIcon &&
                  React.createElement(item.arrowIcon, {
                    className: "Laundry_visit_link_icon",
                  })}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
