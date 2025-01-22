import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { RiSearch2Line } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import "./search-filter.css";
import { OverlayFilter } from "./OverlayFilter";

interface SearchFilterProps {
  setSelectedRating: (rating: string) => void;
  setSearchQuery: (query: string) => void;
}

export const SearchFilter: React.FC<SearchFilterProps> = ({
  setSelectedRating,
  setSearchQuery,
}) => {
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [selectedRating, setSelectedRatingState] = useState<string>("All");
  const [selectedStars, setSelectedStars] = useState<number | null>(null); // Track selected stars

  // Function to toggle overlay visibility
  const toggleOverlay = () => {
    setOverlayVisible(!isOverlayVisible);
  };

  // Function to handle rating selection from OverlayFilter
  const handleRatingSelect = (rating: string) => {
    setSelectedRatingState(rating);
    setSelectedStars(Number(rating)); // Convert rating to a number for star icons
    setSelectedRating(rating); // Set the selected rating in the parent component
    setOverlayVisible(false); // Close the overlay after selecting
  };
  return (
    <div className="search_filter_frame">
      <div className="search_filter_container">
        <div className="overlay_search_filter_container">
          <button className="search_filter_btn" onClick={toggleOverlay}>
            {selectedStars !== null && (
              <FaStar className="search_filter_star_icon" />
            )}
            <p className="search_filter_btn_text">{selectedRating}</p>
            <FaAngleDown
              className={`search_filter_btn_icon ${
                isOverlayVisible ? "rotate" : ""
              }`}
            />
          </button>
          {isOverlayVisible && (
            <OverlayFilter onRatingSelect={handleRatingSelect} />
          )}
        </div>
        <div className="search_filter_box">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search here"
            className="search_filter_input"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <RiSearch2Line className="search_filter_icon" />
        </div>
      </div>
    </div>
  );
};
