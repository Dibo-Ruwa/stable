import React from 'react';
import styled from 'styled-components';

const Badge = styled.span<{ orderType: 'instant' | 'pre-order' }>`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  background-color: ${({ orderType }) => 
    orderType === 'pre-order' ? '#e3f2fd' : '#e8f5e9'};
  color: ${({ orderType }) => 
    orderType === 'pre-order' ? '#1976d2' : '#2e7d32'};
`;

interface OrderTypeBadgeProps {
  orderType: 'instant' | 'pre-order';
}

export const OrderTypeBadge: React.FC<OrderTypeBadgeProps> = ({ orderType }) => (
  <Badge orderType={orderType}>
    {orderType === 'pre-order' ? 'Pre-Order' : 'Instant Order'}
  </Badge>
);
