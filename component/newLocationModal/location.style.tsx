import styled, { keyframes } from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 40px;
  border-radius: 20px;
  border: none;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 90%;
  position: relative;
  animation: slideIn 0.3s ease-out;

  @keyframes slideIn {
    from {
      transform: translateY(-20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const ModalHeader = styled.header`
  text-align: center;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 1.8rem;
    margin: 15px 0;
    color: #333;
  }

  p {
    color: #666;
    margin: 10px 0;
    font-size: 1.1rem;
  }

  small {
    color: #888;
    font-size: 0.9rem;
  }

  svg {
    filter: drop-shadow(0 4px 6px rgba(0, 150, 0, 0.2));
  }
`;

export const ModalBody = styled.div`
  padding: 20px 0;
`;

export const ErrorMessage = styled.div`
  color: #e74c3c;
  padding: 12px;
  margin-bottom: 20px;
  background-color: #fdeaea;
  border-radius: 8px;
  text-align: center;
  animation: shake 0.5s ease-in-out;

  @keyframes shake {
    0%,
    100% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-5px);
    }
    75% {
      transform: translateX(5px);
    }
  }
`;

export const LoadingMessage = styled.div`
  text-align: center;
  padding: 20px;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &::after {
    content: "";
    width: 20px;
    height: 20px;
    border: 2px solid #ddd;
    border-top-color: var(--primary);
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 35px;
  position: relative;
  z-index: 10;
`;

export const DropdownWrapper = styled.div`
  width: 100%;
  position: relative;
  z-index: 5;

  &:first-child {
    z-index: 6;
  }
`;

export const SubmitButton = styled.button`
  width: 80%;
  padding: 15px;
  border-radius: 12px;
  border: none;
  background: linear-gradient(135deg, var(--primary) 0%, #2ecc71 100%);
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  margin: 40px auto 10px;
  display: block;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(46, 204, 113, 0.2);
  position: relative;
  z-index: 1;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(46, 204, 113, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 18px;
  color: #666;

  &:hover {
    background: #e9ecef;
    transform: rotate(90deg);
  }
`;

export const slideIn = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const Toast = styled.div<{ $isVisible: boolean }>`
  position: fixed;
  top: 20px;
  right: 20px;
  background: #2ecc71;
  color: white;
  padding: 16px 24px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 4px 12px rgba(46, 204, 113, 0.2);
  z-index: 1000;
  animation: ${(props) => (props.$isVisible ? slideIn : fadeOut)} 0.3s
    ease-in-out;

  svg {
    font-size: 1.2rem;
  }
`;