import React from 'react';
import styled from 'styled-components';

const CheckoutBtn = styled.button`
  display: flex;
  width: 100%;
  height: 51px;
  cursor: pointer;
  margin: 2rem auto;
  padding: 7.913px 47.476px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 11.304px;
  border-radius: 4.522px;
  border: 1.13px solid var(--green2, #4bb149);
  background: rgba(183, 224, 182, 0.2);
`;

export const CheckoutButton = () => {
  return (
    <CheckoutBtn>
      Check Out
    </CheckoutBtn>
  );
};
