import React from "react";
import "./other-restaurant.css";
import Link from "next/link";
import { OtherFoodResturant } from "@/constants";

interface OtherRestaurant1Props {
  selectedRating: string;
  searchQuery: string;
}

export const OtherRestaurant4: React.FC<OtherRestaurant1Props> = ({
  selectedRating,
  searchQuery,
}) => {
  const filteredRestaurants = OtherFoodResturant.filter((item) => {
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
    <div className="other_restaurant_container">
      <div className="other_restaurant_cards">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((item) => (
            <div key={item._id} className="other_restaurant_card">
              <img
                className="other_restaurant_img"
                src={item.image}
                alt={item.tag}
              />
              <div className="other_restaurant_card-details">
                <div className="other_restaurant_text-details">
                  <div className="other_restaurant_title_rating_container">
                    <p className="other_restaurant_small-title">
                      {item.smallTitle}
                    </p>
                    <div className="other_restaurant_rating-container">
                      {item.starIcon &&
                        React.createElement(item.starIcon, {
                          className: "other_restaurant_rating_star_icon",
                        })}
                      <small className="other_restaurant_rating_num">
                        {item.rating}
                      </small>
                      <small className="other_restaurant_reviews">
                        {item.reviewsText} {item.reviewsNum}
                      </small>
                    </div>
                  </div>
                  <div className="other_restaurant_location_time_container">
                    <div className="other_restaurant_location">
                      {item.locationIcon &&
                        React.createElement(item.locationIcon, {
                          className: "other_restaurant_top_rated_loction_icon",
                        })}
                      <div className="other_restaurant_location-text">
                        {item.locationText}
                      </div>
                    </div>
                    <div className="other_restaurant_time_dot"></div>
                    <div className="other_restaurant_time">{item.timeNum}</div>
                  </div>
                </div>

                <Link
                  href={`/restaurant/${item._id}`}
                  className="other_restaurant_visit-link"
                >
                  <p className="other_restaurant_visit-link_text">visit</p>
                  {item.arrowIcon &&
                    React.createElement(item.arrowIcon, {
                      className: "other_restaurant_visit_link_icon",
                    })}
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>No restaurants found matching your criteria.</p> // Message for no results
        )}
      </div>
    </div>
  );
};
