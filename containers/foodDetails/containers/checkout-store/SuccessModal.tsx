import Link from "next/link";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useOrder from "@/hooks/useOrder";



const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Ensure the modal is on top */
`;

const ModalContainer = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const ModalBody = styled.div`
  margin: 20px 0;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const CancelButton = styled.button`
  background-color: #fff; /* Red color */
  color: #27a124;
  border: 2px solid #27a124;
  border-radius: 4px;
  padding: 10px 15px;
  cursor: pointer;
`;

const ViewButton = styled.a`
  background-color: #27a124; /* Green color */
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  cursor: pointer;
`;

interface SuccessModalProps {
  show: boolean;
  handleClose: () => void;
}

// Add an interface for the order props
interface OrderProps {
  id?: string;
  type?: string;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({
  show,
  handleClose,
}) => {
  // if (!show) return null; // Don't render the modal if it's not shown

  const [orderProps, setOrderProps] = useState<OrderProps>({});
 

  useEffect(() => {
    const storedOrder = localStorage.getItem('orderProps');
    if (storedOrder) {
      setOrderProps(JSON.parse(storedOrder));
    }
  }, [show]); 

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <h2>Order Submitted Successfully</h2>
          <CloseButton onClick={handleClose}>×</CloseButton>
        </ModalHeader>
        <ModalBody>
          Your order has been placed successfully!
          {/* <Link href={`/profile/orders/${orderId}?type=${orderProp.type}`}>View order details</Link>. */}
        </ModalBody>
        <ModalFooter>
        <ViewButton
            href={`/profile/orders/${orderProps?.id}?type=${orderProps?.type}`}
          >
            View order
          </ViewButton>
          .<CancelButton onClick={handleClose}>Cancel</CancelButton>
        </ModalFooter>
      </ModalContainer>
    </ModalOverlay>
  );
};
