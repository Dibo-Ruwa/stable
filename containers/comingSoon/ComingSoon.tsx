'use client'
import styled from "styled-components";

const Container = styled.div`
width: 100%;
height: 60vh;
display: flex;
justify-content: center;
align-items: center;
font-size: 30px;
`;

const ComingSoon = () => {
  return (
    <Container>
      <h2>Comming soon</h2>
    </Container>
  );
};

export default ComingSoon;
