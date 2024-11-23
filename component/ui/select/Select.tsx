"use client";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { AnimatePresence, motion } from "framer-motion";
import React, {
  ChangeEvent,
  SelectHTMLAttributes,
  useCallback,
  useState,
} from "react";
import styled from "styled-components";

interface Option {
  value: string;
  label: string;
}

type SelectProps = {
  name: string;
  value: string;
  options: Option[];
  onChange: (e: { target: { name: string; value: string } }) => void;
};

const SelectContainer = styled.div`
  position: relative;
  width: 100%;
`;

const Trigger = styled(motion.button)`
  width: 100%;
  outline: none;
  border: none;
  padding: 20px 15px;
  border-radius: 12px;
  font-size: 20px;
  background: var(--primary-20);
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding: 15px;
    font-size: 15px;
  }
`;

const OptionsList = styled(motion.ul)`
  position: absolute;
  top: 110%;
  left: 0;
  height: auto;
  padding: 5px;
  border-radius: 12px;
  background: var(--primary-20);
  list-style: none;
  width: 100%;
`;

const OptionItem = styled(motion.li)`
  padding: 10px;
  transition: all 0.3s ease;
  width: 100%;


  &:hover {
    background: var(--primary-20);
  }
`;

const Select: React.FC<SelectProps> = ({
  name,
  value,
  options,
  onChange,
  ...rest
}) => {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState({
    name: "",
    value: "",
  });

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleOptionClick = (values: { name: string; value: string }) => {
    setSelectedValue(values);
    setOpen((prev) => !prev);
  };

  return (
    <SelectContainer>
      <Trigger onClick={handleOpen}  whileTap={{ scale: 0.95 }}>
        <p>{selectedValue.name !== "" ? value : "Select"}</p>
        <ChevronDownIcon className="w-14" />
      </Trigger>

      <AnimatePresence>
        {open && (
          <OptionsList
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            {options.map((option) => (
              <OptionItem
                key={option.label}
                whileTap={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 100 }}
                onClick={() => handleOptionClick({ name, value: option.value })}
              >
                {option.value}
              </OptionItem>
            ))}
          </OptionsList>
        )}
      </AnimatePresence>
    </SelectContainer>
  );
};

export default Select;
