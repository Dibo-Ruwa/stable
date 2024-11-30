import React, { useState } from "react";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";

interface ToggleIconProps {
  initialState?: boolean;
  onToggle?: (state: boolean) => void;
  size?: number;
}

export const ToggleIcon: React.FC<ToggleIconProps> = ({
  initialState = false,
  onToggle,
  size = 24,
}) => {
  const [isToggled, setIsToggled] = useState<boolean>(initialState);

  const handleToggle = () => {
    const newState = !isToggled;
    setIsToggled(newState);

    if (onToggle) {
        onToggle(newState);
    }
    };
    
    return (
        <div onClick={handleToggle} style={{cursor: "pointer"}}>
            {isToggled ? (
                <FaToggleOn size={size} color="#4acf50" />
            ): (
             <FaToggleOff size={size} color="#cccccc" />
            )}
      </div>
  )
};
