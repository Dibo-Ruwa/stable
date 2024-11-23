'use client'

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface AdModalProps {
  show: boolean;
  onClose: () => void;
}

const ModalContainer = styled.div<{ show: boolean }>`
  display: ${props => (props.show ? 'block' : 'none')};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  /* Add your modal styling here */
`;

const ModalContent = styled.div`
  /* Modal content styling goes here */
`;

const AdModal: React.FC<AdModalProps> = ({ show, onClose }) => {
  const [modalShown, setModalShown] = useState<boolean>(show);

  useEffect(() => {
    if (!localStorage.getItem('adModalShown')) {
      setModalShown(true);
      localStorage.setItem('adModalShown', 'true');
    }
  }, []);

  const handleClose = () => {
    setModalShown(false);
    onClose();
  };

  return (
    <ModalContainer show={modalShown}>
      <ModalContent>
        {/* Ad modal content goes here */}
        <p>This is a one-time ad modal!</p>
        <button onClick={handleClose}>Close</button>
      </ModalContent>
    </ModalContainer>
  );
};

export default AdModal;
