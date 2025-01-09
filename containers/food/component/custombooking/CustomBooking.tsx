import React, { useState } from "react";
import "./custombooking.css";
import { CustomBookingModal } from "./CustomBookingModal";

interface CustomBookingProps {
  searchQuery: string;
  activeButton: string;
  setActiveButton: (label: string) => void;
  setSearchQuery: (label: string) => void;
}

const CustomBooking: React.FC<CustomBookingProps> = ({
  activeButton,
  setActiveButton,
  setSearchQuery,
  searchQuery
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleButtonClick = (value: string) => {
    setActiveButton(value);
    if (value !== "all") {
      setSearchQuery(value); // Only set search query if value is not "all"
    } else {
      setSearchQuery(''); // Only set search query if value is not "all"

    }
    console.log(value);
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
    { value: "meat", label: "Protein" },
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

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "450px",
                padding: "1rem",
              }}
            >
              <input
                type="text"
                placeholder="Search here"
                style={{
                  height: "42px",
                  flexShrink: 0,
                  borderRadius: "4px",
                  paddingLeft: "1rem",
                  paddingRight: "2.5rem",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#fcfcfc",
                  outline: "none",
                  width: "100%",
                }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <img
                src="/images/search-normal.svg"
                alt="search-normal"
                style={{
                  position: "absolute",
                  right: "2rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "20px",
                  height: "20px",
                }}
              />
            </div>
          </div>
        {/* <button type="button" className="custombooking-btn" onClick={openModal}>
          Custom Booking
        </button> */}
        {/* <CustomBookingModal isOpen={isModalOpen} onClose={closeModal} /> */}
      </div>

      <div className="flex justify-end"></div>
    </div>
  );
};

export default CustomBooking;