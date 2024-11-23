import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import './customAddmore.css'
interface CustomAddMoreProps {
  label?: string; // Customizable label text
  Icon?: React.ElementType; // Customizable icon component
  onClick?: () => void; // Optional click handler
  className?: string; // Custom class for container styling
}

export const CustomAddMore: React.FC<CustomAddMoreProps> = ({
  label = "Add more", // Default label text
  Icon = AiOutlinePlus, // Default icon
  onClick,
  className = "CustomAddMore_container", // Default class for styling
}) => {
  return (
    <div className={className} onClick={onClick}>
      <div className="CustomAddMore_content">
        <p>{label}</p>
        <Icon />
      </div>
    </div>
  );
};
