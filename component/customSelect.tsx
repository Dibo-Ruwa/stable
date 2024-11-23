"use client";

import { usePathname } from "next/navigation";
import React, { useState } from "react";
import styled from "styled-components";

const CustomSelectContainer = styled.div<{ cart: boolean }>`
  position: relative;
  width: 100%;

  background: ${({ cart }) => cart && "#fff"};
  border-radius: 0.45rem;
  
  label {
    display: block;
    color: #4b5563;
    margin-bottom: 5px;
  }
  @media screen and (max-width: 768px) {
    /* min-width: 300px; */
  }
`;

const CustomSelectButton = styled.button`
  border: 1px solid var(--primary-20);
  outline: none;
  border-radius: 0.45rem;
  padding: 0.6rem;
  min-height: 35px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: transparent;
  width: 100%;

  &:focus {
    border: 1px solid var(--primary);
  }
`;

const CustomOptionsList = styled.ul`
  position: absolute;
  width: 100%;
  max-height: 150px;
  overflow-y: auto;
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid var(--primary-20);
  background: #fff;
  border-radius: 0.45rem;
  background: #fff;
  z-index: 999;
`;

const CustomOption = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: var(--primary-20);
  }
`;

interface CustomSelectProps {
  label?: string;
  disabled?: boolean;
  options: string[] | undefined;
  value: string;
  name: string;
  error?: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  disabled,
  options,
  value,
  name,
  onChange,
  error,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  const handleOptionClick = (option: string) => {
    onChange({
      target: { value: option, name },
    } as React.ChangeEvent<HTMLSelectElement>);
    setIsOpen(false);
  };

  return (
    <CustomSelectContainer cart={pathname === "/cart"}>
      <label>{label}</label>
      <CustomSelectButton
       
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        disabled={disabled}
      >
        {value}
      </CustomSelectButton>
      {error && <small>{error}</small>}
      {isOpen && (
        <CustomOptionsList>
          {options &&
            options.map((option) => (
              <CustomOption
                key={option}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </CustomOption>
            ))}
        </CustomOptionsList>
      )}
    </CustomSelectContainer>
  );
};

export default CustomSelect;
