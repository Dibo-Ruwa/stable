import React from 'react';
import styled, { keyframes } from 'styled-components';
import useCartStore from '@/store/useCart.store';
import { IoWarningOutline } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';

interface VendorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentVendor: string;
}

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${fadeIn} 0.2s ease-out;
  padding: 1rem;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  animation: ${slideUp} 0.3s ease-out;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const Title = styled.h2`
  color: #dc2626;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
`;

const VendorName = styled.span`
  color: #111827;
  font-weight: 600;
  background: #f3f4f6;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
`;

const Message = styled.p`
  color: #4b5563;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const OptionsList = styled.ul`
  margin: 0 0 1.5rem 1.25rem;
  color: #6b7280;
  line-height: 1.8;

  li {
    position: relative;
    &::before {
      content: "•";
      color: #dc2626;
      font-weight: bold;
      position: absolute;
      left: -1rem;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

const Button = styled.button<{ variant?: 'danger' }>`
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.2s ease;
  
  ${({ variant }) => variant === 'danger' 
    ? `
      background: #dc2626;
      color: white;
      &:hover { background: #b91c1c; }
    ` 
    : `
      background: #f3f4f6;
      color: #111827;
      &:hover { background: #e5e7eb; }
    `
  }

  &:active {
    transform: scale(0.98);
  }
`;

const WarningIcon = styled(IoWarningOutline)`
  color: #dc2626;
  font-size: 2rem;
`;

const VendorModal: React.FC<VendorModalProps> = ({ isOpen, onClose, currentVendor }) => {
  const { clearCart } = useCartStore();

  if (!isOpen) return null;

  const handleClearCart = async () => {
    await clearCart();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <ModalOverlay onClick={(e) => e.target === e.currentTarget && onClose()}>
          <ModalContent as={motion.div}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}>
            <ModalHeader>
              <WarningIcon />
              <Title>Different Vendor Warning</Title>
            </ModalHeader>
            <Message>
              You already have items from <VendorName>{currentVendor}</VendorName> in your cart.
            </Message>
            <OptionsList>
              <li>Complete your current order first</li>
              <li>Clear your cart to order from a different vendor</li>
            </OptionsList>
            <ButtonGroup>
              <Button onClick={onClose}>
                Keep Current Order
              </Button>
              <Button variant="danger" onClick={handleClearCart}>
                Clear Cart
              </Button>
            </ButtonGroup>
          </ModalContent>
        </ModalOverlay>
      )}
      </AnimatePresence>
    );
};

export default VendorModal;
