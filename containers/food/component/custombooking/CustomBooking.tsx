'use client'; // Ensures client-side rendering

import React, { useState, useEffect, useRef } from "react";
import "./custombooking.css";
import { useRouter } from "next/navigation"; // Import for client-side navigation

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
  searchQuery,
}) => {
  const router = useRouter(); // Initialize the router for client-side navigation
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [hasOverflow, setHasOverflow] = useState<boolean>(false);
  const buttonsContainerRef = useRef<HTMLDivElement>(null);

  // Check for overflow on mount and when the window is resized
  useEffect(() => {
    const checkOverflow = () => {
      if (buttonsContainerRef.current) {
        const hasHorizontalOverflow =
          buttonsContainerRef.current.scrollWidth >
          buttonsContainerRef.current.clientWidth;
        setHasOverflow(hasHorizontalOverflow);
      }
    };

    // Check overflow on mount
    checkOverflow();

    // Add event listener for window resize
    window.addEventListener("resize", checkOverflow);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, []);

  const handleButtonClick = (value: string) => {
    setActiveButton(value);
    setSearchQuery(value !== "all" ? value : "");
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
        <div
          ref={buttonsContainerRef}
          className={`min-buttons ${hasOverflow ? "has-overflow" : ""}`}
        >
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

        {/* Navigate to /food/subscription */}
        <button
          type="button"
          className="custombooking-btn"
          onClick={() => router.push("/food/subscription")} // Client-side navigation
        >
          Subscription
        </button>
      </div>

      <div className="flex justify-end"></div>
    </div>
  );
};

export default CustomBooking;