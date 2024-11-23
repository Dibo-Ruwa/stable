'use client'
import React, { useState } from "react";
import "./custom-booking.css";

const MobileCustomBooking: React.FC  = () => {
    const [activeButton, setActiveButton] = useState<string>("All");

    const handleButtonClick = (label: string) => {
      setActiveButton(label);
    };

    return (
      <div className="mobile_custombooking_container">
        <div className="mobile_custombooking_frame">
          <div className="mobile_custombooking_search-min">
            <div className="mobile_min-buttons">
              {["All", "30 Mins", "45 Mins", "1 Hr"].map((label) => (
                <button
                  key={label}
                  className={`mobile_min-button ${activeButton === label ? "active" : ""}`}
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
export const CustomBooking: React.FC  = () => {
    const [activeButton, setActiveButton] = useState<string>("All");

    const handleButtonClick = (label: string) => {
      setActiveButton(label);
    };

    return (
      <div className="rest_custombooking_container">
        <div className="rest_custombooking_frame">
          <div className="rest_custombooking_search-min">
            <div className="rest_min-buttons">
              {["All", "30 Mins", "45 Mins", "1 Hr", "2Hr"].map((label) => (
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
              />
              <img
                src="/images/search-normal.svg"
                alt="search-normal"
                className="rest_custombooking-search_img"
              />
            </div>
          </div>
          <button type="submit" className="rest_custombooking-btn">
            Custom Booking
          </button>
        </div>
        <MobileCustomBooking />
      </div>
    );
  };
