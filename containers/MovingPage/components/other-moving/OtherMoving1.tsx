import React, { useEffect, useState } from "react";
import "./other-moving.css";
import Link from "next/link";
import {
  OtherDeliveryAndMoving,
  OtherDeliveryAndMovingType,
} from "@/constants";

interface OtherMoving1Props {
  selectedRating: string;
  searchQuery: string;
}

export const OtherMoving1: React.FC<OtherMoving1Props> = ({
  selectedRating,
  searchQuery,
}) => {
  const filteredMoving = OtherDeliveryAndMoving.filter(
    (item: OtherDeliveryAndMovingType) => {
      const matchesRating =
        selectedRating === "All" ||
        (item.rating !== undefined &&
          Number(item.rating) === Number(selectedRating));

      const matchesSearch = item.smallTitle
        ? item.smallTitle.toLowerCase().includes(searchQuery.toLowerCase())
        : false; // Ensure smallTitle exists

      return matchesRating && matchesSearch; // Filter by both rating and search query
    }
  );

  return (
    <div className="other_Moving_container">
      <div className="other_Moving_cards">
        {filteredMoving.length > 0 ? (
          filteredMoving.map((item: OtherDeliveryAndMovingType) => (
            <div key={item._id} className="other_Moving_card">
              <img
                className="other_Moving_img"
                src={item.image}
                alt={item.tag1}
              />
              <div className="other_Moving_card-details">
                <div className="other_Moving_text-details">
                  <div className="other_Moving_title_rating_container">
                    <p className="other_Moving_small-title">
                      {item.smallTitle}
                    </p>
                    <div className="other_Moving_rating-container">
                      {item.starIcon &&
                        React.createElement(item.starIcon, {
                          className: "other_Moving_rating_star_icon",
                        })}
                      <small className="other_Moving_rating_num">
                        {item.rating}
                      </small>
                      <small className="other_Moving_reviews">
                        {item.reviewsText} {item.reviewsNum}
                      </small>
                    </div>
                  </div>
                  <div className="other_Moving_location_time_container">
                    <div className="other_Moving_location">
                      {item.locationIcon &&
                        React.createElement(item.locationIcon, {
                          className: "other_Moving_top_rated_loction_icon",
                        })}
                      <div className="other_Moving_location-text">
                        {item.locationText}
                      </div>
                    </div>
                    <div className="other_Moving_time_dot"></div>
                    <div className="other_Moving_time">{item.timeNum}</div>
                  </div>
                </div>

                <Link
                  href={`/moving/${item._id}`}
                  className="other_Moving_visit-link"
                >
                  <p className="other_Moving_visit-link_text">visit</p>
                  {item.arrowIcon &&
                    React.createElement(item.arrowIcon, {
                      className: "other_Moving_visit_link_icon",
                    })}
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>No Laundry found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};
