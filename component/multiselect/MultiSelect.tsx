import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import styled from "styled-components";

interface MultiSelectProps {
  options: string[];
  onChange: (selectedValues: string[]) => void;
}

const SelectContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;

  .dropbox {
    display: flex;
    align-items: center;
    border-radius: 12px;
    padding: 15px;
    gap: 5px;
    background: var(--primary-20);

    span {
      margin-left: auto;
    }
  }
`;

const OptionContainer = styled.div<{ open: boolean }>`
 border-radius: 8px;
 background: #fff;
  display: ${({ open }) => (open ? "grid" : "none")};
position: absolute;
top: 110%;
width: 100%;
left: 0;
  overflow: hidden;
`;
const OptionItem = styled.div<{ selected: boolean }>`
  padding: 8px;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? "var(--primary)" : "transparent")};

  &:hover {
    background-color: #f0f0f0;
  }
`;

const SelectedPills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

const Pill = styled.div`
  background-color: var(--primary-20);
  border: 1px solid #ccc;
  padding: 4px 8px;
  font-size: 12px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const MultiSelect: React.FC<MultiSelectProps> = ({ options, onChange }) => {
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleOptionClick = (option: string) => {
    const newSelectedValues = selectedValues.includes(option)
      ? selectedValues.filter((value) => value !== option)
      : [...selectedValues, option];

    setSelectedValues(newSelectedValues);
    onChange(newSelectedValues);
  };

  return (
    <SelectContainer>
      <div className="dropbox">
        <SelectedPills>
          {selectedValues.map((selectedValue) => (
            <Pill
              key={selectedValue}
              onClick={() => handleOptionClick(selectedValue)}
            >
              {selectedValue}
            </Pill>
          ))}
        </SelectedPills>

        <span onClick={() => setOpenDropdown((prev) => !prev)}>
          <FaChevronDown />
        </span>
      </div>

      <OptionContainer open={openDropdown}>
        {options.map((option) => (
          <OptionItem
            key={option}
            selected={selectedValues.includes(option)}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </OptionItem>
        ))}
      </OptionContainer>
    </SelectContainer>
  );
};

export default MultiSelect;
