import React, { useState } from "react";
import "./custombooking.css";
import { CustomBookingModal } from "./CustomBookingModal";

interface CustomBookingProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeButton: string;
  setActiveButton: (label: string) => void;
}

const CustomBooking: React.FC<CustomBookingProps> = ({
  searchQuery,
  setSearchQuery,
  activeButton,
  setActiveButton,
}) => {
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
    <div className="custombooking_container">
      <div className="custombooking_frame">
        <div className="custombooking_search-min">
          <div className="min-buttons">
            {["All", "30mins", "45mins", "1hr", "2hr"].map((label) => (
              <button
                key={label}
                className={`min-button ${
                  activeButton === label ? "active" : ""
                }`}
                onClick={() => handleButtonClick(label)}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="custombooking-search_box">
            <input
              type="text"
              placeholder="Search here"
              required
              className="custombooking-search_input"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <img
              src="/images/search-normal.svg"
              alt="search-normal"
              className="custombooking-search_img"
            />
          </div>
        </div>
        <button type="button" className="custombooking-btn" onClick={openModal}>
          Custom Booking
        </button>
        <CustomBookingModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
  );
};

export default CustomBooking;
