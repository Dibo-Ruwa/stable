import React from "react";
import "./top-moving.css";
import Link from "next/link";
import { TopDeliveryAndMoving, TopDeliveryAndMovingType } from "@/constants";

export const TopLaundries: React.FC = () => {
  return (
    <div className="Moving_Toprest-ad">
      <p className="Moving_title">{TopDeliveryAndMoving[0].title}</p>
      <div className="Moving_cards">
        {TopDeliveryAndMoving.slice(1, 5).map((item: TopDeliveryAndMovingType, index) => (
          <div key={item._id} className="Moving_card">
            <img className="Moving_top" src={item.image} alt={item.tag1} />
            <div className="Moving_card-details">
              <div className="Moving_text-details">
                <div className="Moving_title_rating_container">
                  <p className="Moving_small-title">{item.smallTitle}</p>
                  <div className="Moving_rating-container">
                    {item.starIcon &&
                      React.createElement(item.starIcon, {
                        className: "Moving_rating_star_icon",
                      })}
                    <small className="Moving_rating_num">{item.rating}</small>
                    <small className="Moving_reviews">
                      {item.reviewsText} {item.reviewsNum}
                    </small>
                  </div>
                </div>
                <div className="Moving_location_time_container">
                  <div className="Moving_location">
                    {item.locationIcon &&
                      React.createElement(item.locationIcon, {
                        className: "Moving_top_rated_loction_icon",
                      })}
                    <div className="Moving_location-text">{item.locationText}</div>
                  </div>
                  <div className="Moving_time_dot"></div>
                  <div className="Moving_time">{item.timeNum}</div>
                </div>
              </div>

              <Link href={`/moving/${item._id}`} className="Moving_visit-link">
                <p className="Moving_visit-link_text">visit</p>
                {item.arrowIcon &&
                  React.createElement(item.arrowIcon, {
                    className: "Moving_visit_link_icon",
                  })}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
