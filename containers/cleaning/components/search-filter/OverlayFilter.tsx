import React from "react";
import { FaStar } from "react-icons/fa";

interface OverlayFilterProps {
  onRatingSelect: (rating: string) => void;
}

export const OverlayFilter: React.FC<OverlayFilterProps> = ({
  onRatingSelect,
}) => {
  const ratings = ["5.0", "4.0", "3.0", "2.0"];

  return (
    <div className="overlay_container">
      <p className="overlay_title">All Ratings</p>
      {ratings.map((rating) => (
        <div
          className="overlay_rating"
          key={rating}
          onClick={() => onRatingSelect(rating)} // Update the rating when clicked
        >
          <FaStar className="overlay_rating_star" />
          <p className="overlay_rating_num">{rating}</p>
        </div>
      ))}
    </div>
  );
};
