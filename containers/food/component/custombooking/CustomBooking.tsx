import React, { useState } from "react";
import "./custombooking.css";
import { CustomBookingModal } from "./CustomBookingModal";

const CustomBooking: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string>("All");
   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleButtonClick = (label: string) => {
    setActiveButton(label);
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
            {["All", "30 Mins", "45 Mins", "1 Hr", "2 Hr"].map((label) => (
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
