// Dropdown.tsx
import React, { useState } from "react";
import styled from "styled-components";

interface DropdownProps {
  placeholder?: string;
  options: string[];
  onSelect: (selectedOption: string) => void;
}

const DropdownContainer = styled.div`
  position: relative;
  /* z-index: 999; */
`;

const DropdownButton = styled.button`
  padding: 8px 16px;
  outline: none;
  border: 1px solid var(--primary);
  padding: 10px 15px;
  border-radius: 10px;
  transition: all 0.5s ease-in-out;
  background-color: var(--primary);
  color: #fff;
  border: none;
  min-width: 100px;
  &:hover {
    background: var(--primary);
  }
  cursor: pointer;
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  list-style: none;
  border-radius: 10px;
  width: 100%;
  max-height: 150px;
  overflow: scroll;
  padding: 0;
  margin: 4px 0 0;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  /* overflow: hidden; */
`;

const DropdownItem = styled.li`
  padding: 5px 16px;
  outline: none;
  width: 100%;
  border: 1px solid var(--primary);
  padding: 10px 15px;
  transition: all 0.5s ease-in-out;
  color: var(--primary);
  font-size: 14px;
  border: none;
  &:hover {
    background: var(--primary);
    color: #fff;
  }
  cursor: pointer;
`;

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onSelect,
  placeholder,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown}>
        {selectedOption || placeholder || "Select an option"}
      </DropdownButton>
      {isOpen && (
        <DropdownList>
          {options.map((option) => (
            <DropdownItem
              key={option}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
