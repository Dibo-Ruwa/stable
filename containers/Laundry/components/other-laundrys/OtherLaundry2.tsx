import React, { useEffect, useState } from "react";
import "./other-laundry.css";
import Link from "next/link";
import { OtherLaundryRoom, OtherLaundryType } from "@/constants/index";

interface OtherLaundry1Props {
  selectedRating: string;
  searchQuery: string;
}

export const OtherLaundry2: React.FC<OtherLaundry1Props> = ({
  selectedRating,
  searchQuery,
}) => {
  const filteredLaundry = OtherLaundryRoom.filter((item: OtherLaundryType) => {
    const matchesRating =
      selectedRating === "All" ||
      (item.rating !== undefined &&
        Number(item.rating) === Number(selectedRating));

    const matchesSearch = item.smallTitle
      ? item.smallTitle.toLowerCase().includes(searchQuery.toLowerCase())
      : false; // Ensure smallTitle exists

    return matchesRating && matchesSearch; // Filter by both rating and search query
  });

  return (
    <div className="other_Laundry_container">
      <div className="other_Laundry_cards">
        {filteredLaundry.length > 0 ? (
          filteredLaundry.map((item: OtherLaundryType) => (
            <div key={item._id} className="other_Laundry_card">
              <img
                className="other_Laundry_img"
                src={item.image}
                alt={item.tag}
              />
              <div className="other_Laundry_card-details">
                <div className="other_Laundry_text-details">
                  <div className="other_Laundry_title_rating_container">
                    <p className="other_Laundry_small-title">
                      {item.smallTitle}
                    </p>
                    <div className="other_Laundry_rating-container">
                      {item.starIcon &&
                        React.createElement(item.starIcon, {
                          className: "other_Laundry_rating_star_icon",
                        })}
                      <small className="other_Laundry_rating_num">
                        {item.rating}
                      </small>
                      <small className="other_Laundry_reviews">
                        {item.reviewsText} {item.reviewsNum}
                      </small>
                    </div>
                  </div>
                  <div className="other_Laundry_location_time_container">
                    <div className="other_Laundry_location">
                      {item.locationIcon &&
                        React.createElement(item.locationIcon, {
                          className: "other_Laundry_top_rated_loction_icon",
                        })}
                      <div className="other_Laundry_location-text">
                        {item.locationText}
                      </div>
                    </div>
                    <div className="other_Laundry_time_dot"></div>
                    <div className="other_Laundry_time">{item.timeNum}</div>
                  </div>
                </div>

                <Link
                  href={`/laundry/${item._id}`}
                  className="other_Laundry_visit-link"
                >
                  <p className="other_Laundry_visit-link_text">visit</p>
                  {item.arrowIcon &&
                    React.createElement(item.arrowIcon, {
                      className: "other_Laundry_visit_link_icon",
                    })}
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>No Laundry found matching your criteria.</p> // Message for no results
        )}
      </div>
    </div>
  );
};
