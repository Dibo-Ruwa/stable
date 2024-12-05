// Dropdown.tsx
import React, { useState } from "react";
import styled from "styled-components";

interface DropdownProps {
  placeholder?: string;
  options: string[];
  onSelect: (selectedOption: string) => void;
  value?: string;
  disabled?: boolean;
}

const DropdownContainer = styled.div`
  position: relative;
  /* z-index: 999; */
`;

const DropdownButton = styled.button<{ isOpen?: boolean; disabled?: boolean }>`
  padding: 12px 16px;
  outline: none;
  border: 2px solid transparent;
  border-radius: 10px;
  transition: all 0.3s ease;
  background-color: ${props => props.isOpen ? '#2ecc71' : props.disabled ? '#ccc' : 'var(--primary)'};
  color: #fff;
  width: 100%;
  font-size: 1rem;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.7 : 1};
  
  &:hover {
    background: ${props => props.disabled ? 'var(--primary)' : '#2ecc71'};
    transform: ${props => props.disabled ? 'none' : 'translateY(-1px)'};
  }

  &:focus {
    border-color: #2ecc71;
    box-shadow: 0 0 0 2px rgba(46, 204, 113, 0.2);
  }
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  list-style: none;
  border-radius: 10px;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  padding: 0;
  margin: 4px 0 0;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  /* Custom Scrollbar Styling */
  &::-webkit-scrollbar {
    width: 8px;
    background-color: #f5f5f5;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--primary);
    border-radius: 4px;
    
    &:hover {
      background-color: darken(var(--primary), 10%);
    }
  }

  &::-webkit-scrollbar-track {
    background-color: #f5f5f5;
    border-radius: 4px;
  }
`;

const DropdownItem = styled.li`
  padding: 12px 16px;
  transition: all 0.3s ease;
  color: #333;
  font-size: 0.95rem;
  border-bottom: 1px solid #f0f0f0;
  
  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: #f8f9fa;
    color: var(--primary);
    padding-left: 20px;
  }
`;

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onSelect,
  placeholder,
  value,
  disabled,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(value || null);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown} isOpen={isOpen} disabled={disabled}>
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
