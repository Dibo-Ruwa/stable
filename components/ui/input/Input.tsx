"use client";
import React, { ChangeEvent, ReactNode, useState } from "react";
import { PiEye, PiEyeClosed } from "react-icons/pi";
import { Container, Error, InputContainer, InputEl, Label, PasswordMeter, Toggle } from "./input.styles";

export type IInputProps = {
  id?: string;
  icon?: ReactNode;
  error?: string;
  placeHolder?: string;
  label?: string;
  value?: string;
  type?: string;
  fullWidth?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  sizes?: "sm" | "md" | "lg";
  variants?: "bordered" | "flat";
  showPasswordMeter?: boolean;
};

const Input: React.FC<IInputProps> = ({
  id,
  icon,
  error,
  placeHolder,
  label,
  value,
  type,
  fullWidth = false,
  onChange,
  name,
  sizes = "md",
  variants = "flat",
  showPasswordMeter = false,
}) => {
  const [toggle, setToggle] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [isFocused, setIsFocused] = useState(false);

  const checkPasswordStrength = (password: string) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasSymbol = /[^A-Za-z0-9]/.test(password);
    const hasNumber = /\d/.test(password);

    const requirements = [hasUpperCase, hasLowerCase, hasSymbol, hasNumber];
    const passedRequirements = requirements.filter((req) => req).length;

    const strength = (passedRequirements / requirements.length) * 100;
    setPasswordStrength(strength);
  };

  const getPasswordErrorMessage = () => {
    if (!passwordStrength) {
      return "Password is weak. It must contain:";
    }

    const requirements = [
      {
        label: "at least 1 uppercase letter",
        fulfilled: /[A-Z]/.test(value || ""),
      },
      {
        label: "at least 1 lowercase letter",
        fulfilled: /[a-z]/.test(value || ""),
      },
      {
        label: "at least 1 symbol",
        fulfilled: /[^A-Za-z0-9]/.test(value || ""),
      },
      { label: "at least 1 number", fulfilled: /\d/.test(value || "") },
    ];

    const unfulfilledRequirements = requirements.filter(
      (req) => !req.fulfilled
    );

    if (unfulfilledRequirements.length === 0) {
      return "";
    }

    const errorMessages = unfulfilledRequirements.map((req) => req.label);
    return `Password must contain ${errorMessages.join(", ")}.`;
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    checkPasswordStrength(newPassword);
  };

  return (
    <Container $fullWidth={fullWidth}>
      {label && <Label>{label}</Label>}
      <InputContainer $fullWidth={fullWidth}>
        <InputEl
          id={id}
          type={toggle ? "text" : type}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeHolder}
          value={value}
          onChange={(e) => {
            onChange && onChange(e);
            if (type === "password") {
              handlePasswordChange(e);
            }
          }}
          name={name}
          $sizes={sizes}
          $variants={variants}
        />
        {type === "password" && (
          <>
            <Toggle onClick={() => setToggle((prev) => !prev)}>
              {toggle ? <PiEyeClosed /> : <PiEye />}
            </Toggle>
            {showPasswordMeter && isFocused && (
              <>
                <PasswordMeter $progress={passwordStrength} />
                <Error $error={!passwordStrength ? getPasswordErrorMessage() : ""}>
                  {!passwordStrength ? getPasswordErrorMessage() : " "}
                </Error>
              </>
            )}
          </>
        )}
        <Error $error={error}>{error}</Error>
      </InputContainer>
    </Container>
  );
};

export default Input;
