"use client";
import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import styled from "styled-components";

interface InputProps {
  label?: string;
  name: string;
  type: string;
  id: string;
  readOnly?: boolean;
  required?: boolean;
  value: string;
  placeHolder?: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  showPasswordToggle?: boolean;
}

const InputContainer = styled.div`
  /* margin-bottom: 1rem; */
  width: 100%;
`;

const Label = styled.label`
  display: block;
  color: #4b5563;
  margin-bottom: 5px;
  font-size: 13px;
`;

const InputWrapper = styled.div<{ className?: string }>`
  display: flex;
  align-items: center;
  position: relative;
  ${(props) => props.className}
`;

const StyledInput = styled.input`
  background: #d2d2d24d;
  border: none;
  outline: none;
  border-radius: 0.45rem;
  padding: 0.6rem;
  width: 100%;
  transition: all 0.3s ease;

  &:focus {
    border: 1px solid var(--primary);
  }

  &::placeholder {
    font-size: 13px;
  }
`;

const PasswordToggleButton = styled.button`
  margin-left: 0.5rem;
  position: absolute;
  top: 35%;
  right: 0.5rem;
  color: #718096;

  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;

const ErrorMessage = styled.small`
  color: #e53e3e;
  margin-top: 0.25rem;
`;

const Input: React.FC<InputProps> = ({
  label,
  name,
  type,
  id,
  required = false,
  value,
  onChange,
  readOnly = false,
  placeHolder,
  className,
  error,
  showPasswordToggle = false,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <InputContainer>
      {label && <Label htmlFor={id}>{label}</Label>}
      <InputWrapper className={className}>
        <StyledInput
          name={name}
          type={showPassword ? "text" : type}
          id={id}
          required={required}
          placeholder={placeHolder}
          value={value}
          onChange={onChange}
          disabled={readOnly}
        />
        {showPasswordToggle && type === "password" && (
          <PasswordToggleButton type="button" onClick={handleShowPassword}>
            {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
          </PasswordToggleButton>
        )}
      </InputWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputContainer>
  );
};

export default Input;
