import React from 'react';
import styled from 'styled-components';
import { FaAngleDown } from 'react-icons/fa6';

interface DeliveryMethodProps {
  isPickupAllowed: boolean;
  selectedMethod: 'delivery' | 'pickup';
  onMethodSelect: (method: 'delivery' | 'pickup') => void;
}

const Container = styled.div`
  margin: 1.5rem 0;
`;

const Title = styled.p`
  color: var(--Ash-100, #8f8f8f);
  font-size: 16px;
  margin-bottom: 1rem;
`;

const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
  
  .icon {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: #4bb149;
    pointer-events: none;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  border: 1px solid #4bb149;
  background: transparent;
  color: #4bb149;
  cursor: pointer;
  appearance: none;
  font-size: 1rem;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(75, 177, 73, 0.2);
  }

  option {
    color: #333;
    background: white;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`;

const Button = styled.button<{ isSelected: boolean }>`
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  border: 1px solid #4bb149;
  background: ${props => props.isSelected ? 'rgba(183, 224, 182, 0.2)' : 'transparent'};
  color: ${props => props.isSelected ? '#4bb149' : '#666'};
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 1;

  &:hover {
    background: rgba(183, 224, 182, 0.1);
  }
`;

export const DeliveryMethod: React.FC<DeliveryMethodProps> = ({
  isPickupAllowed,
  selectedMethod,
  onMethodSelect
}) => {
  if (isPickupAllowed) {
    return (
      <Container>
        <Title>Delivery Method</Title>
        <SelectWrapper>
          <Select 
            value={selectedMethod}
            onChange={(e) => onMethodSelect(e.target.value as 'delivery' | 'pickup')}
          >
            <option value="delivery">Delivery</option>
            <option value="pickup">Pick Up</option>
          </Select>
          <FaAngleDown className="icon" />
        </SelectWrapper>
      </Container>
    );
  }

  // When pickup is not allowed, show just the delivery button
  return (
    <Container>
      <Title>Delivery Method</Title>
      <ButtonGroup>
        <Button
          isSelected={selectedMethod === 'delivery'}
          onClick={() => onMethodSelect('delivery')}
        >
          Delivery
        </Button>
      </ButtonGroup>
    </Container>
  );
};
