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

        <Message>{message}</Message>

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

  background: #fff;
  border: ${(props) =>
    props.errorType === "success"
      ? "1px solid #4CAF50"
      : props.errorType === "error"
      ? "1px solid #F44336"
      : "1px solid #2196F3"};
  color: ${(props) =>
    props.errorType === "success"
      ? "1px solid #4CAF50"
      : props.errorType === "error"
      ? "1px solid #F44336"
      : "1px solid #2196F3"};

  padding: 20px;
  border-radius: 8px;
  text-align: center;
  z-index: 999;
  text-align: center;
  width: 25%;

  @media screen and (max-width: 768px) {
    width: 80%;
  }

  .icon {
    font-size: 60px;
    margin-bottom: 20px;
  }

  p {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

const Message = styled.p`
  /* Styling for the message */
  margin: 0;
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
