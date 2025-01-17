"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { MdError, MdInfo } from "react-icons/md";
import { IoClose } from "react-icons/io5";
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
  
  const getIcon = () => {
    switch(errorType) {
      case "success":
        return <BsCheckCircleFill className="success" />;
      case "error":
        return <MdError className="error" />;
      case "info":
        return <MdInfo className="info" />;
      default:
        return null;
    }
  };

  return (
    <ModalOverlay>
      <ModalContainer className={className}>
        <CloseIconButton onClick={onClose}>
          <IoClose />
        </CloseIconButton>
        
        <ModalContent $errorType={errorType}>
          <div className="icon-container">
            {getIcon()}
          </div>

          <MessageText>{message}</MessageText>

          <ButtonGroup>
            {errorType === "info" ? (
              <ActionButton onClick={() => router.push("/profile")} variant="primary">
                Complete Profile
              </ActionButton>
            ) : (
              <ActionButton onClick={onClose} variant={errorType}>
                {errorType === "success" ? "Continue" : "Try Again"}
              </ActionButton>
            )}
          </ButtonGroup>
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  position: relative;
  width: 90%;
  max-width: 400px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  animation: slideUp 0.3s ease-out;

  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const CloseIconButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: #f5f5f5;
    color: #333;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const ModalContent = styled.div<{ $errorType: "success" | "error" | "info" }>`
  text-align: center;

  .icon-container {
    margin-bottom: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    
    svg {
      width: 48px;
      height: 48px;
      
      &.success { color: #10B981; }
      &.error { color: #EF4444; }
      &.info { color: #3B82F6; }
    }
  }
`;

const MessageText = styled.h2`
  font-size: 1.1rem;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const ActionButton = styled.button<{ variant: string }>`
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  ${props => {
    switch(props.variant) {
      case 'success':
        return `
          background: #10B981;
          color: white;
          &:hover { background: #059669; }
        `;
      case 'error':
        return `
          background: #EF4444;
          color: white;
          &:hover { background: #DC2626; }
        `;
      case 'primary':
      case 'info':
        return `
          background: #3B82F6;
          color: white;
          &:hover { background: #2563EB; }
        `;
      default:
        return `
          background: #6B7280;
          color: white;
          &:hover { background: #4B5563; }
        `;
    }
  }}
`;

export default NotificationModal;
