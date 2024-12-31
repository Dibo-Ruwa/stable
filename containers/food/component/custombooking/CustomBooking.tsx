import React, { useState } from "react";
import "./custombooking.css";
import { CustomBookingModal } from "./CustomBookingModal";

interface CustomBookingProps {
  activeButton: string;
  setActiveButton: (label: string) => void;
}

const CustomBooking: React.FC<CustomBookingProps> = ({
  activeButton,
  setActiveButton,
}) => {
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

  // Define the food categories
  const foodCategories = [
    { value: "swallow", label: "Swallow" },
    { value: "drinks", label: "Drinks" },
    { value: "protein", label: "Protein" },
    { value: "rice_and_grain", label: "Rice and Grain" },
    { value: "snacks", label: "Snacks and Fries" },
    { value: "extras", label: "Extras" },
  ];

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
          <div className="min-buttons">
            {foodCategories.map((category) => (
              <button
                key={category.value}
                className={`min-button ${
                  activeButton === category.label ? "active" : ""
                }`}
                onClick={() => handleButtonClick(category.label)}
              >
                {category.label}
              </button>
            ))}
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
