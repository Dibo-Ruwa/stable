"use client";

import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  height: 60vh;
  width: 100%;

  h4 {
    font-size: 30px;
  }
  p {
    font-size: 26px;
  }

  a {
    text-decoration: none;
    color: white;
    background: var(--color2);
    padding: 10px 25px;
    border-radius: 8px;
  }
`;

const EmptyCart = () => {
  return (
    <Container>
      <>
        <h4>Ooooppppsss!!!</h4>
        <p>no item in Cart add a few items</p>
        <Link href="/">Go select somethings?</Link>
      </>
    </Container>
  );
};

export default EmptyCart;
