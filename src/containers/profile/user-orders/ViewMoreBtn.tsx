import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import "./user-food-orders/user-food-orders.css";

interface ViewMoreBtnProps {
  onClick: () => void;
}

export const ViewMoreBtn: React.FC<ViewMoreBtnProps> = ({ onClick }) => {
  const [isRotated, setIsRotated] = useState(false);

  const handleClick = () => {
    setIsRotated(!isRotated);
    onClick();
  };

  return (
    <div onClick={handleClick} className="viewMore_container">
      <FaAngleRight className={`viewMore_icon ${isRotated ? "rotated" : ""}`} />
    </div>
  );
};
