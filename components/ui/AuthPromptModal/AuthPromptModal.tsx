import React from 'react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 12px;
  max-width: 400px;
  width: 90%;
  text-align: center;
  position: relative;
  
  .icon-wrapper {
    position: absolute;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    top: 0;
    background: white;
    padding: 0.5rem;
    border-radius: 50%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .icon {
    font-size: 3.5rem;
    color: var(--primary);
    display: block;
  }

  h2 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: #333;
    font-size: 1.5rem;
  }

  p {
    margin-bottom: 2rem;
    color: #666;
    line-height: 1.5;
  }

  .buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }

  button {
    padding: 0.8rem 1.5rem;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s ease;

    &.primary {
      background: var(--primary);
      color: white;
      &:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }
    }

    &.secondary {
      background: #f5f5f5;
      color: #333;
      &:hover {
        background: #eaeaea;
      }
    }
  }
`;

interface AuthPromptModalProps {
  onClose: () => void;
  onSignIn: () => void;
}

export const AuthPromptModal: React.FC<AuthPromptModalProps> = ({ onClose, onSignIn }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <div className="icon-wrapper">
          <FaUserCircle className="icon" />
        </div>
        <h2>Sign in Required</h2>
        <p>Please sign in to add items to your cart</p>
        <div className="buttons">
          <button className="primary" onClick={onSignIn}>
            Sign In
          </button>
          <button className="secondary" onClick={onClose}>
            Cancel
          </button>
        </div>
      </ModalContent>
    </ModalOverlay>
  );
};
