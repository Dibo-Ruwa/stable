"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { MdError } from "react-icons/md";
import styled from "styled-components";

interface ModalProps {
  className?: string;
  message: string;
  errorType: "success" | "error" | "info"; // Add more types if needed
  onClose: () => void;
}

const NotificationModal: React.FC<ModalProps> = ({
  className,
  message,
  errorType,
  onClose,
}) => {
  const router = useRouter();
  return (
    <ModalContainer className={className}>
      <ModalContent errorType={errorType}>
        <div className="icon">
          {errorType === "success" ? <BsCheckCircleFill /> : <MdError />}
        </div>

        <h1>{message}</h1>

        {errorType === "info" ? (
          <ProfileButton onClick={() => router.push("/profile")}>
            Go to profile
          </ProfileButton>
        ) : (
          <CloseButton onClick={onClose}>Close</CloseButton>
        )}
      </ModalContent>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  /* Styling for the modal container */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 998;
`;

const ModalContent = styled.div<{ errorType: string }>`
  /* Styling for the modal content */
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  z-index: 999;
  width: 90%;
  max-width: 500px;

  @media screen and (max-width: 768px) {
    width: 95%;
  }

  .icon {
    font-size: 60px;
    margin-bottom: 20px;
    color: ${(props) => (props.errorType === "success" ? "#4CAF50" : "#F44336")};
  }

  h1 {
    font-size: 24px;
    margin: 0;
    color: #121212;
  }

  p {
    font-size: 16px;
    color: #666;
    margin-bottom: 20px;
  }

  .button {
    background-color: #00afdb;
    color: white;
    padding: 12px 25px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;
    margin: 20px 0;
    transition: background-color 0.3s;
  }

  .button:hover {
    background-color: #0091c8;
  }
`;

const CloseButton = styled.button`
  /* Styling for the close button */
  padding: 10px 20px;
  border: none;
  height: 45px;
  background: transparent;
  border: 1px solid #f2274c;
  color: #f2274c;
  border-radius: 8px;
  cursor: pointer;
  font-size: 17px;
`;

const ProfileButton = styled.button`
  /* Styling for the close button */
  padding: 10px 20px;
  border: none;
  height: 45px;
  background: transparent;
  border: 1px solid var(--color4);
  color: var(--color4);
  border-radius: 8px;
  cursor: pointer;
  font-size: 17px;
`;

export default NotificationModal;
