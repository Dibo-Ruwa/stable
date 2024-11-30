import React from "react";
import "./top-restaurants.css";
import Link from "next/link";
import { FoodTopResturant } from "@/constants/index";

export const TopRestaurants: React.FC = () => {
  return (
    <div className="Toprest-ad">
      <p className="title">{FoodTopResturant[0].title}</p>
      <div className="cards">
        {FoodTopResturant.slice(1, 5).map((item, index) => (
          <div key={item._id} className="card">
            <img className="top-restaurants" src={item.image} alt={item.tag} />
            <div className="card-details">
              <div className="text-details">
                <div className="title_rating_container">
                  <p className="small-title">{item.smallTitle}</p>
                  <div className="rating-container">
                    {item.starIcon &&
                      React.createElement(item.starIcon, {
                        className: "rating_star_icon",
                      })}
                    <small className="rating_num">{item.rating}</small>
                    <small className="reviews">
                      {item.reviewsText} {item.reviewsNum}
                    </small>
                  </div>
                </div>
                <div className="location_time_container">
                  <div className="location">
                    {item.locationIcon &&
                      React.createElement(item.locationIcon, {
                        className: "top_rated_loction_icon",
                      })}
                    <span className="location-text">{item.locationText}</span>
                  </div>
                  <span className="time_dot"></span>
                  <span className="time">{item.timeNum}</span>
                </div>
              </div>

              <Link href={`/restaurant/${item._id}`} className="visit-link">
                <p className="visit-link_text">visit</p>
                {item.arrowIcon &&
                  React.createElement(item.arrowIcon, {
                    className: "visit_link_icon",
                  })}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
