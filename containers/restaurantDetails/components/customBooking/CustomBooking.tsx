"use client";
import React, { useState } from "react";
import "./custom-booking.css";
import { RestaurantMeal } from "../restaurantMeals/RestaurantMeal";
import { RestaurantMPDE } from "../restaurantMeals/RestaurantMPDE";
import { CustomBookingModal } from "@/containers/food/component/custombooking/CustomBookingModal";

const MobileCustomBooking: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string>("All");

  const handleButtonClick = (label: string) => {
    setActiveButton(label);
  };

  return (
    <div className="mobile_custombooking_container">
      <div className="mobile_custombooking_frame">
        <div className="mobile_custombooking_search-min">
          <div className="mobile_min-buttons">
            {["All", "30mins", "45mins", "1hr"].map((label) => (
              <button
                key={label}
                className={`mobile_min-button ${
                  activeButton === label ? "active" : ""
                }`}
                onClick={() => handleButtonClick(label)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        <button type="submit" className="mobile_custombooking-btn">
          Custom Booking
        </button>
      </div>
    </div>
  );
};

export const CustomBooking: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleButtonClick = (label: string) => {
    setActiveButton(label);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="rest_custombooking_container">
      {/* <div className="rest_custombooking_frame">
        <div className="rest_custombooking_search-min">
          <div className="rest_min-buttons">
            {["All", "30mins", "45mins", "1hr", "2hr"].map((label) => (
              <button
                key={label}
                className={`rest_min-button ${
                  activeButton === label ? "active" : ""
                }`}
                onClick={() => handleButtonClick(label)}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="rest_custombooking-search_box">
            <input
              type="text"
              placeholder="Search here"
              required
              className="rest_custombooking-search_input"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <img
              src="/images/search-normal.svg"
              alt="search-normal"
              className="rest_custombooking-search_img"
            />
          </div>
        </div>
        <button
          type="submit"
          className="rest_custombooking-btn"
          onClick={openModal}
        >
          Custom Booking
        </button>
        <CustomBookingModal isOpen={isModalOpen} onClose={closeModal} />
      </div> */}
      <MobileCustomBooking />
      <RestaurantMPDE activeButton={activeButton} searchQuery={searchQuery} />
    </div>
  );
};
