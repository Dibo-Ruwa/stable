import React from 'react';
import styled from 'styled-components';

const MethodContainer = styled.div`
  margin: 1rem 0;
`;

const MethodOption = styled.div<{ selected: boolean }>`
  padding: 1rem;
  margin: 0.5rem 0;
  border: 1px solid ${props => props.selected ? '#4bb149' : '#ddd'};
  border-radius: 4px;
  cursor: pointer;
  background: ${props => props.selected ? 'rgba(183, 224, 182, 0.2)' : 'white'};

  &:hover {
    background: rgba(183, 224, 182, 0.1);
  }
`;

interface DeliveryMethodProps {
  isPickupAllowed: boolean;
  selectedMethod: 'delivery' | 'pickup';
  onMethodSelect: (method: 'delivery' | 'pickup') => void;
}

export const DeliveryMethod: React.FC<DeliveryMethodProps> = ({
  isPickupAllowed,
  selectedMethod,
  onMethodSelect
}) => {
  return (
    <MethodContainer>
      <h3>Delivery Method</h3>
      <MethodOption 
        selected={selectedMethod === 'delivery'}
        onClick={() => onMethodSelect('delivery')}
      >
        Delivery
      </MethodOption>
      {isPickupAllowed && (
        <MethodOption 
          selected={selectedMethod === 'pickup'}
          onClick={() => onMethodSelect('pickup')}
        >
          Pickup
        </MethodOption>
      )}
    </MethodContainer>
  );
};
