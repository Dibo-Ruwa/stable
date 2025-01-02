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
    console.log(label);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Define the food categories
  const foodCategories = [
    { value: "all", label: "All" },
    { value: "swallow", label: "Swallow" },
    { value: "drinks", label: "Drinks" },
    { value: "meats", label: "Protein" },
    { value: "Rice and Grain", label: "Rice and Grain" },
    { value: "snacks", label: "Snacks and Fries" },
    { value: "extras", label: "Extras" },
  ];

  return (
    <div className="custombooking_container">
      <div className="custombooking_frame">

        <div className="min-buttons">
          {foodCategories.map((category) => (
            <button
              key={category.value}
              className={`min-button ${
                activeButton === category.value ? "active" : ""
              }`}
              onClick={() => handleButtonClick(category.value)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <button type="button" className="custombooking-btn" onClick={openModal}>
          Custom Booking
        </button>
        <CustomBookingModal isOpen={isModalOpen} onClose={closeModal} />
      </div>

      <div className="flex justify-end"></div>
    </div>
  );
};

export default CustomBooking;
